import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { StreamController } from "../controllers/index.js";

const router = express.Router();
router.post("/", authenticate, StreamController.addStream);
router.get("/", authenticate, StreamController.getAllStrams);
router.get("/:id", authenticate, StreamController.getStreamById);
router.patch("/:id", authenticate, StreamController.addUsertoStream);
// router.patch("/:id", authenticate, StreamController.updateUser);
// router.delete("/:id", authenticate, StreamController.deleteUser);

export default router;
