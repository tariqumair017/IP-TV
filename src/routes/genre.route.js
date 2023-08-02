import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { GenreController } from "../controllers/index.js";

const router = express.Router();
router.post("/", authenticate, GenreController.add); 
router.get("/", authenticate, GenreController.getAll);
// router.get("/:id", authenticate, GenreController.getUserById);
// router.patch("/:id", authenticate, GenreController.updateUser);
// router.delete("/:id", authenticate, GenreController.deleteUser);

export default router;
