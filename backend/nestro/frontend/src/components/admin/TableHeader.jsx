import React from 'react'
import Link from 'next/link'
import {
  FiPlus,
} from "react-icons/fi";

export default function TableHeader({module="Category",add_page}) {
    return (
        <div className="mb-6 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                    {module}
                </h1>

            </div>

            <Link
                href={add_page}
                className="flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
            >
                <FiPlus size={18} />
                Add {module}
            </Link>
        </div>
    )
}
