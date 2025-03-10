import { DB_URI, PORT } from "./config/config";
import { appRouter } from "./app.router";
import { errorHandler } from "#middlewares/errorHandler";

import express, { Application } from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";

const app: Application = express();

app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
		optionsSuccessStatus: 200,
	})
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", appRouter);
app.use(errorHandler);

const run = async () => {
	try {
		await mongoose.connect(DB_URI);
		app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

run();
