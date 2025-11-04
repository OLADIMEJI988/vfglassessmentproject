"use client";

import Image from "next/image";
import LikeButton from "./LikeButton";

interface ReviewProps {
  reviewtext: string;
  dateandtime: string;
  img: string;
  name: string;
  likenum: string;

}

export default function Review({ reviewtext, dateandtime, img, name, likenum }: ReviewProps) {
  return (
    <div className="my-[32px] font-semibold">
      <div className="flex">
        <Image
          className="w-[20px] mr-[5px]"
          src="/star.svg"
          alt="banner"
          width={20}
          height={20}
          priority
        />

        <Image
          className="w-[20px] mr-[5px]"
          src="/star.svg"
          alt="banner"
          width={20}
          height={20}
          priority
        />

        <Image
          className="w-[20px] mr-[5px]"
          src="/star.svg"
          alt="banner"
          width={20}
          height={20}
          priority
        />

        <Image
          className="w-[20px] mr-[5px]"
          src="/star.svg"
          alt="banner"
          width={20}
          height={20}
          priority
        />

        <Image
          className="w-[20px] mr-[5px]"
          src="/star.svg"
          alt="banner"
          width={20}
          height={20}
          priority
        />
      </div>
      <p className="text-[#141414] text-[18px] max-lg:text-[14px] mt-[14px]">
        {reviewtext}
      </p>
      <p className="text-[#818B9C] max-lg:text-[12px] font-light mt-1">{dateandtime}</p>

      <div className="flex justify-between mt-6">
        <div className="flex gap-3 items-center">
          <Image
            className="w-[32px] max-lg:w-[28px]"
            src={img}
            alt="avatar"
            width={30}
            height={20}
            priority
          />
          <p className="max-lg:text-[12px]">{name}</p>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-2 border border-[#E4E9EE] py-[13px] px-[14px] rounded-[8px]">
           <LikeButton />
            <p className="font-light max-lg:text-[12px]">{likenum}</p>
          </div>

          <div className="flex items-center gap-2 border border-[#E4E9EE] py-[13px] px-[14px] rounded-[8px]">
            <Image
              className="w-full max-lg:w-[20px] rotate-180 transform scale-x-[-1]"
              src="/like.svg"
              alt="dislike"
              width={30}
              height={20}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
