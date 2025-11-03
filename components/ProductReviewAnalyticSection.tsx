"use client";

import Image from "next/image";
import ProductRating from "./ProductRating";

export default function ProductReviewAnalyticSection() {
  return (
    <div className="max-lg:w-full">
      <p className="font-semibold text-2xl max-lg:text-[23px]">Product Reviews</p>
      <div>
        {/* <svg width="300" height="100" className="mb-20 w-full">
          <rect
            x="5"
            y="5"
            className="w-full"
            width="full"
            height="90"
            fill="none"
            stroke="#B8B8B8"
            strokeWidth="0.3"
            strokeDasharray="6,5"
          />
        </svg> */}
        <div className="flex max-lg:flex-col justify-between mb-10 mt-3">
          <div className="flex -mt-[92px] max-lg:mt-[9px] max-lg:mb-5">
            <div className="flex items-center font-semibold text-[17px]">
              <Image
                className="w-[75px]"
                src="/ratingellipse.svg"
                alt="banner"
                width={70}
                height={70}
                priority
              />
              <p className="-translate-x-[54.5px] text-[20px] tracking-wide">
                4.5
              </p>

              <div>
                <div className="flex gap-1 w-[55px]">
                  <Image
                    className="w-[20px] mr-1"
                    src="/star.svg"
                    alt="banner"
                    width={20}
                    height={20}
                    priority
                  />
                  <Image
                    className="w-[20px] mr-1"
                    src="/star.svg"
                    alt="banner"
                    width={20}
                    height={20}
                    priority
                  />
                  <Image
                    className="w-[20px] mr-1"
                    src="/star.svg"
                    alt="banner"
                    width={20}
                    height={20}
                    priority
                  />
                  <Image
                    className="w-[20px] mr-1"
                    src="/star.svg"
                    alt="banner"
                    width={20}
                    height={20}
                    priority
                  />
                  <Image
                    className="w-[20px] mr-1"
                    src="/star.svg"
                    alt="banner"
                    width={20}
                    height={20}
                    priority
                  />
                </div>
                <p className="text-[#525252] font-normal mt-2 text-[15px]">
                  from 1.25k reviews
                </p>
              </div>

            </div>
          </div>

          <div className="flex flex-col gap-3">
            <ProductRating rating="5.0" img="/5.0bar.svg" ratingnum="2823" />
            <ProductRating rating="4.0" img="/4.0bar.svg" ratingnum="38" />
            <ProductRating rating="3.0" img="/3.0bar.svg" ratingnum="4" />
            <ProductRating rating="2.0" img="/emptybar.svg" ratingnum="0" />
            <ProductRating rating="1.0" img="/emptybar.svg" ratingnum="0" />
          </div>
        </div>
      </div>
    </div>
  );
}
