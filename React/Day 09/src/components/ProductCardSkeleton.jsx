export default function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white animate-pulse">

      {/* Thumbnail */}
      <div className="aspect-square bg-gray-200"></div>

      {/* Content */}
      <div className="space-y-4 p-4">

        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 w-full rounded bg-gray-200"></div>
          <div className="h-5 w-3/4 rounded bg-gray-200"></div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-20 rounded bg-gray-200"></div>
          <div className="h-4 w-14 rounded bg-gray-200"></div>
        </div>

        {/* Button */}
        <div className="h-12 w-full rounded-lg bg-gray-200"></div>

      </div>

    </div>
  );
}