"use client";

import Image from "next/image";
import ProductRating from "./ProductRating";

export default function ProductReviewAnalyticSection() {
  return (
    <div
      className="relative bg-[url('/reviewbg.svg')] bg-no-repeat bg-contain bg-center p-6 max-lg:p-4 mb-6"
    >
      <p className="font-semibold text-2xl max-lg:text-[23px]">Product Reviews</p>

      <div className="flex max-lg:flex-col justify-between mt-3">
        <div className="flex -mt-[92px] max-lg:mt-[9px] max-lg:mb-7">
          <div className="flex items-center font-semibold text-[17px]">
            <Image
              className="w-[75px]"
              src="/ratingellipse.svg"
              alt="rating ellipse"
              width={70}
              height={70}
              priority
            />
            <p className="-translate-x-[54.5px] text-[20px] tracking-wide">
              4.5
            </p>

            <div>
              <div className="flex gap-1 w-[55px]">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    className="w-[20px] mr-1"
                    src="/star.svg"
                    alt="star"
                    width={20}
                    height={20}
                    priority
                  />
                ))}
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
  );
}
