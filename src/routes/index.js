import express from "express";

// routes
import userRoute from "./user.route.js";
import genreRoute from "./genre.route.js";
import streamRoute from "./stream.route.js";
import episodeRoute from "./episode.route.js";

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes
protectedRouter.use("/users", userRoute);
protectedRouter.use("/genres", genreRoute);
protectedRouter.use("/streams", streamRoute);
protectedRouter.use("/episodes", episodeRoute);
// Un-Protected Routes
unProtectedRouter.use("/users", userRoute);

export { protectedRouter, unProtectedRouter };
