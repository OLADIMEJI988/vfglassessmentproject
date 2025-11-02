"use client";

import PopularProductSection from "@/components/PopularProductSection";
import ProductImages from "@/components/ProductImages";
import ProductReviewAnalyticSection from "@/components/ProductReviewAnalyticSection";
import RelatedProductSection from "@/components/RelatedProductSection";
import ReviewFilter from "@/components/ReviewFilter";
import ReviewListSection from "@/components/ReviewListSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mx-12 pb-[80px]">
        <div className="flex items-center gap-2 text-[15px] text-[#8F8F8F]">
          <p>Homepage</p>
          <Image
            className="w-[12px] my-[31px]"
            src="/arrowright.svg"
            alt="banner"
            width={15}
            height={15}
            priority
          />
          <p>Women</p>
          <Image
            className="w-[12px] my-[31px]"
            src="/arrowright.svg"
            alt="banner"
            width={15}
            height={15}
            priority
          />
          <p>Women's Shirts & Tops</p>
          <Image
            className="w-[12px] my-[31px]"
            src="/arrowright.svg"
            alt="banner"
            width={15}
            height={15}
            priority
          />
          <p className="text-[#292929]">Long Sleeve Overshirt, Khaki, 6</p>
        </div>

        <div className="w-full flex justify-between">
          <ProductImages />
          <div className="w-[45%]">
            <p className="text-[#8F8F8F] text-[16px]">John Lewis ANYDAY</p>
            <p className="text-[#292929] text-3xl font-semibold mt-3">
              Long Sleeve Overshirt, Khaki, 6
            </p>
            <div className="flex font-semibold items-center mt-5 w-full justify-between">
              <div className="flex items-center gap-4">
                <p className="text-[#666666] text-[15px]">£40.00</p>
                <p className="text-[#141414] text-xl">£28.00</p>
              </div>
              <div className="flex items-center">
                <p className="text-[#666666] font-light">1,238 Sold</p>
                <div className="bg-[#E0E0E0] w-[6px] h-[6px] rounded-full mx-2"></div>
                <Image
                  className="w-[20px] mr-1"
                  src="/star.svg"
                  alt="banner"
                  width={20}
                  height={20}
                  priority
                />
                <p className="text-[#141414] text-2xl ">4.5</p>
              </div>
            </div>
            <Image
              className="w-full my-7"
              src="/smdottedline.svg"
              alt="banner"
              width={20}
              height={20}
              priority
            />

            <div>
              <p className="text-lg text-[#292929] font-semibold">
                Description:
              </p>
              <p className="text-[#666666] text-[15px] font-light mt-[10px]">
                Boba etiam ut bulla tea est potus dilectus singulari
                compositione saporum et textuum, quae in Taiwan annis 1980 orta
                sunt. Boba refert ad pilas masticas tapiocas in fundo potus
                inventas, quae typice lacte tea nigro sapiuntur. Boba
                phaenomenon.{" "}
                <span className="text-black font-semibold">See More....</span>{" "}
              </p>
            </div>

            <div className="mt-8">
              <p className="text-[#8F8F8F]">
                Color:{" "}
                <span className="text-[#292929] font-semibold">
                  Royal Brown
                </span>
              </p>
              <div className="flex w-full mt-[14px] gap-[14px]">
                <button className="bg-[#534029] rounded-[8px] h-10 w-20 cursor-pointer"></button>
                <button className="bg-[#EBEBEB] rounded-[8px] h-10 w-20 cursor-pointer"></button>
                <button className="bg-[#3A6A90] rounded-[8px] h-10 w-20 cursor-pointer"></button>
                <button className="bg-[#11171D] rounded-[8px] h-10 w-20 cursor-pointer"></button>
              </div>

              <div className="mt-9">
                <div className="flex justify-between">
                  <p className="text-[#8F8F8F]">
                    Size:{" "}
                    <span className="text-[#292929] font-semibold">8</span>
                  </p>
                  <p className="text-[#525252] underline text-[15px]">
                    View Size Chart
                  </p>
                </div>

                <div className="mt-[14px] flex w-full justify-between gap-[14px] text-center text-[#525252] font-semibold text-[18px]">
                  <div className="w-full border border-[#E6E6E6] rounded-[8px] py-[6px] cursor-pointer">
                    6
                  </div>
                  <div className="w-full border border-[#E6E6E6] rounded-[8px] py-[6px] cursor-pointer">
                    8
                  </div>
                  <div className="w-full border border-[#E6E6E6] rounded-[8px] py-[6px] cursor-pointer">
                    10
                  </div>
                  <div className="w-full border border-[#E6E6E6] rounded-[8px] py-[6px] cursor-pointer">
                    14
                  </div>
                  <div className="w-full border border-[#E6E6E6] rounded-[8px] py-[6px] cursor-pointer">
                    18
                  </div>
                  <div className="w-full border border-[#E6E6E6] rounded-[8px] py-[6px] cursor-pointer">
                    20
                  </div>
                </div>

                <div className="mt-[45px] gap-5 flex w-full font-semibold">
                  <button className="rounded-[8px] bg-[#141414] text-center text-white py-[17px] w-[150%]">
                    Add To Cart
                  </button>
                  <button className="border border-[#B8B8B8] rounded-[8px] w-full text-center">
                    Checkout Now
                  </button>
                </div>

                <p className="text-[#7A7A7A] mt-8 text-[15px]">Delivery T&C</p>
              </div>
            </div>
          </div>
        </div>

        <Image
          className="w-full my-[80px]"
          src="/dottedline.svg"
          alt="dottedline"
          width={30}
          height={20}
          priority
        />

        <RelatedProductSection />

        <Image
          className="w-full my-[80px]"
          src="/dottedline.svg"
          alt="dottedline"
          width={30}
          height={20}
          priority
        />

        <ProductReviewAnalyticSection />

        <div className="flex gap-[40px]">
          <ReviewFilter />
          <ReviewListSection />
        </div>

        <Image
          className="w-full my-[80px]"
          src="/dottedline.svg"
          alt="dottedline"
          width={30}
          height={20}
          priority
        />

        <PopularProductSection />
      </div>
    </>
  );
}
