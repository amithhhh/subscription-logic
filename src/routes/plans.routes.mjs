import express from "express";
import { getPlans } from "../controllers/plan.controller.mjs";

const router = express.Router();

router.get("", getPlans);

export default router;