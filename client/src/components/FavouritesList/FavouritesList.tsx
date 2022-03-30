import React, { useEffect, useState } from 'react';
import { NavTabs } from '../NavTabs/NavTabs';
import { FavouriteItem } from '../FavouriteItem/FavouriteItem';
import { useAuthenticatedApiClient } from '../../services/authenticated-api-client';
import { UserJobOffer } from '../../Interfaces/UserJobOffer';
import { AppLayout } from '../AppLayout/AppLayout';
import './FavouritesList.css';

const tabs = [
  { name: 'Favourites', endpoint: '/favourites' },
  { name: 'Chat', endpoint: '/chatlist' },
]

const FavouritesList: React.FC = () => {
  const apiClient = useAuthenticatedApiClient();
  const [favourites, setFavourites] = useState<UserJobOffer[]>([]);

  const getLikedJobOffers = () => apiClient.getLikedJobOffers().then(({ data }) => setFavourites(data));

  useEffect(() => {
    getLikedJobOffers();
  }, []);

  return (
    <AppLayout title='Jobs'>
      <NavTabs tabs={tabs} />
      <div className='FavouritesList-container'>
        {favourites.map((favourite) => {
          return (
            <FavouriteItem
              data={favourite}
              key={favourite._id}
              refresh={getLikedJobOffers}
            />
          );
        })}
      </div>
    </AppLayout>
  );
};

export { FavouritesList };
