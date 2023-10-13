import { Character } from "../types/Character";

export function checkAndToggleFavourites(
  character: Character,
  favourites: Character[]
): Character[] {
  const hasCurrentID: boolean = favourites.some((ch) => ch.id === character.id);
  if (hasCurrentID) {
    return favourites.filter((ch) => ch.id !== character.id);
  } else {
    return [...favourites, character];
  }
}
