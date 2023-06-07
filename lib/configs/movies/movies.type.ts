import type { Dayjs } from "dayjs";
import type { Character } from "../characters/characters.type";

export type Movie = {
  id: number;
  title: string;
  overview: string;
  releasedAt: Dayjs;
  runningTime?: number;
  thumbnail: string;
  series: string;
  directors: string[];
  writters: string[];
  characters: Character[];
  productionCountries: string[];
  trailer: string;
};