"use client";

import Image from "next/image";

import arrowDown from "@/public/assets/icons/arrow-down.svg";

export default function Btn() {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={() => console.log("clicked")}
    >
      <a href="#events">
        Explore Events
        <Image src={arrowDown} alt="arow-down" width={24} height={24} />
      </a>
    </button>
  );
}
