import express from "express";
const router = express.Router();
import { read, orderPlace,verifyPayment } from "../controllers/order.controller.js"
import { verifyToken, authorized } from "../middleware/auth.js";
router.get("/", read)
router.post("/place",verifyToken, orderPlace)
router.post("/payment-verify",verifyToken, verifyPayment)

export default router;