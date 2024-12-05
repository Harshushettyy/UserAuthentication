import express from "express";
import { userRouter } from "./userRouter.js";

const indexRouter = express.Router();
indexRouter.use("/api/v1/users", userRouter);

export { indexRouter };
