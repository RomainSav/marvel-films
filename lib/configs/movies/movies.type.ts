export type Movie = {
  id: number;
  title: string;
  releasedAt: Date;
  directors: string[];
  runningTime?: number;
  thumbnail: string;
  actors: string[];
};