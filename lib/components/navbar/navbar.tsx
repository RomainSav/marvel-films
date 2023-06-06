"use client";

import { links } from "@lib/configs/navbar";
import { useIsDomLoaded } from "@lib/hooks/is-dom-loaded";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";
import { type ReactElement, useState, useEffect } from "react";
import { Hamburger } from "../hamburger";

export const Navbar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const isDomLoaded = useIsDomLoaded();
  const matches = useMediaQuery("(max-width: 1029px)");
  const pathname = usePathname();

  // Close mobile navbar on navigation
  useEffect(() => setIsOpen(false), [pathname]);

  if (!isDomLoaded) return (
    <nav className="border-[1px] border-b-gray-3 h-16" />
  );

  if (matches) return (
    <nav className={clsx(
      "border-[1px] border-b-gray-3"
    )}>
      <div className="container flex justify-between items-center h-16">
        <Link href="/">
          <Image src="/images/marvel-icon.png" alt="Marvel Logo" height={40} width={40} className="object-contain" />
        </Link>

        <Hamburger open={isOpen} setOpen={setIsOpen} />
      </div>


      <div className={clsx(
        "overflow-y-hidden transition-[max-height] duration-500",
        {
          "max-h-0": !isOpen,
          "max-h-96": isOpen
        }
      )}>
        <ul className="container grid gap-2 pb-4">
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

  return (
    <nav className="border-[1px] border-b-gray-3">
      <div className="container grid grid-cols-[1fr_2fr_1fr] items-center h-16">
        <ul className="w-36 mx-auto p-2">
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