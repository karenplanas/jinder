import React, { useState } from "react";
import { Building } from "../icons/Building";
import { Button } from "../Button/Button";
import { TempSendEmail } from "../TempSendEmail/TempSendEmail";
import { useUserContext } from "../../contexts/UserContext";
import { RubbishBin } from "../icons/rubbishBin";
import "./favouriteContainer.css";
import { Favourite } from "../../Interfaces/favourite";
import { deleteFavourite, postJobOffer } from "../../services/api-client";
import { Job } from "../Job/Job";
import { useAuthenticatedApiClient } from "../../services/authenticated-api-client";

interface Props {
  data: Favourite;
  refresh: () => Promise<void>;
}

const FavouriteContainer: React.FC<Props> = ({ data, refresh }) => {
  const [cardActive, setCardActive] = useState(false);
  const [popupActive, setPopupActive] = useState(false);
  const [applied, setApplied] = useState(false);
  const apiClient = useAuthenticatedApiClient()
  
  if (data.applied === true && applied === false) setApplied(true);

  const toggleFunction = () => {
    if (popupActive === true) {
      setPopupActive(false);
    } else {
      setPopupActive(true);
    }
  };
  const showCard = () => {
    if (cardActive === false) setCardActive(true);
    else setCardActive(false);
  };

  const removeFavourite = () => {
    apiClient.dislikeJobOffer(data._id)
    refresh();
  };

  return (
    <div className="favourite_container">
      <div onClick={showCard} className="showCard_div">
        <div className="company_logo_favourites">
          <Building />{" "}
        </div>
        <p>{data.companyname}</p>{" "}
      </div>
      <div className="button_holder">
        <Button
          disabled={applied}
          className="list"
          text="Apply now"
          onClick={toggleFunction}
        ></Button>
        <div onClick={removeFavourite} className="rubbishBin">
          <RubbishBin />
        </div>
      </div>

      {popupActive ? (
        <div className="popUpForm">
          <TempSendEmail
            setState={setPopupActive}
            setApply={setApplied}
            data={data}
          />
        </div>
      ) : (
        <div className="hidden"></div>
      )}

      {cardActive ? (
        <div className="job_card_container" onClick={showCard}>
          <Job jobOffer={data}>
            {" "}
            <Button
              disabled={applied}
              className="list"
              text="Apply now"
              onClick={toggleFunction}
            ></Button>
          </Job>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export { FavouriteContainer };
