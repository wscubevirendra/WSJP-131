import CartModel from "../models/cart.model.js";
import { sendBadRequest, sendConflict, sendServerError, sendSuccess } from '../utils/response.js'



export const sync = async (req, res) => {
    try {
        const items = req.body.items;
        const userId = req.user._id;
        let userCart = items;
        const cart = await CartModel.findOne({ userId });


        //1.No Items and No Cart
        //2.No items but some  cart data find in database
        //3.Some items but no cart data in databse
        //4.some items and also  cart data find in database


        if (typeof (items) === "string") {
            userCart = JSON.parse(items);

        }


    } catch (error) {
        return sendServerError(res)
    }
};

