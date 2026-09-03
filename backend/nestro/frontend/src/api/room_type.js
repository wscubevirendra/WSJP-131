import { client } from "@/utils/helper";

async function fetchCategory() {
    try {
        const response = await client.get("category");
        if (response.data.success) {
            return response.data
        }

    } catch (error) {
        return {
            message: "Internal Server Error",
            category: [],
            success: false
        }

    }
}

async function fetchRoom() {
    try {
        const response = await client.get("room-type");
        if (response.data.success) {
            return response.data
        }

    } catch (error) {
        return {
            message: "Internal Server Error",
            category: [],
            success: false
        }

    }
}

async function fetchCategoryById(id) {
    try {
        const response = await client.get(`category/${id}`);
        if (response.data.success) {
            return response.data
        }

    } catch (error) {
        return {
            message: "Internal Server Error",
            category: {},
            success: false
        }

    }
}

export {fetchCategory,fetchCategoryById,fetchRoom}