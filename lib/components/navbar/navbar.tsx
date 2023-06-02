"use client";

import { links } from "@lib/configs/navbar";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactElement } from "react";

export const Navbar = (): ReactElement => {
  const pathname = usePathname();

  return (
    <nav className="border-[1px] border-b-gray-3">
      <div className="container grid grid-cols-[1fr_2fr_1fr] items-center">
        <ul className="border-[1px] border-gray-3 w-36 mx-auto p-2">
          <div className="relative h-12">
            <Link href="/">
              <Image src="/images/marvel-logo.png" alt="Marvel Logo" fill className="object-contain" />
            </Link>
          </div>
        </ul>
        <ul className="flex justify-center gap-x-28">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className={clsx(
              "text-white-1 font-medium py-1 px-5 rounded-ee-2xl rounded-tl-2xl rounded-tr-sm rounded-bl-sm",
              "transition-colors duration-100",
              "hover:bg-primary",
              {
                "bg-primary": pathname === link.href
              }
            )}>{link.name}</Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};