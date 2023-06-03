import { movies } from "@lib/configs/movies";
import type { ReactElement } from "react";
import { MovieCard } from "./movie-card";

const MoviesPage = (): ReactElement => {
  return (
    <div className="container grid grid-cols-5 mt-16 gap-10">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesPage;