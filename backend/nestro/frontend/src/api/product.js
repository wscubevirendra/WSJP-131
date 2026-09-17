import { client } from "@/utils/helper";

async function fetchProduct({ category, room_type, status, max_price, min_price, stock, sort }) {
    try {
        const searchParams = new URLSearchParams();
        if (category !== null) {
            searchParams.append("category", category)
        }
        if (room_type !== null) {
            searchParams.append("room_type", room_type)
        }
        if (status !== null) {
            searchParams.append("status", status)
        }
        if (stock !== null) {
            searchParams.append("stock", stock)
        }

        if (sort !== null) {
            searchParams.append("sort", sort)
        }

        if (min_price !== null && max_price !== null) {
            searchParams.append("min_price", min_price)
            searchParams.append("max_price", max_price)
        }
        const response = await client.get(`product?${searchParams.toString()}`);
        if (response.data.success) {
            return response.data
        }

    } catch (error) {
        return {
            message: "Internal Server Error",
            product: [],
            success: false
        }

    }
}

async function fetchProductById(id) {
    try {
        const response = await client.get(`product/${id}`);
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

export { fetchProduct, fetchProductById }