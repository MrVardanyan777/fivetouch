import { FOOTER_SOCIAL } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-[10vh] bg-white shadow-xl px-[2rem] md:px-[5rem] flex items-center justify-between">
      <div className="flex flex-col items-start gap-3">
        <Link href="/" className="logo">
          FT
        </Link>
        <p className="text-gray text-[12px] font-semibold">
          2024 Evently. All Rights reserved.
        </p>
      </div>
      <div className="flex items-center gap-2">
        {FOOTER_SOCIAL.map((icon) => {
          return (
            <Link href={icon.url} target="_blank">
              <Image src={icon.href} alt={icon.alt} width={25} height={25} />
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
