import Link from "next/link";
import CartBtn from "./CartBtn";

export default async function ProductCard({ product }) {

  return (
    <div className="group overflow-hidden rounded-2xl border border-[#E8E0D5] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F0EBE3]">
        <Link href={`/product/${product._id}`}>
          <img
            src={product.thumbnail}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        {
          product.newArrival &&
          <span className="absolute left-4 top-4 rounded-md bg-[#2C2016] px-3 py-1 text-[11px] tracking-wider text-[#D6BFA7]">
            NEW
          </span>
        }


        <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="bg-[#2C2016]/90 py-2.5 text-center text-[11px] uppercase tracking-[0.1em] text-[#D6BFA7]">
            View
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 py-4">
        <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#6B7280]">
          {product.categoryId.name}
        </p>

        <h3 className="line-clamp-1 text-[18px] font-medium text-[#1E1E1E]">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-[20px] font-semibold text-[#1E1E1E]">
              ₹{product.salePrice}
            </p>

            <p className="text-xs text-[#6B7280] line-through">
              ₹{product.originalPrice}
            </p>
          </div>

          <CartBtn product={product} />
        </div>
      </div>
    </div>
  );
}