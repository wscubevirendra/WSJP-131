import Link from "next/link";
import { FaArrowLeft, FaUtensils } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#111827] flex items-center justify-center px-6">

      <div className="max-w-xl text-center">

        {/* Icon */}
        <div className="w-24 h-24 mx-auto rounded-full bg-orange-500/20 flex items-center justify-center">
          <FaUtensils className="text-5xl text-orange-500" />
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-extrabold text-orange-500 mt-8">
          404
        </h1>

        {/* Title */}
        <h2 className="text-4xl font-bold text-white mt-4">
          Recipe Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-4 leading-7">
          Sorry, the recipe you're looking for doesn't exist or may have been removed.
          Try exploring our latest delicious recipes instead.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            <FaArrowLeft />
            Back to Home
          </Link>

          <Link
            href="/recipes"
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Browse Recipes
          </Link>

        </div>

      </div>

    </section>
  );
}