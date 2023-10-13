import { useState, useEffect } from "react";
import getCharacters from "../api/getCharacters";
import { Character } from "../types/Character";

type Output = { isLoading: boolean; isError: boolean; characters: Character[] };

export const useCharacters = (
  value: string,
  favourites: Character[]
): Output => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fun = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        if (value.trim()) {
          setCharacters(await getCharacters(value));
        } else {
          setCharacters([]);
        }
      } catch (err) {
        setIsError(false);
      } finally {
        setIsLoading(false);
      }
    };
    fun();
  }, [value]);

  useEffect(() => {
    const favouritesID: number[] = favourites.map((ch) => ch.id);
    setCharacters((prev) =>
      prev.map((ch) => ({
        ...ch,
        favourite: favouritesID.includes(ch.id) ? true : false,
      }))
    );
  }, [favourites]);

  return { isLoading, isError, characters };
};
