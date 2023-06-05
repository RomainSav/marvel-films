import type { Dayjs } from "dayjs";

export type Movie = {
  id: number;
  title: string;
  releasedAt: Dayjs;
  directors: string[];
  runningTime?: number;
  thumbnail: string;
  actors: string[];
};