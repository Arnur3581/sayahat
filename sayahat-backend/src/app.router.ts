import express from "express";
import { authRouter } from "./features/auth/auth.router";
import { userRouter } from "./features/user/user.router";

const appRouter = express.Router();

appRouter.use("/auth", authRouter);
appRouter.use("/users", userRouter);

export { appRouter };
