"use client";

import { useState } from "react";
import Image from "next/image";
import Review from "./Review";

interface ReviewData {
  reviewtext: string;
  dateandtime: string;
  img: string;
  name: string;
  likenum: string;
  hasMedia?: boolean;
  hasDescription?: boolean;
}

export default function ReviewListSection() {
  const [activeTab, setActiveTab] = useState<"all" | "media" | "desc">("all");

  const reviews: ReviewData[] = [
    {
      reviewtext: "This is amazing product I have.",
      dateandtime: "July 2, 2020 03:29 PM",
      img: "/Darrell.svg",
      name: "Darrell Steward",
      likenum: "128",
      hasMedia: true,
      hasDescription: true,
    },
    {
      reviewtext: "This is amazing product I have.",
      dateandtime: "July 2, 2020 1:04 PM",
      img: "/Darlene.svg",
      name: "Darlene Robertson",
      likenum: "82",
      hasMedia: false,
      hasDescription: true,
    },
    {
      reviewtext: "This is amazing product I have.",
      dateandtime: "June 26, 2020 10:03 PM",
      img: "/Murphy.svg",
      name: "Kathryn Murphy",
      likenum: "9",
      hasMedia: true,
      hasDescription: false,
    },
    {
      reviewtext: "This is amazing product I have.",
      dateandtime: "July 7, 2020 10:14 AM",
      img: "/Ronald.svg",
      name: "Ronald Richards",
      likenum: "124",
      hasMedia: false,
      hasDescription: true,
    },
  ];

  const filteredReviews =
    activeTab === "media"
      ? reviews.filter((r) => r.hasMedia)
      : activeTab === "desc"
      ? reviews.filter((r) => r.hasDescription)
      : reviews;

  return (
    <div className="w-full">
      <p className="font-semibold text-[#292929] text-[20px]">Review Lists</p>

      <div className="flex gap-3 mt-4 max-lg:text-[12px]">
        {[
          { key: "all", label: "All Reviews" },
          { key: "media", label: "With Photo & Video" },
          { key: "desc", label: "With Description" },
        ].map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <div
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`rounded-[8px] py-[10px] px-5 max-lg:px-2 font-semibold cursor-pointer border transition-all duration-200 ${
                isActive
                  ? "bg-[#EBEBEB] border-[#333333] text-[#141414]"
                  : "bg-transparent border-[#E6E6E6] text-[#141414]"
              }`}
            >
              <p>{tab.label}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review, index) => (
            <div key={index}>
              <Review
                reviewtext={review.reviewtext}
                dateandtime={review.dateandtime}
                img={review.img}
                name={review.name}
                likenum={review.likenum}
              />

              {index !== filteredReviews.length - 1 && (
                <Image
                  className="w-full my-[32px]"
                  src="/dottedline.svg"
                  alt="divider"
                  width={30}
                  height={20}
                  priority
                />
              )}
            </div>
          ))
        ) : (
          <p className="text-[#666666] mt-6">No reviews found.</p>
        )}
      </div>
    </div>
  );
}
