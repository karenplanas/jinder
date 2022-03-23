import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import Job from "../job/job";
import { getJobs, postFavourite } from "../../services/api-client";
import "./joblist.css";

import { NavBarTop } from "../NavBarTop/NavBarTop";
import { NavBarBottom } from "../NavBarBottom/NavBarBottom";
// wil b typescript soon

const JobList = () => {
  const [lastDirection, setLastDirection] = useState();

  const [data, setData] = useState([]);

  useEffect(() => {
    getJobs(setData);
  }, []);

  const swiped = (direction, nameToDelete, jobObject) => {
    if (direction === "right") {
      postFavourite(jobObject);
    }
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left teh screen");
  };

  return (
    <div className="jobList">
      <NavBarTop />
      {console.log(data)}

      <div className="swiper-Container">
        <div className="card-container">
          {data.map((jobOffer) => {
            return (
              <TinderCard
                className="swipe"
                key={jobOffer._id}
                onSwipe={(dir) => swiped(dir, jobOffer._id, jobOffer)}
                onCardLeftScreen={() => outOfFrame(jobOffer._id)}
              >
                <div className="card">
                  {" "}
                  <Job data={jobOffer} />
                </div>
              </TinderCard>
            );
          })}
          <div className="swipe-info">
            {lastDirection ? <p> You swiped {lastDirection} </p> : <p />}
          </div>
        </div>
      </div>
      <NavBarBottom />
    </div>
  );
};

export { JobList };
