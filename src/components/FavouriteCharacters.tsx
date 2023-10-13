import { useMemo } from "react";
import { useFavourites } from "../store/useFavourites";

export function FavouriteCharacters() {
  const favourites = useFavourites((s) => s.favourites);

  const memoizedFavourites = useMemo(() => {
    return favourites;
  }, [favourites]);

  return (
    <section className="favourites">
      <h1 className="favourites__heading">Favourites</h1>
      {memoizedFavourites.length > 0 ? (
        <ul className="favourites__list">
          {memoizedFavourites.map((item) => (
            <li key={item.id} className="favourites__item">
              <img src={item.image} alt={item.name} loading="lazy" />
            </li>
          ))}
        </ul>
      ) : (
        <p>No favourite characters selected</p>
      )}
    </section>
  );
}
