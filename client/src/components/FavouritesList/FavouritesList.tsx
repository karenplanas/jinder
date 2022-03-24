import React, { useEffect, useState } from "react";
import "./FavouritesList.css";
import { getFavourites } from "../../services/api-client";
import { Favourite } from "../../Interfaces/favourite";
import { Building } from "../icons/Building";
import { People } from "../icons/People";
import { TempSendEmail } from "../TempSendEmail/TempSendEmail";
import { Button } from "../Button/Button";
import { FavouriteContainer } from "../favouriteContainer/favouriteContainer";

const FavouritesList: React.FC = () => {
  const [favourites, setFavourites] = useState<Favourite[]>([]);

  useEffect(() => {
    getFavourites(setFavourites);
  }, []);

  return (
    <div>
      {favourites.map((favourite) => {
        return <FavouriteContainer data={favourite} key={favourite._id} />;
      })}
    </div>
  );
};

export default FavouritesList;
