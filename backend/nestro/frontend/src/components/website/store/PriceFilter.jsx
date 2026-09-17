'use client'
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PriceFilter() {

  const [min_price, set_min_price] = useState(300);
  const [max_price, set_max_price] = useState(1000);
  const router = useRouter()
  const searchParams = useSearchParams();


  useEffect(() => {
    const minParam = searchParams.get("min_price");
    const maxParam = searchParams.get("max_price");

    set_min_price(minParam !== null ? Number(minParam) : 300);
    set_max_price(maxParam !== null ? Number(maxParam) : 1000);
  }, [searchParams]);

  function handleApplyPrice() {
    const params = new URLSearchParams(searchParams.toString());
    params.set("min_price", min_price);
    params.set("max_price", max_price);

    router.push(`/store?${params.toString()}`, { scroll: false });

  }

  function removePriceFilter() {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("min_price");
    params.delete("max_price");

    router.push(`/store?${params.toString()}`);

  }




  return (
    <section className="border-b border-stone-200 pb-7">
      <h3 className="mb-5 text-base font-semibold text-stone-900">
        Price Range
      </h3>

      <div className="flex items-center gap-3">
        <input
          type="number"
          min={300}
          placeholder="Min ₹"
          onChange={(e) => set_min_price(e.target.value)}
          className="h-11 w-full rounded-lg border border-stone-300 px-3 text-sm outline-none transition focus:border-amber-700"
        />

        <span className="text-stone-400">—</span>

        <input
          type="number"
          min={0}
          onChange={(e) => set_max_price(e.target.value)}

          placeholder="Max ₹"
          className="h-11 w-full rounded-lg border border-stone-300 px-3 text-sm outline-none transition focus:border-amber-700"
        />
      </div>

      {
        min_price > max_price &&
        <div>Invalid Value </div>
      }


      <button onClick={handleApplyPrice} disabled={min_price > max_price} className="mt-4 w-full rounded-lg bg-amber-700 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-800">
        Apply Price
      </button>

      <button onClick={removePriceFilter} className="mt-4 w-full rounded-lg border border-amber-700 py-2.5 text-sm font-semibold text-amber-700 transition hover:bg-amber-50">
        Clear Filters
      </button>
    </section>
  );
}

