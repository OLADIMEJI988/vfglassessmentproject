"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState<string | null>("#534029");
  const [selectedSize, setSelectedSize] = useState<string>("8");

  const colors = [
    { hex: "#534029", name: "Royal Brown" },
    { hex: "#EBEBEB", name: "Light Grey" },
    { hex: "#3A6A90", name: "Ocean Blue" },
    { hex: "#11171D", name: "Midnight" },
  ];

  const sizes = ["6", "8", "10", "14", "18", "20"];

  const selectedName =
    colors.find((c) => c.hex === selectedColor)?.name ?? "Royal Brown";

  return (
    <div className="w-[45%] max-lg:w-full max-lg:mt-[56px]">
      <p className="text-[#8F8F8F] text-[16px] max-lg:text-[14px]">
        John Lewis ANYDAY
      </p>
      <p className="text-[#292929] text-3xl max-lg:text-[23px] font-semibold mt-3">
        Long Sleeve Overshirt, Khaki, 6
      </p>
      <div className="flex font-semibold items-center mt-5 max-lg:mt-4 w-full justify-between">
        <div className="flex items-center gap-4">
          <p className="text-[#666666] text-[15px] line-through">£40.00</p>
          <p className="text-[#141414] text-xl">£28.00</p>
        </div>
        <div className="flex items-center">
          <p className="text-[#666666] font-light">1,238 Sold</p>
          <div className="bg-[#E0E0E0] w-[6px] h-[6px] rounded-full mx-2"></div>
          <Image
            className="w-[20px] mr-1 max-lg:-mt-1"
            src="/star.svg"
            alt="banner"
            width={20}
            height={20}
            priority
          />
          <p className="text-[#141414] text-2xl max-lg:-mt-1">4.5</p>
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
        <p className="text-lg text-[#292929] font-semibold">Description:</p>
        <p className="text-[#666666] text-[15px] font-light mt-[10px]">
          Boba etiam ut bulla tea est potus dilectus singulari compositione
          saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba refert
          ad pilas masticas tapiocas in fundo potus inventas, quae typice lacte
          tea nigro sapiuntur. Boba phaenomenon.{" "}
          <span className="text-black font-semibold">See More....</span>{" "}
        </p>
      </div>

      <div className="mt-8">
        <p className="text-[#8F8F8F]">
          Color:{" "}
          <span className="text-[#292929] font-semibold">{selectedName}</span>
        </p>

        <div className="flex w-full mt-[14px]">
          {colors.map((c) => {
            const isSelected = selectedColor === c.hex;

            return (
              <button
                key={c.hex}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedColor(c.hex)}
                className="transition-all duration-150 focus:outline-none flex items-center justify-center"
                style={{
                  padding: 7,
                  borderRadius: 12,
                  border: `2px solid ${isSelected ? c.hex : "transparent"}`,
                  transition: "border-color 0.15s ease",
                }}
              >
                <span
                  aria-hidden
                  className="block rounded-[8px] w-20 max-lg:w-[70px] h-10"
                  style={{ backgroundColor: c.hex }}
                />
              </button>
            );
          })}
        </div>

        <div className="mt-9">
          <div className="flex justify-between">
            <p className="text-[#8F8F8F]">
              Size:{" "}
              <span className="text-[#292929] font-semibold">
                {selectedSize}
              </span>
            </p>
            <p className="text-[#525252] underline text-[15px]">
              View Size Chart
            </p>
          </div>

          <div className="mt-[14px] flex w-full justify-between gap-[14px] text-center text-[#525252] font-semibold text-[18px]">
            {sizes.map((size) => {
              const isSelected = selectedSize === size;
              return (
                <div
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-full border rounded-[8px] py-[6px] cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? "border-[#141414] text-[#141414]"
                      : "border-[#E6E6E6]"
                  }`}
                >
                  {size}
                </div>
              );
            })}
          </div>

          <div className="mt-[45px] gap-5 max-lg:gap-4 flex w-full font-semibold">
            <button className="rounded-[8px] bg-[#141414] text-center text-white py-[17px] w-[150%] max-lg:w-[140%]">
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
  );
}
