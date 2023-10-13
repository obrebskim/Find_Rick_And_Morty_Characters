import { useRef, useState } from "react";
import cn from "clsx";

import { useToggle } from "../hooks/useToggle";
import { useDebounce } from "../hooks/useDebounce";
import { useCharacters } from "../hooks/useCharacter";

import arrow from "../assets/svg/arrow.svg";
import { useClickOutside } from "../hooks/useClickOutside";
import { useEscape } from "../hooks/useEscape";
import { useFavourites } from "../store/useFavourites";
import { useFocusOnActive } from "../hooks/useFocusOnactive";

export function AutosuggestionSelect() {
  const [searchInput, setSearchPhrase] = useState("");
  const [isActive, toggle] = useToggle();
  const debouncedSearchInput = useDebounce(searchInput, 500);
  const favourites = useFavourites((s) => s.favourites);
  const toggleFavourite = useFavourites((s) => s.toggleFavourite);
  const { characters, isLoading, isError } = useCharacters(
    debouncedSearchInput,
    favourites
  );
  const selectRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  useClickOutside(selectRef, toggle);
  useEscape(toggle);
  useFocusOnActive(isActive, inputRef);

  const isLoadingOrError = isLoading || isError;

  return (
    <div className="wrapper">
      <div className="select" ref={selectRef}>
        <button
          className={cn("trigger", {
            ["trigger--active"]: isActive,
          })}
          onClick={() => toggle()}
        >
          Find Rick & Morty Characters
          <img src={arrow} alt="chevron down icon" className="arrow" />
        </button>
        {isActive && (
          <div className="options">
            <input
              className="input"
              ref={inputRef}
              placeholder="Type to search..."
              value={searchInput}
              onChange={(e) => setSearchPhrase(e.target.value)}
            />

            <ul className="list">
              {isLoading && <li className="list__loader">Loading...</li>}
              {isError && (
                <li className="list__error">Something went wrong...</li>
              )}
              {!isLoadingOrError &&
                characters.map((character) => (
                  <li
                    key={character.id}
                    className={cn(
                      "list__item",
                      character.favourite && "list__item--selected"
                    )}
                    onClick={() => toggleFavourite(character)}
                  >
                    {character.name}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
