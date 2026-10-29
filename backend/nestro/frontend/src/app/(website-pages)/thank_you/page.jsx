"use client";

import { useSearchParams } from "next/navigation";

export default function ThankYouPage() {
    const searchParams = useSearchParams();

    const orderId = searchParams.get("orderId");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 text-center">
                
                <h1 className="text-3xl font-bold text-gray-800">
                    Thank You!
                </h1>

                <p className="mt-3 text-gray-600">
                    Your order has been placed successfully.
                </p>

                {orderId && (
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                        <p className="text-sm text-gray-500">
                            Order ID
                        </p>

                        <p className="mt-1 font-semibold text-gray-800 break-all">
                            {orderId}
                        </p>
                    </div>
                )}

                <button
                    onClick={() => window.location.href = "/store"}
                    className="mt-6 px-6 py-3 bg-[#8B5E3C] text-white rounded-lg hover:bg-[#70482F]"
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
}