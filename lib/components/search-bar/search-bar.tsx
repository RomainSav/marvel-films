"use client";

import { type ChangeEvent, type ReactElement, useEffect, useState } from "react";
import type { SearchBarProps } from "./search-bar.type";
import { useDebounce } from "usehooks-ts";
import clsx from "clsx";
import { BiSearch } from "react-icons/bi";

export const SearchBar = ({ setSearchInput }: SearchBarProps): ReactElement => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value);

  useEffect(() => setSearchInput(debouncedValue.toLowerCase().replace(" ", "")), [debouncedValue, setSearchInput]);

  return (
    <div className="flex items-center h-12">
      <div className="bg-primary h-full w-12 flex items-center justify-center rounded-l-md">
        <BiSearch className="text-white h-6 w-6" />
      </div>
      <input
        type="text"
        placeholder="Search a Marvel movie"
        value={value}
        onChange={handleChange}
        className={clsx(
          "h-12 px-4 rounded-r-md outline-none w-full bg-gray-2 text-white"
        )} />
    </div>
  );
};