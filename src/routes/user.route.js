import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { UserController } from "../controllers/index.js";

const router = express.Router();
router.post("/registration", UserController.register);
router.post("/login", UserController.login);
router.get("/", authenticate, UserController.getAll);
router.get("/:id", authenticate, UserController.getUserById);
router.get("/:id/streams", authenticate, UserController.getAllStreamByUserId);
router.get("/:uid/streams/:sid", authenticate, UserController.getStreamByUserId);
router.delete("/:uid/streams/:sid", authenticate, UserController.removeUserFromStream);
router.patch("/:id", authenticate, UserController.updateUser);
router.delete("/:id", authenticate, UserController.deleteUser);

export default router;
