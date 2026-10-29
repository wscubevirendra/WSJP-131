import CartModel from "../models/cart.model.js";

import {
    sendServerError
} from "../utils/response.js";

export const sync = async (req, res) => {
    try {
        const userId = req.user._id;

        let items = req.body.items;

        console.log(items, "items from client");

        // --------------------------------
        // 1. Convert JSON string to array
        // --------------------------------

        if (typeof items === "string") {
            items = JSON.parse(items);
        }

        // --------------------------------
        // 2. Make sure items is an array
        // --------------------------------

        if (!Array.isArray(items)) {
            items = [];
        }

        // --------------------------------
        // 3. Find existing user cart
        // --------------------------------

        let cart = await CartModel.findOne({
            userId
        });

        // --------------------------------
        // 4. No local items + No DB cart
        // --------------------------------

        if (items.length === 0 && !cart) {
            return res.status(200).json({
                success: true,
                cart: {
                    items: []
                },
                message: "Cart is empty"
            });
        }

        // --------------------------------
        // 5. No local items + DB cart exists
        // --------------------------------

        if (items.length === 0 && cart) {

            cart = await cart.populate(
                "items.productId",
                "_id name originalPrice salePrice thumbnail"
            );

            return res.status(200).json({
                success: true,
                cart,
                message: "Cart data fetched successfully"
            });
        }

        // --------------------------------
        // 6. Local items + No DB cart
        // --------------------------------

        if (items.length > 0 && !cart) {

            const newCart = await CartModel.create({
                userId,
                items
            });

            const populatedCart = await newCart.populate(
                "items.productId",
                "_id name originalPrice salePrice thumbnail"
            );

            return res.status(200).json({
                success: true,
                cart: populatedCart,
                message: "Cart created successfully"
            });
        }

        // --------------------------------
        // 7. Local items + DB cart exists
        // --------------------------------

        items.forEach((newItem) => {

            const existingItem = cart.items.find(
                (oldItem) =>
                    oldItem.productId.toString() ===
                    newItem.productId.toString()
            );

            // --------------------------------
            // Product already exists
            // Increase quantity
            // --------------------------------

            if (existingItem) {

                existingItem.qty =
                    existingItem.qty + Number(newItem.qty);

            }

            // --------------------------------
            // Product does not exist
            // Add new product
            // --------------------------------

            else {

                cart.items.push({
                    productId: newItem.productId,
                    qty: Number(newItem.qty)
                });

            }
        });

        // --------------------------------
        // 8. Save updated cart
        // --------------------------------

        await cart.save();

        // --------------------------------
        // 9. Populate product information
        // --------------------------------

        cart = await cart.populate(
            "items.productId",
            "_id name originalPrice salePrice thumbnail"
        );

        // --------------------------------
        // 10. Send response
        // --------------------------------

        return res.status(200).json({
            success: true,
            cart,
            message: "Cart synchronized successfully"
        });

    } catch (error) {

        console.error("Cart Sync Error:", error);

        return sendServerError(res);
    }
};