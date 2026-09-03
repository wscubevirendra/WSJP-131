import express from "express";
const router = express.Router();
import { create, deleteById, read, readById, status, update } from "../controllers/product.controller.js"
import upload from "../middleware/upload.js";

router.post("/create", upload.single("image"), create);
router.get("/", read);
router.get("/:id", readById);
router.patch("/status/:id", status);
router.delete("/delete/:id", deleteById);
router.put("/update/:id", upload.single("image"), update);

export default router;