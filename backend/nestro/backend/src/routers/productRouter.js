import express from "express";
const router = express.Router();
import { addImages, create, deleteById, read, readById, status, update,updateFlag } from "../controllers/product.controller.js"
import upload from "../middleware/upload.js";

router.post("/create", upload.single("thumbnail"), create);
router.get("/", read);
router.get("/:id", readById);
router.patch("/status/:id", status);
router.patch("/update/flag/:id", updateFlag);
router.delete("/delete/:id", deleteById);
router.put("/update/:id", upload.single("image"), update);
router.post("/add-images/:id", upload.array("image"), addImages);

export default router;