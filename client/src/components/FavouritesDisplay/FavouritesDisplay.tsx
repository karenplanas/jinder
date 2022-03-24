import React, { useEffect, useState } from 'react';
import './FavouritesDisplay.css';
import { getFavourites } from '../../services/api-client';
import { Favourite } from '../../Interfaces/favourite';
import { Building } from '../icons/Building';
import { People } from '../icons/People';
import { TempSendEmail } from '../TempSendEmail/TempSendEmail';
import { Button } from '../Button/Button';

const FavouritesDisplay: React.FC = () => {
  const [favourites, setFavourites] = useState<Favourite[]>([]);
  const [cardActive, setCardActive] = useState(false);
  const [popupActive, setPopupActive] = useState(false);
  useEffect(() => {
    getFavourites(setFavourites);
  }, []);

  const showCard = () => {
    if (cardActive === false) setCardActive(true);
    else setCardActive(false);
  };

  const toggleFunction = () => {
    if (popupActive === true) {
      setPopupActive(false);
    } else {
      setPopupActive(true);
    }
  };

  return (
    <div className="favourites_container">
      {favourites.map((favourite) => {
        return (
          <div className="favourite_container" key={favourite._id}>
            <div className="company_logo_favourites">
              <Building />{' '}
            </div>
            <p>{favourite.companyname}</p>{' '}
            <Button
              variant="outlined"
              text="Apply now"
              onClick={toggleFunction}
            ></Button>
            <div className="formComponent"> </div>
            {popupActive ? <TempSendEmail /> : ''}
            {cardActive ? (
              // will become seperate component to fix state issues and make code tidier
              <div className="detail_container">
                <div className="card_header">
                  <div className="company_logo">
                    <div className="buildingLogo">
                      {' '}
                      <Building />
                    </div>
                  </div>
                  <div className="header_text">
                    <h3 className="company_name">{favourite.companyname}</h3>
                    <div className="company_size_container">
                      <div className="company_size_logo">
                        {' '}
                        <div className="sizeLogo">
                          <People />
                        </div>
                      </div>
                      <h2 className="company_size">201 - 500 employees</h2>
                    </div>
                  </div>
                </div>
                <div className="card_body high-z">
                  <h2 className="jobPosition">{favourite.position}</h2>
                  <p className="jobBio"> {favourite.bio} </p>
                </div>
                <div className="jobSalary high-z">
                  <h3 className="salarySlogan">Salary</h3> {favourite.salary}
                </div>
                <div className="equityContainer high-z">
                  <h3 className="equityString"> Equity</h3> 0-5%
                </div>
                <div className="remoteContainer high-z">
                  <p className="isRemote"> Remote possible</p>
                </div>
                <div className="locationContainer high-z">
                  <h3 className="locationString">{favourite.location}</h3>
                </div>
                <div className="locationContainer high-z">
                  <h3 className="locationString">{favourite.contract}</h3>
                </div>
                <div className="further_details high-z">
                  <p className="detail_text high-z">{favourite.description}</p>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FavouritesDisplay;
