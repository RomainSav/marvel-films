"use client";

import { movies } from "@lib/configs/movies";
import { type ReactElement, useState } from "react";
import { MovieCard } from "./movie-card";
import { SearchBar } from "@lib/components/search-bar";
import type { Movie } from "@lib/configs/movies/movies.type";

const Page = (): ReactElement => {
  const [searchInput, setSearchInput] = useState("");

  const getFilteredMovies = (): Movie[] => {
    let filteredMovies: Movie[] = [];

    filteredMovies = [
      ...filteredMovies,
      ...movies.filter((movie) => {
        if (!movie.title.toLowerCase().replace(" ", "").includes(searchInput)) return false;
        if (filteredMovies.find((m) => m.id === movie.id)) return false;

        return true;
      })
    ];

    return filteredMovies;
  };

  return (
    <div className="container">
      <div className="mt-12 md:mt-16 w-full">
        <SearchBar setSearchInput={setSearchInput} />
      </div>

      <div className="grid grid-cols-movies gap-8 mt-12 md:mt-16 md:gap-12">
        {getFilteredMovies().map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Page;