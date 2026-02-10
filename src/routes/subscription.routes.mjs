import express from "express";
import createSubscription from "../controllers/subscription.controller.mjs";

const subscription_route = express.Router();
subscription_route.post("/", createSubscription);

export default subscription_route;