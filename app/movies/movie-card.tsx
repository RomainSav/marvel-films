import type { ReactElement } from "react";
import type { MovieCardProps } from "./movie-card.type";
import Image from "next/image";
import clsx from "clsx";
import { dayJS } from "@lib/utils/day-js";

export const MovieCard = ({ movie }: MovieCardProps): ReactElement => {
  return (
    <a key={movie.id} href="/" className="group relative rounded-md">
      <Image
        src={"/images/movies/" + movie.thumbnail}
        alt={movie.title + " Thumbnail"}
        width={300} height={900}
        className="rounded-md" />

      <div className={clsx(
        "absolute p-4 w-full h-full bg-card-1 z-20 left-0 top-0 rounded-md opacity-0",
        "group-hover:opacity-100",
        "border-2 border-primary",
        "transition-opacity duration-200"
      )}>
        <div className="h-28">
          <p className="text-white text-center font-medium mt-6 text-lg">{movie.title}</p>
        </div>

        <p className="absolute left-4 right-4 bottom-16 text-white-1 text-sm text-justify line-clamp-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero facilis
          debitis recusandae quaerat a! Error aspernatur excepturi aliquam illum expedita, quidem nemo beatae
        </p>

        <div className="absolute left-4 bottom-4">
          <p className="text-white-1 text-sm font-light italic">{dayJS(movie.releasedAt).format("MMMM DD, YYYY")}</p>
        </div>
      </div>
    </a>
  );
};