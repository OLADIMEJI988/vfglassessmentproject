"use client";

import Image from "next/image";

export default function ReviewFilter() {
  return (
    <div className="flex w-full">
      <div className="border w-[25%] mb-20 rounded-[8px] p-6">
        {/* <svg width="290" height="100" className="mb-20">
          <rect
            x="5"
            y="5"
            width="280px"
            height="90"
            fill="none"
            stroke="#B8B8B8"
            strokeWidth="0.3"
            strokeDasharray="6,5"
          />
        </svg> */}
        <p className="text-[#292929] text-[20px] font-semibold">
          Reviews Filter
        </p>

        <Image
          className="w-full my-[16px]"
          src="/filterdivider.svg"
          alt="dottedline"
          width={30}
          height={20}
          priority
        />

        <div className="flex justify-between">
            <p className="text-[17px] font-semibold text-[#292929] tracking-tight">Rating</p>
        </div>

        <div className="mt-3">
            
        </div>
      </div>
    </div>
  );
}
