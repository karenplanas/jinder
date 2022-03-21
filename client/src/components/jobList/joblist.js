import { useState } from "react";
import TinderCard from "react-tinder-card";
import Job from "../job/job";
import "./joblist.css";

const JobList = ({ data }) => {
  const [lastDirection, setLastDirection] = useState();
  const [favourites, setFavourites] = useState([]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left teh screen");
  };

  return (
    <div className="jobList">
      <div className="swiper-Container">
        <div className="card-container">
          {data.results.map((jobOffer) => {
            return (
              <TinderCard
                className="swipe"
                key={jobOffer._id}
                onSwipe={(dir) => swiped(dir, jobOffer._id)}
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
    </div>
  );
};

export default JobList;
