import type { ReactElement } from "react";
import type { MovieProps } from "./page.type";
import { getMovie } from "@lib/configs/movies";
import { notFound } from "next/navigation";
import Image from "next/image";

const MoviePage = ({ params }: MovieProps): ReactElement => {
  const id = Number(params.slug.split("-")[0]);
  const movie = getMovie(id);
  if (!movie) notFound();

  return (
    <div className="container mt-12 md:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-[20rem_1fr] gap-12">
        <div className="relative aspect-[9/16] w-full max-w-md mx-auto lg:mx-0">
          <Image src={"/images/movies/" + movie.thumbnail} alt={movie.title + " Thumbnail"} fill className="object-cover rounded-md" />
        </div>

        <div>
          <div>
            <h1 className="text-white font-bold text-4xl">{movie.title}</h1>
            <div className="w-10 h-1 bg-primary rounded-md" />
          </div>

          <p className="text-white-1 mt-5 max-w-7xl text-justify">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;