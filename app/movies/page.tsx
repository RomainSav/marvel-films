import { movies } from "@lib/configs/movies";
import type { ReactElement } from "react";
import { MovieCard } from "./movie-card";

const Page = (): ReactElement => {
  return (
    <div className="container grid grid-cols-movies gap-12 mt-16">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Page;