"use client";

import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from 'sonner';
import { slugify, client } from "@/utils/helper";

const SignIn = () => {
    const router = useRouter();
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart && cart.items?.length !== 0) {
        cart = cart.items.map((data) => {
            return {
                id: data.id,
                qty: data.qty
            }
        })
    }

    const submitHanlder = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        client.post(`user/login`, data).then(
            (response) => {
                if (response.data.success) {
                    toast.success(response.data.message);
                    client.post("cart/sync", {
                        items: JSON.stringify(cart)
                    }).then((response) => {
                        console.log(response)
                    }).catch(() => {
                        toast.error(error.response?.data.message || "Internal Server Error")
                    })

                    // router.push('/')
                }
            }
        ).catch(
            (error) => {
                toast.error(error.response?.data.message || "Internal Server Error")
            }
        )

    }
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