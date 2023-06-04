import clsx from "clsx";
import { FiMenu, FiX } from "react-icons/fi";
import type { ReactElement } from "react";
import type { HamburgerProps } from "./hamburger.type";

export const Hamburger = ({ open, setOpen }: HamburgerProps): ReactElement => {
  // Common styles :
  const styles = clsx(
    "w-10 h-10 text-white",
    "absolute right-0 top-0 bottom-0 my-auto",
    "transition-opacity duration-200"
  );

  return (
    <span className="relative">
      <FiX onClick={() => setOpen((state) => !state)} className={clsx(
        styles,
        {
          "opacity-100": open,
          "opacity-0": !open
        }
      )} />
      <FiMenu onClick={() => setOpen((state) => !state)} className={clsx(
        styles,
        {
          "opacity-100": !open,
          "opacity-0": open
        }
      )} />
    </span>
  );
};