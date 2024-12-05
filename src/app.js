import express from "express";
import { indexRouter } from "./routes/indexRouter.js";
const app = express();

export default app;

app.use(express.json());

app.use("/", indexRouter);
