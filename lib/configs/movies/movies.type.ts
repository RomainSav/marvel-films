import type { Dayjs } from "dayjs";

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
  characters: string[];
  productionCountries: string[];
  trailer: string;
};