import React, { useState } from "react";
import { Building } from "../icons/Building";
import { Button } from "../Button/Button";
import { TempSendEmail } from "../TempSendEmail/TempSendEmail";
import { People } from "../icons/People";
import { RubbishBin } from "../icons/rubbishBin";
import "./favouriteContainer.css";
import { Favourite } from "../../Interfaces/favourite";

interface Props {
  data: Favourite;
}

const FavouriteContainer: React.FC<Props> = ({ data }) => {
  const [cardActive, setCardActive] = useState(false);
  const [popupActive, setPopupActive] = useState(false);
  const [applied, setApplied] = useState(false);

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

  const removeFavourite = () => {};

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
        <div onClick={removeFavourite}>
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
        // will become seperate component to fix state issues and make code tidier
        <div className="detail_container showCard" onClick={showCard}>
          <div className="card_header">
            <div className="company_logo">
              <div className="buildingLogo">
                {" "}
                <Building />
              </div>
            </div>
            <div className="header_text">
              <h3 className="company_name">{data.companyname}</h3>
              <div className="company_size_container">
                <div className="company_size_logo">
                  {" "}
                  <div className="sizeLogo">
                    <People />
                  </div>
                </div>
                <h2 className="company_size">201 - 500 employees</h2>
              </div>
            </div>
          </div>
          <div className="card_body high-z">
            <h2 className="jobPosition">{data.position}</h2>
            <p className="jobBio"> {data.bio} </p>
          </div>
          <div className="jobSalary high-z">
            <h3 className="salarySlogan">Salary</h3> {data.salary}
          </div>
          <div className="equityContainer high-z">
            <h3 className="equityString"> Equity</h3> 0-5%
          </div>
          <div className="remoteContainer high-z">
            <p className="isRemote"> Remote possible</p>
          </div>
          <div className="locationContainer high-z">
            <h3 className="locationString">{data.location}</h3>
          </div>
          <div className="locationContainer high-z">
            <h3 className="locationString">{data.contract}</h3>
          </div>
          <div className="further_details high-z">
            <p className="detail_text high-z">{data.description}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export { FavouriteContainer };
