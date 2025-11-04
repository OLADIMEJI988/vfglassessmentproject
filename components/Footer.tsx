"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="text-[#121212] bg-[#F2F2F2] px-[5%] max-lg:w-full">
      <div className="flex max-lg:flex-col justify-between py-[72px]">
        <div>
          <Image
            className="w-[170px]"
            src="/logo.svg"
            alt="dottedline"
            width={30}
            height={20}
            priority
          />
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Get latest offers to your inbox"
              className="mt-10 border-b bg-transparent pr-[85px] border-[#141414] placeholder:text-[#787A7C] py-[5px] w-full"
            />
            <button className="bg-[#141414] absolute right-[2px] top-1/2 rounded-[8px] py-2 px-4 ml-[32px]">
              <Image
                className="w-[20px]"
                src="/sendicon.svg"
                alt="arrowright"
                width={30}
                height={20}
                priority
              />
            </button>
          </div>

          <div className="flex mt-5 gap-4">
            <div className="bg-white p-2 rounded-full">
              <Image
                className="w-[18px]"
                src="/facebook.svg"
                alt="facebookicon"
                width={30}
                height={20}
                priority
              />
            </div>

            <div className="bg-white p-2 rounded-full">
              <Image
                className="w-[18px]"
                src="/instagram.svg"
                alt="instagramicon"
                width={30}
                height={20}
                priority
              />
            </div>

            <div className="bg-white p-2 rounded-full">
              <Image
                className="w-[18px]"
                src="/twitter.svg"
                alt="twittericon"
                width={30}
                height={20}
                priority
              />
            </div>

            <div className="bg-white p-2 rounded-full">
              <Image
                className="w-[18px]"
                src="/email.svg"
                alt="emailicon"
                width={30}
                height={20}
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex max-lg:flex-col max-lg:grid max-lg:grid-cols-2 max-lg:mt-[48px] gap-28 max-lg:gap-5">
          <div>
            <p className="font-semibold mb-4 max-lg:text-[18px]">Shop</p>
            <div className="flex flex-col gap-3">
              <p className="cursor-pointer">My account</p>
              <p className="cursor-pointer">Login</p>
              <p className="cursor-pointer">Wishlist</p>
              <p className="cursor-pointer">cart</p>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-4 max-lg:text-[18px]">Information</p>
            <div className="flex flex-col gap-3">
              <p className="cursor-pointer">Shipping Policy</p>
              <p className="cursor-pointer">Returns & Refunds</p>
              <p className="cursor-pointer">Cookies Policy</p>
              <p className="cursor-pointer">Frequently asked</p>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-4 max-lg:text-[18px] max-lg:mt-5">
              Company
            </p>
            <div className="flex flex-col gap-3">
              <p className="cursor-pointer">About us</p>
              <p className="cursor-pointer">Privacy Policy</p>
              <p className="cursor-pointer">Terms & Conditions</p>
              <p className="cursor-pointer">Contact Us</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-6">
        <Image
          className="w-full mb-[80px] max-lg:hidden"
          src="/dottedline.svg"
          alt="dottedline"
          width={30}
          height={20}
          priority
        />

        <Image
          className="w-full -mt-[45px] lg:hidden"
          src="/mobiledivider.svg"
          alt="dottedline"
          width={30}
          height={20}
          priority
        />

        <div className="flex justify-between mt-6 max-lg:mt-[25px] max-lg:w-full">
          <p className="text-[#3E3E59] text-[14px] max-lg:w-full">
            © John Lewis plc 2001 - 2024
          </p>
          <div className="flex gap-8 text-[14px] max-lg:mt-10 max-lg:-ml-24 text-[#121212] font-semibold">
            <div className="flex gap-1 items-center">
              <Image
                className="w-[18px] mr-1"
                src="/USAflag.svg"
                alt="flag"
                width={30}
                height={20}
                priority
              />
              <p>English</p>
              <Image
                className="w-[18px]"
                src="/arrowdown.svg"
                alt="arrowdown"
                width={30}
                height={20}
                priority
              />
            </div>

            <div className="flex gap-1 items-center">
              <p>USD</p>
              <Image
                className="w-[18px]"
                src="/arrowdown.svg"
                alt="arrowdown"
                width={30}
                height={20}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
