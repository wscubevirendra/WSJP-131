import { fetchCategory } from "@/api/category";
import FilterSection from "./FilterSection";
import PriceFilter from "./PriceFilter";
import StockFilter from "./StockFilter";
import { fetchRoom } from "@/api/room_type";

export default async function FilterSidebar() {
  const { category = [] } = await fetchCategory({status:true});
  const { room = [] } = await fetchRoom();
  return (
    <aside className="sticky top-20  w-3xs rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="mb-8 flex items-center justify-between border-b border-stone-200 pb-5">
        <div>
          <h2 className="text-xl font-bold text-stone-900">
            Filters
          </h2>

          <p className="mt-1 text-sm text-stone-500">
            Refine your search
          </p>
        </div>

        <button className="text-sm font-medium text-amber-700 hover:underline">
          Clear All
        </button>
      </div>

      <div className="space-y-8">
        <FilterSection
          title="Category"
          items={category}
          queryKey="category"
        />

        <FilterSection
          title="Room Type"
          items={room}
          queryKey="room_type"

        />

        <PriceFilter />

        <StockFilter />
      </div>
    </aside>
  );
}