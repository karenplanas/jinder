import React, { useEffect, useState } from 'react';
import './FavouritesList.css';
import { NavBarTop } from '../NavBarTop/NavBarTop';
import { NavTabs } from '../NavTabs/NavTabs';

import { FavouriteContainer } from '../favouriteContainer/favouriteContainer';
import { useAuthenticatedApiClient } from '../../services/authenticated-api-client';
import { UserJobOffer } from '../../Interfaces/UserJobOffer';

const FavouritesList: React.FC = () => {
  const apiClient = useAuthenticatedApiClient();
  const [favourites, setFavourites] = useState<UserJobOffer[]>([]);

  const getLikedJobOffers = () =>
    apiClient.getLikedJobOffers().then(({ data }) => setFavourites(data));

  useEffect(() => {
    getLikedJobOffers();
  }, []);

  return (
    <div>
      <NavBarTop />
      <NavTabs
        tabs={[
          { name: 'Favourites', endpoint: '/favourites' },
          { name: 'Chat', endpoint: '/chatlist' },
        ]}
      />{' '}
      {favourites.map((favourite) => {
        return (
          <FavouriteContainer
            data={favourite.jobOffer}
            key={favourite._id}
            refresh={getLikedJobOffers}
          />
        );
      })}
    </div>
  );
};

export { FavouritesList };
