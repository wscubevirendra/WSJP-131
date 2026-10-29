"use client";

import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { client } from "@/utils/helper";

const SignIn = () => {
    const router = useRouter();

    const submitHanlder = async (e) => {
        e.preventDefault();

        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        };

        try {
            // 1. Login
            const response = await client.post("user/login", data);

            if (!response.data.success) {
                toast.error(response.data.message);
                return;
            }

            toast.success(response.data.message);

            // 2. Get cart from localStorage
            let localCart = [];

            try {
                const storedCart = localStorage.getItem("cart");

                if (storedCart) {
                    const parsedCart = JSON.parse(storedCart);

                    if (Array.isArray(parsedCart?.items)) {
                        localCart = parsedCart.items.map((item) => ({
                            productId: item.id,
                            qty: item.qty,
                        }));
                    }
                }
            } catch (error) {
                console.log("Invalid cart data:", error);
                localCart = [];
            }

            // 3. Sync cart with backend
            const cartResponse = await client.post("cart/sync", {
                items: JSON.stringify(localCart),
            });

            if (cartResponse.data.success) {
                const cartData = cartResponse.data.cart;

                let original = 0;
                let final = 0;

                const updateCart = cartData.items.map((item) => {
                    const {
                        _id,
                        salePrice,
                        originalPrice,
                        thumbnail,
                    } = item.productId;

                    original += Number(originalPrice) * Number(item.qty);
                    final += Number(salePrice) * Number(item.qty);

                    return {
                        id: _id,
                        salePrice,
                        originalPrice,
                        thumbnail,
                        qty: item.qty,
                    };
                });

                // 4. Update localStorage
                localStorage.setItem(
                    "cart",
                    JSON.stringify({
                        items: updateCart,
                        original_total: original,
                        final_total: final,
                    })
                );
            }

            // 5. Redirect
            router.push("/");
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Internal Server Error"
            );
        }
    };

    return (
        <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center px-4">
            <div className="w-full max-w-md">

                {/* Brand */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-[4px] text-[#2C2016]">
                        NESTRO
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Welcome back to Nestro
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white border border-[#E8E0D5] rounded-2xl p-7 shadow-sm">

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-[#2C2016]">
                            Sign In
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Enter your details to access your account
                        </p>
                    </div>

                    <form onSubmit={submitHanlder} className="space-y-5">

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>

                            <div className="relative">
                                <Mail
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    className="w-full h-12 pl-10 pr-4 rounded-lg border border-[#E8E0D5] outline-none text-sm focus:border-[#8B5E3C] focus:ring-1 focus:ring-[#8B5E3C]"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Password
                                </label>

                                <Link
                                    href="/forgot-password"
                                    className="text-xs text-[#8B5E3C] hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            <div className="relative">
                                <Lock
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    required
                                    className="w-full h-12 pl-10 pr-4 rounded-lg border border-[#E8E0D5] outline-none text-sm focus:border-[#8B5E3C] focus:ring-1 focus:ring-[#8B5E3C]"
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full h-12 rounded-lg bg-[#2C2016] text-white font-medium flex items-center justify-center gap-2 hover:bg-[#3b2a1d] transition"
                        >
                            Sign In
                            <ArrowRight size={18} />
                        </button>

                    </form>

                    {/* Signup */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don't have an account?{" "}
                        <Link
                            href="/signup"
                            className="font-medium text-[#8B5E3C] hover:underline"
                        >
                            Create account
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default SignIn;