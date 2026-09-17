'use client'
import { useSearchParams, useRouter } from "next/navigation";


export default function FilterSection({ title, items = [], queryKey }) {
  const router = useRouter()
  const searchParams = useSearchParams();
  const currentParams = searchParams?.get(queryKey)?.split(",") || [];


  function queryHandle(slug) {
    // Example: slug = "sofa"

    const params = new URLSearchParams(searchParams.toString());
    let update_category_slug = params.get(queryKey)?.split(",") || [];

    // If already selected, remove it
    if (update_category_slug.includes(slug)) {
      update_category_slug = update_category_slug.filter(
        (s) => s !== slug
      );
    }
    // If not selected, add it
    else {
      update_category_slug = [...update_category_slug, slug];
    }

    if (update_category_slug.length !== 0) {
      params.set(queryKey, update_category_slug.join(","));
    } else {
      params.delete(queryKey);
    }

    router.push(`/store?${params.toString()}`);
  }



  return (
    <section className="border-b border-stone-200 pb-7 last:border-none last:pb-0">
      <h3 className="mb-5 text-base font-semibold tracking-wide text-stone-900">
        {title}
      </h3>

      <div className="space-y-3">
        {
          items.map((item, index) => {
            const active = currentParams.includes(item.slug)
            return (
              <label
                key={index}
                className="group flex cursor-pointer items-center justify-between rounded-lg p-2 transition hover:bg-stone-50"
              >
                <div className="flex items-center gap-3">
                  <input
                    onChange={() => queryHandle(item.slug)}
                    type="checkbox"
                    checked={active}
                    className="h-4 w-4 rounded border-stone-300 accent-amber-700"
                  />

                  <span className="text-sm font-medium text-stone-700 group-hover:text-stone-900">
                    {item.name}
                  </span>
                </div>

                <span className="text-xs text-stone-400">
                  {item.count}
                </span>
              </label>
            )
          })
        }
      </div>
    </section>
  );
}