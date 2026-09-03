import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import cors from "cors"
import categoryRouter from './routers/categoryRouter.js';
import roomRouter from './routers/roomRouter.js';
import productRouter from './routers/productRouter.js';
const server = express();
server.use(express.json());
server.use(cors({ origin: "http://localhost:3000" }))
server.use("/api/category", categoryRouter);
server.use("/api/room-type", roomRouter);
server.use("/api/product", productRouter);



mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("DataBase connected")
    server.listen(process.env.PORT, () => {
        console.log(`Server is running port number ${process.env.PORT} `)
    })


}).catch(() => {
    console.log("DataBase not connect")
})


