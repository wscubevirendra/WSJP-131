import { client } from "@/utils/helper";

async function fetchCategory({ status = null, limit = null } = {}) {
    try {
        const searchParams = new URLSearchParams();
        if (status !== null) {
            searchParams.append("status", status)
        }

        if (limit !== null) {
            searchParams.append("limit", limit)
        }
        console.log(searchParams, "category API")

        const response = await client.get(`category?${searchParams.toString()}`);
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

export { fetchCategory, fetchCategoryById }