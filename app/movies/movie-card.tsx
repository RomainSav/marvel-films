import type { ReactElement } from "react";
import type { MovieCardProps } from "./movie-card.type";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Loader } from "@lib/components/loader";

export const MovieCard = ({ movie }: MovieCardProps): ReactElement => {
  return (
    <Link key={movie.id} href="/" className="group relative rounded-md aspect-[9/16] w-full flex justify-center items-center overflow-hidden">
      <Loader />

      <Image
        src={"/images/movies/" + movie.thumbnail}
        alt={movie.title + " Thumbnail"}
        fill
        className="rounded-md object-cover" />

      <div className={clsx(
        "absolute p-4 w-full h-full bg-card-1 z-20 left-0 top-0 rounded-md opacity-0",
        "group-hover:opacity-100",
        "transition-opacity duration-300"
      )}>
        <div className={clsx(
          "absolute z-10 flex items-center bottom-6 left-0 -skew-x-12",
          "w-52 p-4 bg-primary",
          "-translate-x-56 group-hover:translate-x-0 transition-transform duration-300"
        )}>
          <div className="skew-x-12 ml-3">
            <p className="text-white-2 font-medium text-xl md:text-lg">{movie.title}</p>
            <p className="text-white-2 font-light italic text-sm">{movie.releasedAt.format("MMMM DD, YYYY")}</p>
          </div>
        </div>

        <div className={clsx(
          "absolute flex items-center bottom-4 left-2 -skew-x-12",
          "w-52 h-12 bg-white",
          "-translate-x-56 group-hover:translate-x-0 transition-transform duration-300 delay-75"
        )} />
      </div>
    </Link>
  );
};