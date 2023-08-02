import config from "../config/index.js";
import { UserService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const UserController = {
	register: async (req, res) => {
		try {
			const existingUser = await UserService.userExist(req.body.email);
			if (existingUser) {
				return httpResponse.CONFLICT(res, null, "User already exist");
			  }
			  const password = req.body.password;
			  const salt = await bcrypt.genSalt(10);
			  const hashedPassword = await bcrypt.hash(password, salt);
			  req.body.password = hashedPassword;
		  
			  const user = await UserService.registerUser(req.body);
			  user.password = undefined;
   			  return httpResponse.CREATED(res, user);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	login: async (req, res) => {
		try {
			const user = await UserService.userExist(req.body.email);
			if (!user) {
				return httpResponse.NOT_FOUND(res, null, "user not found");
			  }
			const isMatch = await bcrypt.compare(req.body.password, user.password);
			if (!isMatch) {
				return res.status(400).json({ status: 400, message: "Invalid Email or Password", success: false });
			}
		  
			const token = jwt.sign({ id: user._id }, config.env.jwtSecret, {
				expiresIn: "1d",
			});
			user.password = undefined;
			res.status(200).send({ message: "Login Success", success: true, user, token }); 
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	getAll: async (req, res) => {
		try {
			const data = await UserService.getAll();
			for (var i in data) {
				data[i].password = undefined
			  }
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	getUserById: async (req, res) => {
		try {
			const user = await UserService.userById(req.params.id);
			if(!user) {
				return httpResponse.NOT_FOUND(res, null, "user not found");
			}
			user.password = undefined;
			return httpResponse.SUCCESS(res, user);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	updateUser: async (req, res) => {
		try { 
			req.body.password = undefined; 
			req.body.email = undefined; 
			const user = await UserService.updateUser(req.params.id, req.body);
			if(!user) {
				return httpResponse.NOT_FOUND(res, null, "user not found");
			} 
			user.password = undefined;
			return httpResponse.SUCCESS(res, user, "User updated successfully");
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	deleteUser: async (req, res) => {
		try {  
			const deletedUser = await UserService.deleteUser(req.params.id);
			if(!deletedUser) {
				return httpResponse.NOT_FOUND(res, null, "user not found");
			} 
			deletedUser.password = undefined;
			return httpResponse.SUCCESS(res, deletedUser, "User deleted successfully");
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
};
