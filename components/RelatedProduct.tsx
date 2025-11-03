"use client";

import Image from "next/image";


interface RelatedProductProps {
  img: string;
  productname: string;
  productprice: string;
  productdetail: string;
  numsold: string;
}

export default function RelatedProduct({ img, productname, productprice, productdetail, numsold }: RelatedProductProps) {
  return (
    <div className="w-full max-lg:mb-8">
      <Image
        className="w-full bg-[#F2F2F2] rounded-[8px]"
        src={img}
        alt="banner"
        width={20}
        height={20}
        priority
      />

      <div className="mt-4">
        <p className="text-[17px] max-lg:text-[15px] font-semibold text-[#292929] tracking-tight">
          {productname}
        </p>
        <p className="text-[17px] max-lg:text-[15px] font-semibold text-[#292929] mt-1">{productprice}</p>
        <p className="text-[15px] max-lg:text-[14px] font-light my-2 text-[#7A7A7A]">
          {productdetail}
        </p>
        <div className="flex gap-[8px] max-lg:gap-1 items-center">
          <Image
            className="w-[20px] max-lg:w-[18px] max-lg:-mt-[3px] mr-1"
            src="/star.svg"
            alt="banner"
            width={20}
            height={20}
            priority
          />

          <p className="max-lg:text-[14px]">4.8</p>
          <div className="bg-[#E0E0E0] w-[6px] h-[6px] rounded-full mx-2"></div>
          <p className="text-[#666666] max-lg:text-[12px]">{numsold} <span>Sold</span></p>
        </div>
      </div>
    </div>
  );
}
