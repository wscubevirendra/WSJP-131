import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

const verifyToken = async (req, res, next) => {
    try {
        let token = null;

        // Get token from cookie
        if (req.cookies?.token) {
            token = req.cookies.token;
        }

        // Token not found
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Authentication required. Token not found."
            });
        }

        // Verify token
        const decoded = jwt.verify(
            token,
            process.env.SECRET_KEY
        );

        // Find user
        const user = await UserModel
            .findById(decoded._id)
            .select("-password");

        // User not found
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Authentication failed. User not found."
            });
        }

        // Attach user to request
        req.user = user;

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Authentication failed. Invalid or expired token."
        });
    }
};


const authorized = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(401).json({
                success: false,
                message: "Authentication failed. admin token required."
            });
        }
        next()
    }
}

export { verifyToken, authorized };



