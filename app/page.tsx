"use client";

import PopularProductSection from "@/components/PopularProductSection";
import ProductDetails from "@/components/ProductDetails";
import ProductImages from "@/components/ProductImages";
import ProductReviewAnalyticSection from "@/components/ProductReviewAnalyticSection";
import RelatedProductSection from "@/components/RelatedProductSection";
import ReviewFilter from "@/components/ReviewFilter";
import ReviewListSection from "@/components/ReviewListSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="px-[5%] max-lg:px-[12px] pb-[80px] max-lg:w-full">
        <div className="w-full flex max-lg:flex-col justify-between">
          <ProductImages />
          <ProductDetails />
        </div>

        <Image
          className="w-full my-[80px] max-lg:hidden"
          src="/dottedline.svg"
          alt="dottedline"
          width={30}
          height={20}
          priority
        />

        <Image
          className="w-full my-[56px] lg:hidden"
          src="/mobiledivider.svg"
          alt="dottedline"
          width={30}
          height={20}
          priority
        />

        <RelatedProductSection category="electronics" />

        <Image
          className="w-full my-[80px] max-lg:hidden"
          src="/dottedline.svg"
          alt="dottedline"
          width={30}
          height={20}
          priority
        />

        <Image
          className="w-full mt-[24px] mb-[56px] lg:hidden"
          src="/mobiledivider.svg"
          alt="dottedline"
          width={30}
          height={20}
          priority
        />

        <ProductReviewAnalyticSection />

        <div className="flex max-lg:flex-col gap-[40px] max-lg:gap-0">
          <ReviewFilter />
          <ReviewListSection />
        </div>

        <Image
          className="w-full my-[80px] max-lg:hidden"
          src="/dottedline.svg"
          alt="dottedline"
          width={30}
          height={20}
          priority
        />

        <Image
          className="w-full my-[56px] lg:hidden"
          src="/mobiledivider.svg"
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
