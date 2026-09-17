import mongoose from "mongoose";
import RoomModel from "../models/room.model.js";
import {
    sendBadRequest,
    sendConflict,
    sendCreated,
    sendNotFound,
    sendServerError,
    sendSuccess
} from "../utils/response.js";


// CREATE CATEGORY
export const create = async (req, res) => {
    try {
        const { name, slug } = req.body;
        // Validate required fields
        if (!name || !slug) {
            return sendBadRequest(res, "Name and slug are required");
        }

        // Check duplicate category
        const room = await RoomModel.findOne({
            $or: [{ name }, { slug }]
        });

        if (room) {
            return sendConflict(res, "Room already exists");
        }
        const imageUrl = req.file ? req.file.path : '';
        await RoomModel.create({
            name,
            slug,
            image: imageUrl
        });

        return sendCreated(res, "Room created successfully");

    } catch (error) {
        console.error("Create Category Error:", error);
        return sendServerError(res);
    }
};


// GET ALL CATEGORIES
export const read = async (req, res) => {
    try {
        const query = req.query;
        const queryFilter = {};
        const limit = query.limit ? Number(query.limit) : 0

        if (query.status) {
            queryFilter.status = query.status == "true"
        }
        const room = await RoomModel.find(queryFilter).limit(limit);

        return res.status(200).json({
            message: "Room data found",
            success: true,
            room
        });

    } catch (error) {
        console.error("Read Category Error:", error);
        return sendServerError(res);
    }
};


// GET CATEGORY BY ID
export const readById = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return sendBadRequest(res, "Invalid category ID");
        }

        const room = await RoomModel.findById(id);

        if (!room) {
            return sendNotFound(res, "Category not found");
        }

        return res.status(200).json({
            message: "Room data found",
            success: true,
            room
        });

    } catch (error) {
        console.error("Read Category By ID Error:", error);
        return sendServerError(res);
    }
};


// DELETE CATEGORY
export const deleteById = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return sendBadRequest(res, "Invalid category ID");
        }

        const room = await RoomModel.findById(id);

        if (!category) {
            return sendNotFound(res, "Room not found");
        }

        await RoomModel.findByIdAndDelete(id);

        return sendSuccess(res, "Category deleted successfully");

    } catch (error) {
        console.error("Delete Category Error:", error);
        return sendServerError(res);
    }
};


// UPDATE CATEGORY STATUS
export const status = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return sendBadRequest(res, "Invalid category ID");
        }

        const category = await CategoryModel.findById(id);

        if (!category) {
            return sendNotFound(res, "Category not found");
        }

        await CategoryModel.findByIdAndUpdate(
            id,
            {
                $set: {
                    status: !category.status
                }
            },
            {
                new: true
            }
        );

        return sendSuccess(res, "Category status updated successfully");

    } catch (error) {
        console.error("Update Category Status Error:", error);
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
            return sendBadRequest(res, "Invalid category ID");
        }

        // Validate fields
        if (!name || !slug) {
            return sendBadRequest(res, "Name and slug are required");
        }

        // Check category exists
        const category = await CategoryModel.findById(id);

        if (!category) {
            return sendNotFound(res, "Category not found");
        }

        // Check duplicate name or slug
        const duplicateCategory = await CategoryModel.findOne({
            $or: [
                { name },
                { slug }
            ],
            _id: { $ne: id }
        });

        if (duplicateCategory) {
            return sendConflict(res, "Category name or slug already exists");
        }
        if (name) category.name = name;
        if (slug) category.slug = slug;
        if (imageUrl) category.image = imageUrl;
        await category.save();

        return sendSuccess(res, "Category updated successfully");

    } catch (error) {
        console.error("Update Category Error:", error);
        return sendServerError(res);
    }
};