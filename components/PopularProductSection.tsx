"use client";

import RelatedProduct from "./RelatedProduct";


export default function PopularProductSection() {
  return (
    <div>
        <div className="flex items-center justify-between">
            <p className="text-[#141414] text-[25px] font-semibold">Popular this week</p>
            <p className="text-[#525252] text-[15px] underline">View All</p>
        </div>

        <div className="flex max-lg:flex-col gap-[35px] mt-6">
            <RelatedProduct img="/whistle.svg" productname="Whistle" productprice="$26" productdetail="Wide Leg Cropped Jeans, Denim" numsold="1,238" />
            <RelatedProduct img="/anyday1.svg" productname="John Lewis ANYDAY" productprice="$26" productdetail="Long Sleeve Utility Shirt, Navy, 6" numsold="1,238" />
            <RelatedProduct img="/anyday2.svg" productname="John Lewis ANYDAY" productprice="$32" productdetail="Stripe Curved Hem Shirt, Blue" numsold="620" />
            <RelatedProduct img="/anyday3.svg" productname="John Lewis ANYDAY" productprice="$40" productdetail="Denim Overshirt, Mid Wash" numsold="238" />
            <RelatedProduct img="/anyday4.svg" productname="John Lewis" productprice="$79" productdetail="Linen Blazer, Navy" numsold="1,238" />
        </div>
    </div>
  )
}
