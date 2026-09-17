"use client";

import { decreaseQty, increateQty, removeItem } from "@/redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export default function CartPage() {
    const dispatcher = useDispatch()
    const cart = useSelector((store) => store.cart);

    return (
        <div className="min-h-screen bg-[#FAFAF9] px-4 py-10 text-gray-900 sm:px-8 lg:px-16">
            <div className="mx-auto max-w-7xl">
                {/* Page Header */}
                <div className="mb-10">
                    <p className="mb-2 text-sm text-[#8B5E3C]">
                        Home / Cart
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Shopping Cart
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Review your items before placing your order.
                    </p>
                </div>

                {/* Main Cart Layout */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Cart Items */}
                    <div className="space-y-5 lg:col-span-2">
                        {
                            cart?.items.length == 0 ?
                                <div className="w-full shadow m-10 py-20 text-center ">No Cart Items</div>
                                :
                                cart?.items.map((item) => (
                                    <div
                                        key={item._id}
                                        className="flex flex-col gap-5 rounded-2xl border border-[#E8E0D5] bg-white p-4 sm:flex-row sm:items-center"
                                    >
                                        {/* Product Image */}
                                        <div className="h-48 w-full shrink-0 overflow-hidden rounded-xl bg-[#F5F1EB] sm:h-32 sm:w-32">
                                            <img
                                                src={item.thumbnail}
                                                alt={item.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex flex-1 flex-col justify-between gap-4">
                                            <div>
                                                <h2 className="text-lg font-medium">
                                                    {item.name}
                                                </h2>



                                                <p className="mt-2 font-semibold text-[#8B5E3C]">
                                                    ₹{item.salePrice.toLocaleString("en-IN")}
                                                </p>
                                            </div>

                                            {/* Quantity and Remove */}
                                            <div className="flex flex-wrap items-center justify-between gap-3">
                                                <div className="flex items-center rounded-lg border border-gray-200">
                                                    <button
                                                        onClick={() => {
                                                            dispatcher(decreaseQty({ id: item.id }))
                                                        }}
                                                        type="button"
                                                        className="px-3 py-2 text-gray-600"
                                                    >
                                                        −
                                                    </button>

                                                    <span className="px-3 text-sm">
                                                        {item.qty}
                                                    </span>

                                                    <button
                                                        onClick={() => {
                                                            dispatcher(increateQty({ id: item.id }))
                                                        }}
                                                        type="button"
                                                        className="px-3 py-2 text-gray-600"
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={() => {
                                                        dispatcher(removeItem({ id: item.id }))
                                                    }}
                                                    type="button"
                                                    className="text-sm text-red-500 hover:text-red-700"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                    </div>

                    {/* Order Summary */}
                    <div className="h-fit rounded-2xl border border-[#E8E0D5] bg-white p-6">
                        <h2 className="text-xl font-semibold">
                            Order Summary
                        </h2>

                        <div className="mt-6 space-y-4 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">
                                    Subtotal
                                </span>
                                <span className="font-medium">
                                    ₹{cart?.original_total}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">
                                    Shipping
                                </span>
                                <span className="font-medium text-green-600">
                                    Free
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">
                                    Discount
                                </span>
                                <span className="font-medium">
                                    − ₹ {cart?.original_total - cart?.final_total}
                                </span>
                            </div>
                        </div>

                        <div className="my-6 border-t border-gray-200" />

                        <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold">
                                Total
                            </span>

                            <span className="text-2xl font-bold text-[#8B5E3C]">
                                ₹{cart.final_total}
                            </span>
                        </div>
                        <Link href="/checkout">
                        
                        <button
                            type="button"
                            className="mt-6 w-full rounded-xl bg-[#8B5E3C] px-5 py-3 font-medium text-white transition hover:bg-[#70482E]"
                        >
                            Proceed to Checkout
                        </button></Link>


                        <button
                            type="button"
                            className="mt-3 w-full rounded-xl border border-[#8B5E3C] px-5 py-3 font-medium text-[#8B5E3C] transition hover:bg-[#F5F1EB]"
                        >
                            Continue Shopping
                        </button>

                        <p className="mt-5 text-center text-xs text-gray-400">
                            Secure checkout · Easy returns
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}