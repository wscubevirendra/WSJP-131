import OrderModel from "../models/order.model.js";
import { sendBadRequest, sendConflict, sendServerError, sendSuccess } from '../utils/response.js'
import sendOtpMail from "../utils/sendOtpMail.js";
import CartModel from "../models/cart.model.js";
import Razorpay from "razorpay"
var instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET })
import crypto from "crypto"




export const orderPlace = async (req, res) => {
    try {
        const userId = req.user._id;
        const { shippingAddress, paymentMethod } = req.body
        const cart = await CartModel.findOne({ userId }).populate(
            "items.productId",
            "_id name slug originalPrice salePrice thumbnail"
        );;
        if (!cart) return sendNotFound(res, "No cart items");

        const items = cart?.items.map((item) => {
            const { productId, qty } = item;
            return {
                product_id: productId._id,
                qty,
                price: productId.salePrice,
                total: Number(productId.salePrice * qty)
            }
        })


        const totalAmount = items.reduce((total, item) => total + item.total, 0)
        const order = await OrderModel.create({
            user: userId,
            items,
            shippingAddress,
            paymentMethod,
            paymentStatus: "pending",
            orderStatus: "placed",
            totalAmount
        })

        if (paymentMethod === "cod") {

            // await CartModel.deleteOne({ userId })
            return res.status(201).json({
                message: "Order place successfully",
                success: true,
                order_id: order._id
            })
        } else {
            var options = {
                amount: totalAmount * 100,  // Amount is in currency subunits. 
                currency: "INR",
                receipt: order._id
            };
            instance.orders.create(options, async function (err, Razopyar_order) {
                if (err) {
                    return sendServerError(res, "Order not create");
                }
                order.razorpay_order_id = Razopyar_order.id
                await order.save()
                return res.status(200).json({
                    message: "Order place successfully",
                    success: true,
                    order_id: order._id,
                    razorpay_order_id: Razopyar_order.id,

                })
            });
        }





    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
};

export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    } = req.body;


    const order = await OrderModel.findOne({ razorpay_order_id: razorpay_order_id })

    // STEP 1: Create expected signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");
    

    // STEP 2: Compare signatures
    if (expectedSignature === razorpay_signature) {
      // Payment Verified
      order.razorpay_payment_id = razorpay_payment_id;
      order.paymentStatus = "paid";
      await order.save();

      return res.status(200).json({
        success: true,
        message: "Payment Verified Successfully"
      });


    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid Signature"
      });
    }

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


export const read = async (req, res) => {
    try {
      const order=await OrderModel.find();
        res.status(200).json({
            message: "users find",
            sucess: true,
            order
        })

    } catch (error) {
        return sendServerError(res)
    }

}

