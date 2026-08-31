import { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../context/Context";


export default function ProductCard({ product }) {
  const { addtoCart } = useContext(store)
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-lg">
      {/* Thumbnail */}
      <Link to={`/shop/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.thumbnail}
            alt="Product"
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />

          <span className="absolute left-3 top-3 rounded-md bg-red-500 px-2 py-1 text-xs font-semibold text-white">
            -{product.discountPercentage}%
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="space-y-4 p-4">
        <Link href="/product/modern-chair">
          <h3 className="line-clamp-2 text-lg font-semibold text-gray-900 transition group-hover:text-emerald-600">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400 line-through">
            {product.price}
          </span>
        </div>

        <button onClick={() => addtoCart({
          id:product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          qty: 1
        })} className="w-full rounded-lg bg-[#111827] py-3 font-medium text-white transition hover:bg-emerald-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}