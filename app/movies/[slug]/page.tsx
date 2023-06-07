"use client";

import type { ReactElement } from "react";
import type { MovieProps } from "./page.type";
import { getMovie } from "@lib/configs/movies";
import { notFound } from "next/navigation";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TextSection } from "./text-section";
import { CharactersSection } from "./characters.section";

const MoviePage = ({ params }: MovieProps): ReactElement => {
  const id = Number(params.slug.split("-")[0]);
  const movie = getMovie(id);
  if (!movie) notFound();

  return (
    <div className="container mt-12 md:mt-16">
      <div onClick={() => history.back()} className="cursor-pointer text-white-1 flex items-center gap-2 w-fit mb-6">
        <AiOutlineArrowLeft />
        <p>Back</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[20rem_1fr] gap-12">
        <div className="relative aspect-[9/16] w-full max-w-md mx-auto lg:mx-0">
          <Image src={"/images/movies/" + movie.thumbnail} alt={movie.title + " Thumbnail"} fill className="object-cover rounded-md" />
        </div>

        <div>
          <div>
            <h1 className="text-white font-bold text-4xl">{movie.title}</h1>
            <div className="w-10 h-1 bg-primary rounded-md" />
          </div>

          {movie.releasedAt.isAfter(new Date()) && (
            <div className="text-center mt-28">
              <p className="text-white uppercase italic font-medium text-3xl">Coming Soon</p>
              <p className="text-white uppercase italic text-2xl">{movie.releasedAt.format("MMMM DD, YYYY")}</p>
            </div>
          )}

          {movie.releasedAt.isBefore(new Date()) && (
            <>
              <p className="text-white-1 mt-5 max-w-7xl text-justify">{movie.overview}</p>

              <div className="mt-8 grid grid-cols-4 gap-8">
                <TextSection title="Directed by" description={movie.directors.join(", ")} />
                <TextSection title="Written by" description={movie.writters.join(", ")} />
                <TextSection title="Production countries" description={movie.productionCountries.join(", ")} />
                <TextSection title="Series" description={movie.series} />
                <TextSection title="Run time" description={`${movie.runningTime ?? "-"} min`} />
                <TextSection title="Release date" description={movie.releasedAt.format("MMMM DD, YYYY")} />
              </div>
            </>
          )}
        </div>
      </div>

      <CharactersSection movie={movie} />
    </div>
  );
};

export default MoviePage;