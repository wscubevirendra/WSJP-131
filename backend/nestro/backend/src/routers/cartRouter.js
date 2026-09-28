import express from "express";
const router = express.Router();
import { sync } from "../controllers/cart.controller.js"
import { verifyToken } from "../middleware/auth.js";


router.post("/sync", verifyToken, sync);

export default router