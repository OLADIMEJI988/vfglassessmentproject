"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="px-[5%] max-lg:px-[12px] max-lg:w-full">
      <div className="w-full mt-[31px] flex justify-between">
        <Image
          className="w-[170px] max-lg:w-[140px]"
          src="/logo.svg"
          alt="banner"
          width={30}
          height={20}
          priority
        />

        <div className="flex gap-8 max-lg:gap-5 items-center">
          <Image
            className="w-[20px] cursor-pointer"
            src="/searchicon.svg"
            alt="banner"
            width={30}
            height={20}
            priority
          />

          <div className="max-lg:hidden text-[14px] flex gap-1 cursor-pointer">
            <p>Categories</p>
            <Image
              className="w-[10px]"
              src="/arrowdn.svg"
              alt="banner"
              width={30}
              height={20}
              priority
            />
          </div>

          <div className="max-lg:hidden text-[14px] flex gap-1 cursor-pointer">
            <Image
              className="w-[20px]"
              src="/usericon.svg"
              alt="banner"
              width={30}
              height={20}
              priority
            />
            <p>Sign in</p>
          </div>

          <Image
            className="max-lg:hidden w-[20px] cursor-pointer"
            src="/heart.svg"
            alt="banner"
            width={30}
            height={20}
            priority
          />

          <div className="cursor-pointer relative">
            <Image
              className="w-[20px]"
              src="/carticon.svg"
              alt="cart icon"
              width={30}
              height={20}
              priority
            />
            <div className="absolute -top-[9px] -right-[7px] bg-[#141414] text-white text-[11px] w-[18px] h-[18px] flex items-center justify-center rounded-full">
              1
            </div>
          </div>

          <Image
            className="w-[20px] cursor-pointer lg:hidden"
            src="/hamburger.svg"
            alt="banner"
            width={30}
            height={20}
            priority
          />
        </div>
      </div>

      <Image
        className="w-full mt-[31px] max-lg:hidden"
        src="/dottedline.svg"
        alt="dottedline"
        width={30}
        height={20}
        priority
      />

      <Image
        className="w-full mt-[31px] lg:hidden"
        src="/mobiledivider.svg"
        alt="dottedline"
        width={30}
        height={20}
        priority
      />
    </div>
  );
}
