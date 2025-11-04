"use client";

import Image from "next/image";

export default function ReviewFilter() {
  return (
    <div className="flex max-lg:flex-col w-[35%] h-[640px] max-lg:hidden">
      <div className="p-6 mb-20 bg-[url('/filterbg.svg')] bg-no-repeat bg-cover rounded-[8px]">
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

        <div className="flex justify-between items-center">
          <p className="text-[17px] font-semibold text-[#292929] tracking-tight">
            Rating
          </p>
          <Image
            className="w-[12px] rotate-180"
            src="/arrowdn.svg"
            alt="banner"
            width={20}
            height={20}
            priority
          />
        </div>

        <div className="mt-3 flex flex-col gap-3">
          {[5, 4, 3, 2, 1].map((num) => (
            <div key={num} className="flex items-center">
              <input type="checkbox" className="custom-checkbox" />
              <Image
                className="w-[12px] ml-2 mr-1"
                src="/star.svg"
                alt="star"
                width={20}
                height={20}
                priority
              />
              <p className="text-[#818B9C] font-semibold">{num}</p>
            </div>
          ))}
        </div>

        <Image
          className="w-full my-[16px]"
          src="/filterdivider.svg"
          alt="dottedline"
          width={30}
          height={20}
          priority
        />

        <div className="flex justify-between items-center">
          <p className="text-[17px] font-semibold text-[#292929] tracking-tight">
            Review Topics
          </p>
          <Image
            className="w-[12px] rotate-180"
            src="/arrowdn.svg"
            alt="banner"
            width={20}
            height={20}
            priority
          />
        </div>

        <div className="mt-3 flex flex-col gap-3">
          {[
            "Product Quality",
            "Seller Services",
            "Product Price",
            "Shipment",
            "Match with Description",
          ].map((topic) => (
            <div key={topic} className="flex items-center gap-2">
              <input type="checkbox" className="custom-checkbox" />
              <p className="text-[#818B9C] font-semibold">{topic}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
