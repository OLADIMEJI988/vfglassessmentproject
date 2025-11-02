"use client";

import Image from "next/image";

export default function ReviewFilter() {
  return (
    <div className="flex w-[32%] h-[640px]">
      <div className="border mb-20 rounded-[8px] p-6">
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
          <div className="flex items-center">
            <input type="checkbox" className="custom-checkbox" />
            <Image
              className="w-[12px] ml-2 mr-1"
              src="/star.svg"
              alt="banner"
              width={20}
              height={20}
              priority
            />
            <p className="text-[#818B9C] font-semibold">5</p>
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="custom-checkbox" />
            <Image
              className="w-[12px] ml-2 mr-1"
              src="/star.svg"
              alt="banner"
              width={20}
              height={20}
              priority
            />
            <p className="text-[#818B9C] font-semibold">4</p>
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="custom-checkbox" />
            <Image
              className="w-[12px] ml-2 mr-1"
              src="/star.svg"
              alt="banner"
              width={20}
              height={20}
              priority
            />
            <p className="text-[#818B9C] font-semibold">3</p>
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="custom-checkbox" />
            <Image
              className="w-[12px] ml-2 mr-1"
              src="/star.svg"
              alt="banner"
              width={20}
              height={20}
              priority
            />
            <p className="text-[#818B9C] font-semibold">2</p>
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="custom-checkbox" />
            <Image
              className="w-[12px] ml-2 mr-1"
              src="/star.svg"
              alt="banner"
              width={20}
              height={20}
              priority
            />
            <p className="text-[#818B9C] font-semibold">1</p>
          </div>
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
          <div className="flex items-center gap-2">
            <input type="checkbox" className="custom-checkbox" />
            <p className="text-[#818B9C] font-semibold">Product Quality</p>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="custom-checkbox" />
            <p className="text-[#818B9C] font-semibold">Seller Services</p>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="custom-checkbox" />
            <p className="text-[#818B9C] font-semibold">Product Price</p>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="custom-checkbox" />
            <p className="text-[#818B9C] font-semibold">Shipment</p>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="custom-checkbox" />
            <p className="text-[#818B9C] font-semibold">Match with Description</p>
          </div>
        </div>

      </div>
    </div>
  );
}
