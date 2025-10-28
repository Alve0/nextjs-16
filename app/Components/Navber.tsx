import logoPng from "@/public/assets/icons/logo.png";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export const Navber = () => {
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          {" "}
          <Image src={logoPng} alt="logo" width={24} height={24} />{" "}
          <p>DevEvent</p>
        </Link>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/">Events </Link>
          <Link href="/">Create Event</Link>
        </ul>
      </nav>
    </header>
  );
};
