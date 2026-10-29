import UserModel from "../models/user.model.js";
import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.SECRET_KEY);
import {
    generateOtp,
    generateToken,
    getOtpExpire
} from "../utils/helper.js";
import { sendBadRequest, sendConflict, sendServerError, sendSuccess } from '../utils/response.js'
import sendOtpMail from "../utils/sendOtpMail.js";

export const addAddress = async (req, res) => {
    try {
        const userId = "6ab5f0dad8eedfa180e43be0";
        const address = req.body;

        const user = await UserModel.findById({ _id: userId });
        user.addresses.push(address);
        await user.save();

        res.json({ success: true, addresses: user.addresses });
    } catch (err) {

        res.status(500).json({ error: err.message });
    }
};



const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
        });

        return res.status(200).json({
            success: true,
            message: "Logout successful.",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong while logging out.",
        });
    }
};

export { logout };

export const getMe = async (req, res) => {
    try {
        const user = req.user;
        return res.status(200).json({
            success: true,
            message: "Registration successful",
            user
        });

    } catch (error) {
        return sendServerError(res)
    }
};

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) return sendBadRequest(res, "Name, email and password are required")
        // Check existing user
        const existingUser = await UserModel.findOne({ email: email.toLowerCase() });
        // Already verified user
        if (existingUser && existingUser.isVerified) return sendConflict(res, "Email already registered")
        // Generate OTP

        const otp = generateOtp();
        const otpExpire = getOtpExpire();

        const success = sendOtpMail(email, otp)
        if (success === false) {
            return sendServerError(res)
        }

        // Create new user
        const user = await UserModel.create({
            name,
            email: email.toLowerCase(),
            password: cryptr.encrypt(password),
            isVerified: false,
            otp,
            otpExpire
        });

        return res.status(201).json({
            success: true,
            message: "Registration successful. Please verify OTP.",
            email: user.email
        });

    } catch (error) {
        return sendServerError(res)
    }
};


export const verifyRegisterOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) return sendBadRequest(res, "Email and Otp are required")
        const user = await UserModel.findOne({ email: email.toLowerCase() });
        if (!user) return sendConflict(res, "User not found")
        // Already verified
        if (user.isVerified) {
            return res.status(400).json({
                success: false,
                message: "Account already verified"
            });
        }

        // OTP check
        if (Number(otp) !== Number(user.otp)) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            });
        }

        // Expiry check
        if (user.otpExpire < new Date()) {
            return res.status(400).json({
                success: false,
                message: "OTP has expired"
            });
        }

        // Verify account
        user.isVerified = true;

        // Remove OTP after successful verification
        user.otp = undefined;
        user.otpExpire = undefined;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Account verified successfully"
        });

    } catch (error) {
        console.error("Verify OTP Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};


export const resendRegisterOtp = async (req, res) => {
    try {
        const { email } = req.body;

        // Validation
        if (!email) {
            return sendBadRequest(res, "Email is required");
        }

        const normalizedEmail = email.toLowerCase().trim();

        // Find user
        const user = await UserModel.findOne({
            email: normalizedEmail
        });

        // User not found
        if (!user) {
            return sendBadRequest(res, "User not found");
        }

        // Already verified
        if (user.isVerified) {
            return sendConflict(res, "Account already verified");
        }

        // Generate new OTP
        const otp = generateOtp();
        const otpExpire = getOtpExpire();

        // Send OTP email
        const emailResult = await sendOtpMail(
            normalizedEmail,
            otp
        );

        // Email sending failed
        if (!emailResult || !emailResult.includes("successfully")) {
            return sendServerError(res, "Failed to send OTP email");
        }

        // Update OTP in database
        user.otp = otp;
        user.otpExpire = otpExpire;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "OTP resent successfully",
            email: user.email
        });

    } catch (error) {
        console.error("Resend OTP Error:", error);

        return sendServerError(res);
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Validation
        if (!email || !password) return sendBadRequest(res, "Email and password are required")
        // Check existing user
        const user = await UserModel.findOne({ email: email.toLowerCase() });
        // Already verified user
        if (!user) return sendConflict(res, "Please create your accound");
        if (!user.isVerified) return sendConflict(res, "Please verify your accound");
        const decPassword = cryptr.decrypt(user.password)
        console.log(decPassword)

        if (password !== decPassword) return sendBadRequest(res, "Incorect password")
        const token = generateToken(user._id)
        res.cookie('token', token, {
            maxAge: 30 * 24 * 60 * 60 * 1000,       // Cookie lifespan in milliseconds (e.g., 900,000ms = 15 minutes)
            httpOnly: true,       // Prevents client-side scripts from reading the cookie (protects against XSS)
            secure: true,         // Ensures the cookie is only transmitted over HTTPS
            sameSite: 'strict'    // Helps mitigate Cross-Site Request Forgery (CSRF) attacks
        });
        return sendSuccess(res);

    } catch (error) {
        return sendServerError(res)
    }
};


export const read = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json({
            message: "users find",
            sucess: true,
            user
        })

    } catch (error) {

    }

}

