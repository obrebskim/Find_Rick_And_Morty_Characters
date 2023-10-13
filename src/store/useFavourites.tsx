import { create } from "zustand";
import { Character } from "../types/Character";
import { checkAndToggleFavourites } from "../lib/checkAndToggleFavourites";

interface Favourites {
  favourites: Character[];
  toggleFavourite: (character: Character) => void;
}

export const useFavourites = create<Favourites>((set) => ({
  favourites: [],
  toggleFavourite: (character) =>
    set((prev) => ({
      favourites: checkAndToggleFavourites(character, prev.favourites),
    })),
}));
