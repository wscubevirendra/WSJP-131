'use client'

import { FaUtensils, FaShoppingCart } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        {
            path: "/",
            element: "Home"
        },
        {
            path: "/about",
            element: "About"
        },
        {
            path: "/menu",
            element: "Menu"
        },
        {
            path: "/gallery",
            element: "Gallery"
        },
        {
            path: "Contact",
            element: "Contact"
        }
    ]
    return (
        <header className="bg-[#111827] text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <FaUtensils className="text-2xl text-orange-500" />
                    <span className="text-2xl font-bold">
                        Food<span className="text-orange-500">Hub</span>
                    </span>
                </a>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {
                        navItems.map((item, index) => {
                            const active = pathname === item.path;
                            return (
                                <Link key={index} href={item.path} className={`hover:text-orange-500 px-4 rounded-sm py-2 duration-300 ${active ? 'bg-orange-500 text-white' : ''}`}>{item.element}</Link>
                            )
                        })
                    }

                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-5">

                    <button className="relative">
                        <FaShoppingCart className="text-xl hover:text-orange-500 duration-300" />

                        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-orange-500 text-xs flex items-center justify-center">
                            2
                        </span>
                    </button>

                    <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full font-medium duration-300 hidden md:block">
                        Book Table
                    </button>

                    <button className="text-3xl md:hidden">
                        <HiMenuAlt3 />
                    </button>

                </div>

            </div>
        </header>
    );
}