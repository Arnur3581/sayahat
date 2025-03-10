import express from "express";
import { RouteController } from "./route.controller";

const routeRouter = express.Router();
const routeController = new RouteController();

routeRouter.get("/routes", routeController.getSpecSize(15));
