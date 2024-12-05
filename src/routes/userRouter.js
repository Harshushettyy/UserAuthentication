import express from "express";
import { registerUser } from "../controllers/register.js";
import { loginUser } from "../controllers/Login.js";
import { resetPassword } from "../controllers/resetPassword.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.use("/login", loginUser);
userRouter.use("/reset", resetPassword);

export { userRouter };
