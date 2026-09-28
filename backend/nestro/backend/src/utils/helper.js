import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

function generateOtp() {
    return Math.floor(
        100000 + Math.random() * 900000
    ).toString()
}


const getOtpExpire = () => {
    return new Date(
        Date.now() + 5 * 60 * 1000
    );
}

const generateToken = (id) => {
    return jwt.sign({
        exp: 30 * 24 * 60 * 60 * 1000,
        _id: id
    }, process.env.SECRET_KEY);
}

export { generateOtp, getOtpExpire,generateToken }