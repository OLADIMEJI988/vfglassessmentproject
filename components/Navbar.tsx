"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <div className="mx-12">
      <div className="w-full mt-[31px] flex justify-between">
        <Image
          className="w-[170px]"
          src="/logo.svg"
          alt="banner"
          width={30}
          height={20}
          priority
        />

        <div className="flex gap-8 items-center">
          <Image
            className="w-[20px] cursor-pointer"
            src="/searchicon.svg"
            alt="banner"
            width={30}
            height={20}
            priority
          />

          <div className="text-[14px] flex gap-1 cursor-pointer">
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

          <div className="text-[14px] flex gap-1 cursor-pointer">
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
            className="w-[20px] cursor-pointer"
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
        </div>
      </div>

      <Image
        className="w-full mt-[31px]"
        src="/dottedline.svg"
        alt="banner"
        width={30}
        height={20}
        priority
      />
    </div>
  );
}
