"use client";

import Link from "next/link";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { toast } from 'sonner';
import { slugify, client } from "@/utils/helper";
import { useRouter } from "next/navigation";

const SignUp = () => {
    const router = useRouter()
    const submitHanlder = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }

        client.post(`user/register`, data).then(
            (response) => {
                if (response.data.success) {
                    toast.success(response.data.message)
                    router.push(`/verify-otp?email=${response.data.email}`)
                }
            }
        ).catch(
            (error) => {
                toast.error("Internal Server Error")
            }
        )

    }

    return (
        <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md">

                {/* Brand */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-[4px] text-[#2C2016]">
                        NESTRO
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Create your Nestro account
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white border border-[#E8E0D5] rounded-2xl p-7 shadow-sm">

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-[#2C2016]">
                            Create Account
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Sign up to start shopping with Nestro
                        </p>
                    </div>

                    <form onSubmit={submitHanlder} className="space-y-5">

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>

                            <div className="relative">
                                <User
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full h-12 pl-10 pr-4 rounded-lg border border-[#E8E0D5] outline-none text-sm focus:border-[#8B5E3C] focus:ring-1 focus:ring-[#8B5E3C]"
                                />
                            </div>
                        </div>

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
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>

                            <div className="relative">
                                <Lock
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Create a password"
                                    className="w-full h-12 pl-10 pr-4 rounded-lg border border-[#E8E0D5] outline-none text-sm focus:border-[#8B5E3C] focus:ring-1 focus:ring-[#8B5E3C]"
                                />
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>

                            <div className="relative">
                                <Lock
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    className="w-full h-12 pl-10 pr-4 rounded-lg border border-[#E8E0D5] outline-none text-sm focus:border-[#8B5E3C] focus:ring-1 focus:ring-[#8B5E3C]"
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full h-12 rounded-lg bg-[#2C2016] text-white font-medium flex items-center justify-center gap-2 hover:bg-[#3b2a1d] transition"
                        >
                            Create Account
                            <ArrowRight size={18} />
                        </button>

                    </form>

                    {/* Sign In */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Already have an account?{" "}
                        <Link
                            href="/signin"
                            className="font-medium text-[#8B5E3C] hover:underline"
                        >
                            Sign in
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default SignUp;