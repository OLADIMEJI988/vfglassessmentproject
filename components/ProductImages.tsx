"use client";

import Image from "next/image";

export default function ProductImages() {
  return (
    <div className="flex gap-[35px] max-lg:gap-[12px] mr-[15px] max-lg:mr-0">
      <div className="flex flex-col max-lg:w-full">
        <div className="w-[429px] max-lg:w-full bg-[#EBEBEB] rounded-md">
          <Image
            className="w-full"
            src="/mainprodimg.svg"
            alt="banner"
            width={200}
            height={200}
            priority
          />
        </div>

        <div className="w-[70px] max-lg:w-[55px] h-[100px] mt-6">
          <div className="flex gap-5">
            <Image
              className="w-full bg-[#EBEBEB] rounded-md"
              src="/prodimg1.svg"
              alt="banner"
              width={200}
              height={200}
              priority
            />

            <Image
              className="w-full bg-[#EBEBEB] rounded-md"
              src="/prodimg2.svg"
              alt="banner"
              width={200}
              height={200}
              priority
            />

            <Image
              className="w-full bg-[#EBEBEB] rounded-md"
              src="/prodimg3.svg"
              alt="banner"
              width={200}
              height={200}
              priority
            />

            <Image
              className="w-full bg-[#EBEBEB] rounded-md"
              src="/prodimg4.svg"
              alt="banner"
              width={200}
              height={200}
              priority
            />

            <Image
              className="w-full bg-[#EBEBEB] rounded-md"
              src="/prodimg5.svg"
              alt="banner"
              width={200}
              height={200}
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-5">
          <div className="bg-[#F2F2F2] p-3 rounded-md cursor-pointer">
            <Image
              className="w-[20px]"
              src="/exporticon.svg"
              alt="banner"
              width={20}
              height={20}
              priority
            />
          </div>

          <div className="bg-[#F2F2F2] p-3 rounded-md cursor-pointer">
            <Image
              className="w-[20px]"
              src="/heart.svg"
              alt="banner"
              width={20}
              height={20}
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 -translate-y-[125px]">
          <div className="bg-[#F2F2F2] p-3 rounded-md cursor-pointer">
            <Image
              className="w-[20px]"
              src="/previousbtn.svg"
              alt="banner"
              width={20}
              height={20}
              priority
            />
          </div>

          <div className="bg-[#F2F2F2] p-3 rounded-md cursor-pointer">
            <Image
              className="w-[20px]"
              src="/nextbtn.svg"
              alt="banner"
              width={20}
              height={20}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
