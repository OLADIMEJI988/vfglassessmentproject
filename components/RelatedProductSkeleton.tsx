"use client";

export default function RelatedProductSkeleton() {
  return (
    <div className="w-full max-lg:mb-7">
      <div className="w-full h-[220px] bg-[#F2F2F2] shimmer rounded-[8px]" />

      <div className="mt-4 space-y-3">
        <div className="w-3/4 h-4 shimmer rounded" />

        <div className="flex items-center gap-2">
          <div className="w-16 h-4 shimmer rounded" />
          <div className="w-[6px] h-[6px] bg-[#E0E0E0] rounded-full" />
          <div className="w-20 h-4 shimmer rounded" />
        </div>

        <div className="w-full h-3 shimmer rounded" />
        <div className="w-5/6 h-3 shimmer rounded" />

        <div className="flex items-center gap-2 mt-2">
          <div className="w-[20px] h-[20px] shimmer rounded-full" />
          <div className="w-8 h-3 shimmer rounded" />
          <div className="w-[6px] h-[6px] bg-[#E0E0E0] rounded-full" />
          <div className="w-12 h-3 shimmer rounded" />
        </div>
      </div>
    </div>
  );
}
