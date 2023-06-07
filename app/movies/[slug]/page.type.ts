import type { Character } from "@lib/configs/characters/characters.type";

export type MovieProps = {
  params: MovieParams;
};

export type MovieParams = {
  slug: string;
};

export type CharacterProps = {
  character: Character;
};