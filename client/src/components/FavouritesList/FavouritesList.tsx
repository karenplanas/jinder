import React, { useEffect, useState } from "react";
import "./FavouritesList.css";
import { getFavourites } from "../../services/api-client";
import { Favourite } from "../../Interfaces/favourite";

import { FavouriteContainer } from "../favouriteContainer/favouriteContainer";

const FavouritesList: React.FC = () => {
  const [favourites, setFavourites] = useState<Favourite[]>([]);

  useEffect(() => {
    getFavourites(setFavourites);
  }, [favourites]);

  return (
    <div>
      {favourites.map((favourite) => {
        return (
          <FavouriteContainer
            data={favourite}
            key={favourite._id}
            refresh={() => getFavourites(setFavourites)}
          />
        );
      })}
    </div>
  );
};

export default FavouritesList;
