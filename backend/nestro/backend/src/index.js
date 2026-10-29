import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import cors from "cors"
import cookieParser from "cookie-parser"
import categoryRouter from './routers/categoryRouter.js';
import roomRouter from './routers/roomRouter.js';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import cartRouter from './routers/cartRouter.js';
import orderRouter from './routers/orderRouter.js';
const server = express();
server.use(express.json());
server.use(cookieParser());
server.use(cors({ origin: "http://localhost:3000", credentials: true }))
server.use("/api/category", categoryRouter);
server.use("/api/room-type", roomRouter);
server.use("/api/product", productRouter);
server.use("/api/user", userRouter);
server.use("/api/cart", cartRouter);
server.use("/api/order", orderRouter);


mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("DataBase connected")
    server.listen(process.env.PORT, () => {
        console.log(`Server is running port number ${process.env.PORT} `)
    })


}).catch(() => {
    console.log("DataBase not connect")
})


