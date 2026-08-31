"use client";

import { useEffect } from "react";
import { FiAlertTriangle, FiRefreshCw, FiHome } from "react-icons/fi";
import Link from "next/link";

export default function AdminError({ error, reset }) {
  useEffect(() => {
    console.error("Admin Panel Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600">
          <FiAlertTriangle size={40} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Something went wrong
        </h1>

        <p className="mt-3 text-gray-500">
          We couldn't load this admin page. Please try again or return to the
          dashboard.
        </p>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-5 rounded-lg bg-red-50 p-4 text-left text-sm text-red-700">
            <p className="font-semibold">Error:</p>
            <p className="mt-1 break-words">
              {error?.message || "Unknown error"}
            </p>
          </div>
        )}

        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            <FiRefreshCw size={17} />
            Try Again
          </button>

          <Link
            href="/admin"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <FiHome size={17} />
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}