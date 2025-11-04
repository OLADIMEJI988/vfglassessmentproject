"use client";

import Image from "next/image";
import Review from "./Review";

export default function ReviewListSection() {
  return (
    <div className="w-full">
      <p className="font-semibold text-[#292929] text-[20px]">Review Lists</p>
      <div className="flex gap-3 mt-4 max-lg:text-[12px]">
        <div className="bg-[#EBEBEB] border border-[#333333] rounded-[8px] text-[#141414] py-[10px] px-5 max-lg:px-2 font-semibold cursor-pointer">
          <p>All Reviews</p>
        </div>

        <div className="bg-transparent border border-[#E6E6E6] rounded-[8px] text-[#141414] py-[10px] px-4 max-lg:px-2 font-semibold cursor-pointer">
          <p>With Photo & Video</p>
        </div>

        <div className="bg-transparent border border-[#E6E6E6] rounded-[8px] text-[#141414] py-[10px] px-4 max-lg:px-2 font-semibold cursor-pointer">
          <p>With Description</p>
        </div>
      </div>

      <Review
        reviewtext="This is amazing product I have."
        dateandtime="July 2, 2020 03:29 PM"
        img="/Darrell.svg"
        name="Darrell Steward"
        likenum="128"
      />

      <Image
        className="w-full my-[32px]"
        src="/dottedline.svg"
        alt="dottedline"
        width={30}
        height={20}
        priority
      />

      <Review
        reviewtext="This is amazing product I have."
        dateandtime="July 2, 2020 1:04 PM"
        img="/Darlene.svg"
        name="Darlene Robertson"
        likenum="82"
      />

      <Image
        className="w-full my-[32px]"
        src="/dottedline.svg"
        alt="dottedline"
        width={30}
        height={20}
        priority
      />

      <Review
        reviewtext="This is amazing product I have."
        dateandtime="June 26, 2020 10:03 PM"
        img="/Murphy.svg"
        name="Kathryn Murphy"
        likenum="9"
      />

      <Image
        className="w-full my-[32px]"
        src="/dottedline.svg"
        alt="dottedline"
        width={30}
        height={20}
        priority
      />

      <Review
        reviewtext="This is amazing product I have."
        dateandtime="July 7, 2020 10:14 AM"
        img="/Ronald.svg"
        name="Ronald Richards"
        likenum="124"
      />
    </div>
  );
}
