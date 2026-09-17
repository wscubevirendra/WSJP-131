import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination() {
  return (
    <div className="mt-8 flex justify-center">
      <div className="flex items-center gap-2">

        {/* Previous */}
        <button
          className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E8E0D5] text-[#6B7280] hover:border-[#C6A27E]"
        >
          <FaChevronLeft size={12} />
        </button>

        {/* Page Numbers */}
        <button className="h-8 w-8 rounded-md border border-[#8B5E3C] bg-[#8B5E3C] text-sm font-medium text-white">
          1
        </button>

        <button className="h-8 w-8 rounded-md border border-[#E8E0D5] text-sm font-medium text-[#6B7280] hover:border-[#C6A27E]">
          2
        </button>

        <button className="h-8 w-8 rounded-md border border-[#E8E0D5] text-sm font-medium text-[#6B7280] hover:border-[#C6A27E]">
          3
        </button>

        {/* Next */}
        <button
          className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E8E0D5] text-[#6B7280] hover:border-[#C6A27E]"
        >
          <FaChevronRight size={12} />
        </button>

      </div>
    </div>
  );
}