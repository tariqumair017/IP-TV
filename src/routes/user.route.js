import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { UserController } from "../controllers/index.js";

const router = express.Router();
router.post("/registration", UserController.register);
router.post("/login", UserController.login);
router.get("/", authenticate, UserController.getAll);
router.get("/:id", authenticate, UserController.getUserById);
router.patch("/:id", authenticate, UserController.updateUser);
router.delete("/:id", authenticate, UserController.deleteUser);

export default router;
