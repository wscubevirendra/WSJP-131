import { FaClock, FaStar } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import Link from "next/link";

export default function RecipeCard({recipe}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl duration-300 group">

      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={recipe.image}
          alt="Pizza"
          className="w-full h-60 object-cover group-hover:scale-110 duration-500"
        />

        <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {recipe.cuisine}
        </span>

      </div>

      {/* Content */}
      <div className="p-6">

        {/* Rating */}
        <div className="flex items-center justify-between mb-3">

          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="text-gray-700 font-medium">
              4.8
            </span>
          </div>

          <span className="text-2xl font-bold text-orange-500">
            ₹349
          </span>

        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {recipe.name}
        </h2>


        {/* Info */}
        <div className="flex items-center justify-between text-gray-500 text-sm mb-6">

          <div className="flex items-center gap-2">
            <FaClock />
            <span>{recipe.cookTimeMinutes} mins</span>
          </div>

          <div className="flex items-center gap-2">
            <IoPeople />
            <span>2 Servings</span>
          </div>

        </div>

        {/* Button */}
        <Link href={`/menu/${recipe.id}`}>
           <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold duration-300">
          View Recipe
        </button>
        </Link>
     

      </div>

    </div>
  );
}