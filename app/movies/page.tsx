import { getMovies } from "@lib/configs/movies";
import type { ReactElement } from "react";
import { MovieCard } from "./movie-card";

const Page = (): ReactElement => {
  return (
    <div className="container grid grid-cols-5 mt-16 gap-10">
      {getMovies().map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Page;