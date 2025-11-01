"use client";

import Image from "next/image";

interface RatingProps {
  rating: string;
  img: string;
  ratingnum: string;
}

export default function ProductRating({ rating, img, ratingnum }: RatingProps) {
  return (
    <div className="flex text-[#0B0F0E] items-center font-semibold">
      <p>{rating}</p>
      <Image
        className="w-[20px] ml-2"
        src="/star.svg"
        alt="banner"
        width={20}
        height={20}
        priority
      />
      <Image
        className="w-full mx-[24px]"
        src={img}
        alt="banner"
        width={70}
        height={70}
        priority
      />
      <p>{ratingnum}</p>
    </div>
  );
}
