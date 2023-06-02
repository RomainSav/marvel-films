import { movies } from "@lib/configs/movies";
import Image from "next/image";
import type { ReactElement } from "react";

const MoviesPage = (): ReactElement => {
  return (
    <div className="container grid grid-cols-5 mt-16 gap-10">
      {movies.map((movie) => (
        <div key={movie.id}>
          <div>
            <Image src={"/images/movies/" + movie.thumbnail} alt={movie.title + " Thumbnail"} height={800} width={200} />
          </div>
          <p className="text-white">{movie.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MoviesPage;