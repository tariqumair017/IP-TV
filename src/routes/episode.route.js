import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { EpisodeController } from "../controllers/index.js";

const router = express.Router();
router.post("/", authenticate, EpisodeController.add);
router.get("/", authenticate, EpisodeController.getAll);
router.get("/:id", authenticate, EpisodeController.getEpisodeById);
// router.get("/:id", authenticate, StreamController.getUserById);
// router.patch("/:id", authenticate, StreamController.updateUser);
// router.delete("/:id", authenticate, StreamController.deleteUser);

export default router;
