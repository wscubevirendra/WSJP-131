'use client'
import { useRouter, useSearchParams } from "next/navigation";

export default function SortBar() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const currentParams = searchParams.get("sort")


  function queryHandle(value) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);

    router.push(`/store?${params.toString()}`);
  }


  return (
    <div className="flex flex-col gap-3 rounded-xl border mb-4 border-[#E8E0D5] bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-shrink-0 items-center gap-2">
        <span className="hidden text-[11px] text-[#6B7280] sm:block">
          Sort:
        </span>

        <select
          onChange={(e) => queryHandle(e.target.value)}
          className="cursor-pointer rounded-md border border-[#E8E0D5] bg-white px-3 py-1.5 text-[12px] text-[#1E1E1E] outline-none transition-colors focus:border-[#C6A27E]"
          defaultValue="newest"
        >

          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
}