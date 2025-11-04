"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeartButton() {
  const [liked, setLiked] = useState(false);

  return (
    <div
      onClick={() => setLiked(!liked)}
      className="cursor-pointer inline-block transition-transform duration-150 active:scale-90"
    >
      {liked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#e63946"
          viewBox="0 0 24 24"
          strokeWidth={0}
          stroke="none"
          className="w-[21px] h-[21px] max-lg:w-[20px]"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ) : (
        <Image
          className="w-[20px]"
          src="/heart.svg"
          alt="banner"
          width={20}
          height={20}
          priority
        />
      )}
    </div>
  );
}
