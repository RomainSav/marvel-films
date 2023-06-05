export type Movie = {
  id: number;
  title: string;
  releasedAt: string;
  directors: string[];
  runningTime?: number;
  thumbnail: string;
  actors: string[];
};