import type { ReactElement } from "react";
import type { MovieCardProps } from "../movie-card.type";
import type { CharacterProps } from "./page.type";
import Image from "next/image";

export const CharactersSection = ({ movie }: MovieCardProps): ReactElement => {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center">
        <h2 className="text-white font-medium text-4xl">Characters</h2>
        <div className="w-10 h-1 bg-primary rounded-md" />
      </div>

      <div className="grid grid-cols-characters gap-8 mt-10">
        {movie.characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

const CharacterCard = ({ character }: CharacterProps): ReactElement => {
  return (
    <div className="w-full">
      <div className="relative w-full h-56">
        <Image src={"/images/characters/head/" + character.head} alt={character.name + " Head"} fill className="object-cover rounded-t-md" />
      </div>
      <div className="relative bg-primary p-4 rounded-b-md">
        <div className="absolute bg-white w-20 h-4 -top-2 left-0 right-0 mx-auto -skew-x-12" />
        <p className="text-white font-medium text-lg">{character.name}</p>

        <p className="text-white-1 font-medium italic mt-4">{character.actor}</p>
      </div>
    </div>
  );
};