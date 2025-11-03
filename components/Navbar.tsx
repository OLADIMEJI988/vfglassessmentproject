"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="max-lg:mb-6">
        <div className="flex items-center gap-2 text-[15px] max-lg:text-[13px] text-[#8F8F8F] px-[5%] max-lg:px-[12px]">
          <div className="flex items-center gap-2">
            <p>Homepage</p>
            <Image
              className="w-[12px] my-[31px]"
              src="/arrowright.svg"
              alt="banner"
              width={15}
              height={15}
              priority
            />
          </div>

          <div className="flex items-center gap-2">
            <p>Women</p>
            <Image
              className="w-[12px] my-[31px]"
              src="/arrowright.svg"
              alt="banner"
              width={15}
              height={15}
              priority
            />
          </div>

          <div className="flex items-center gap-2">
            <p>Women's Shirts & Tops</p>
            <Image
              className="w-[12px] my-[31px]"
              src="/arrowright.svg"
              alt="banner"
              width={15}
              height={15}
              priority
            />
          </div>

          <p className="text-[#292929] max-lg:hidden">
            Long Sleeve Overshirt, Khaki, 6
          </p>
        </div>
        <p className="text-[#292929] text-[13px] pl-[12px] -mt-[17px] lg:hidden">
          Long Sleeve Overshirt, Khaki, 6
        </p>
      </div>
    </>
  );
}
