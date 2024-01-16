import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";

const NavItems = () => {
  return (
    <ul className="flex gap-5 text-black text-[17px]">
      {NAV_LINKS.map((link) => {
        return (
             <Link href={link.href}>{link.label}</Link> 
            )
      })}
    </ul>
  );
};

export default NavItems;
