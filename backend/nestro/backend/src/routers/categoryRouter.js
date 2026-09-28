import express from "express";
const router = express.Router();
import { create, deleteById, read, readById, status, update } from "../controllers/category.controller.js"
import upload from "../middleware/upload.js";
import { verifyToken, authorized } from "../middleware/auth.js";

router.post("/create", upload.single("image"), verifyToken, authorized("admin", "superAdmin"), create);
router.get("/", read);
router.get("/:id", readById);
router.patch("/status/:id", verifyToken, authorized("admin", "superAdmin"), status);
router.delete("/delete/:id", verifyToken, authorized("superAdmin"), deleteById);
router.put("/update/:id", verifyToken, authorized("admin", "superAdmin"), upload.single("image"), update);

export default router