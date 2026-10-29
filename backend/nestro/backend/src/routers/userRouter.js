import express from "express";
const router = express.Router();
import { register, verifyRegisterOtp, resendRegisterOtp, login, getMe,logout,addAddress, read } from "../controllers/user.controller.js"
import { verifyToken } from "../middleware/auth.js";


router.post("/register", register);
router.post("/verify-register-otp", verifyRegisterOtp);
router.post("/resent-register-otp", resendRegisterOtp);
router.post("/login", login);
router.get("/get-me", verifyToken, getMe)
router.post("/logout", verifyToken, logout);
router.post("/add-address",addAddress)
router.get("/",read)


export default router