import type { Dispatch, SetStateAction } from "react";

export type SearchBarProps = {
  setSearchInput: Dispatch<SetStateAction<string>>;
};