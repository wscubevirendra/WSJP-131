export default function Loading() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="animate-pulse">
    
        {/* Recipe Cards */}
        <div className="grid gap-8 sm:grid-cols-2 w-full lg:grid-cols-4">

          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >

              {/* Image */}
              <div className="h-56 bg-gray-200"></div>

              <div className="p-5">

                {/* Category */}
                <div className="h-6 w-20 rounded-full bg-gray-200 mb-4"></div>

                {/* Title */}
                <div className="h-7 w-3/4 bg-gray-200 rounded mb-3"></div>

                {/* Description */}
                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                </div>

                {/* Recipe Info */}
                <div className="flex justify-between mb-6">

                  <div className="h-5 w-16 bg-gray-200 rounded"></div>

                  <div className="h-5 w-20 bg-gray-200 rounded"></div>

                  <div className="h-5 w-12 bg-gray-200 rounded"></div>

                </div>

                {/* Button */}
                <div className="h-11 rounded-xl bg-gray-200"></div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}