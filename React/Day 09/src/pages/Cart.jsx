
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { store } from "../context/Context";





export default function CartPage() {
    const { cart ,increaseQty,decreaseQty,removeHandler} = useContext(store)


    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const shipping = 20;
    const total = subtotal + shipping;

    return (
        <section className="min-h-screen bg-[#111827] text-white py-12">
            <div className="max-w-7xl mx-auto px-5">

                <h1 className="text-4xl font-bold mb-10">
                    Shopping Cart
                </h1>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Cart Items */}

                    <div className="lg:col-span-2 space-y-6">

                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col sm:flex-row gap-5 bg-[#1F2937] rounded-xl p-5 border border-gray-700"
                            >
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-full sm:w-40 h-40 rounded-lg object-cover"
                                />

                                <div className="flex-1 flex flex-col justify-between">

                                    <div>
                                        <h2 className="text-xl font-semibold">
                                            {item.title}
                                        </h2>

                                      
                                        <p className="text-orange-400 text-2xl font-bold mt-3">
                                            ${item.price}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between mt-6">

                                        <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
                                            <button onClick={()=>decreaseQty(item.id)} className="p-3 hover:bg-gray-700">
                                                <FiMinus size={18} />
                                            </button>

                                            <span className="px-5">{item.qty}</span>

                                            <button onClick={()=>increaseQty(item.id)} className="p-3 hover:bg-gray-700">
                                                <FiPlus size={18} />
                                            </button>





                                        </div>

                                        <button onClick={()=>removeHandler(item.id)} className="text-red-500 hover:text-red-400">
                                            <FaTrash size={22} />
                                        </button>

                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Summary */}

                    <div className="bg-[#1F2937] rounded-xl p-6 border border-gray-700 h-fit sticky top-24">

                        <h2 className="text-2xl font-semibold mb-6">
                            Order Summary
                        </h2>

                        <div className="space-y-4">

                            <div className="flex justify-between text-gray-300">
                                <span>Subtotal</span>
                                <span>${subtotal}</span>
                            </div>

                            <div className="flex justify-between text-gray-300">
                                <span>Shipping</span>
                                <span>${shipping}</span>
                            </div>

                            <div className="border-t border-gray-700 pt-4 flex justify-between text-xl font-bold">
                                <span>Total</span>
                                <span className="text-orange-400">
                                    ${total}
                                </span>
                            </div>

                        </div>

                        <div className="mt-8">

                            <label className="text-sm text-gray-400 block mb-2">
                                Coupon Code
                            </label>

                            <div className="flex gap-2">

                                <input
                                    type="text"
                                    placeholder="Enter Coupon"
                                    className="flex-1 bg-[#111827] border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
                                />

                                <button className="bg-orange-500 hover:bg-orange-600 px-5 rounded-lg font-semibold">
                                    Apply
                                </button>

                            </div>

                        </div>

                        <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 py-4 rounded-lg font-semibold text-lg transition">
                            Proceed to Checkout
                        </button>

                        <button className="w-full mt-4 border border-gray-600 py-4 rounded-lg hover:bg-gray-800 transition">
                            Continue Shopping
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}