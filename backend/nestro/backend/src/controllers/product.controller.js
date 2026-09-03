import mongoose from "mongoose";
import {
    sendBadRequest,
    sendConflict,
    sendCreated,
    sendNotFound,
    sendServerError,
    sendSuccess
} from "../utils/response.js";
import ProductModel from "../models/product.model.js";



// CREATE CATEGORY
// GET ALL CATEGORIES
export const read = async (req, res) => {
    try {
        const product = await ProductModel.find();

        return res.status(200).json({
            message: "Product data found",
            success: true,
            product
        });

    } catch (error) {
        return sendServerError(res);
    }
};


// GET CATEGORY BY ID
export const readById = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return sendBadRequest(res, "Invalid product ID");
        }

        const product = await ProductModel.findById(id);

        if (!product) {
            return sendNotFound(res, "Category not found");
        }

        return res.status(200).json({
            message: "Product data found",
            success: true,
            product
        });

    } catch (error) {

        return sendServerError(res);
    }
};


// DELETE CATEGORY
export const deleteById = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return sendBadRequest(res, "Invalid Product ID");
        }

        const product = await ProductModel.findById(id);

        if (!product) {
            return sendNotFound(res, "Product not found");
        }

        await ProductModel.findByIdAndDelete(id);

        return sendSuccess(res, "Product deleted successfully");

    } catch (error) {
        return sendServerError(res);
    }
};


// UPDATE CATEGORY STATUS
export const status = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return sendBadRequest(res, "Invalid product ID");
        }

        const product = await ProductModel.findById(id);

        if (!product) {
            return sendNotFound(res, "Proudtc not found");
        }

        await ProductModel.findByIdAndUpdate(
            id,
            {
                $set: {
                    status: !product.status
                }
            },
            {
                new: true
            }
        );

        return sendSuccess(res, "Product status updated successfully");

    } catch (error) {
        return sendServerError(res);
    }
};


export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name = "", slug = "" } = req.body;
        const imageUrl = req.file.path ?? null

        // Validate ID
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return sendBadRequest(res);
        }

        // Validate fields
        if (!name || !slug) {
            return sendBadRequest(res);
        }

        // Check category exists
        const product = await ProductModel.findById(id);

        if (!product) {
            return sendNotFound(res, "Product not found");
        }

        // Check duplicate name or slug
        const duplicateProduct = await ProductModel.findOne({
            $or: [
                { name },
                { slug }
            ],
            _id: { $ne: id }
        });

        if (duplicateProduct) {
            return sendConflict(res);
        }
        if (name) product.name = name;
        if (slug) product.slug = slug;
        if (imageUrl) product.image = imageUrl;
        await product.save();

        return sendSuccess(res, "product updated successfully");

    } catch (error) {
        return sendServerError(res);
    }
};



export const create = async (req, res) => {
    try {
        console.log(req.body)
       
        const imageUrl = req.file?.path || "";

        const {
            name,
            slug,
            shortDescription,
            description,
            categoryId,
            roomId,
            price,
            salePrice,
            discount,
            stock,
            material,
            color
        } = req.body;

        if (
            !name ||
            !slug ||
            !description ||
            !categoryId ||
            !roomId ||
            !price
        ) {
            return sendBadRequest(res);
        }
        console.log(req.body)

        const product = await ProductModel.findOne({ slug });

        if (product) return sendConflict(res);

        await ProductModel.create({
            name,
            slug,
            shortDescription,
            description,
            categoryId,
            roomId,
            price,
            salePrice,
            discount,
            stock,
            material,
            color,
            thumbnail: imageUrl
        });

        sendCreated(res);

    } catch (error) {
        console.log(error)
        sendServerError(res);
    }
};



export const updateFlag = async (req, res) => {
    try {

        const { id } = req.params;
        const { field } = req.body;
        console.log(id, field)
        const allowedFields = [
            "stock",
            "featured",
            "bestSeller",
            "newArrival"
        ];

        if (!allowedFields.includes(field)) {
            return sendBadRequest(res, "Invalid field");
        }

        const product = await ProductModel.findById(id);

        if (!product) {
            return sendNotFound(res);
        }

        product[field] = !product[field];

        await product.save();

        return sendSuccess(res, `${field} updated successfully`);

    } catch (error) {
        sendServerError(res);
    }
};