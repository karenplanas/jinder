import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import Job from "../job/job";
import { getJobs } from "../../services/api-client";
import "./joblist.css";
import Navbar from "../navbar/nabar";

const JobList = () => {
  const [lastDirection, setLastDirection] = useState();
  const [favourites, setFavourites] = useState([]);
  const [data, setData] = useState([]);

  const getJobs = () => {
    fetch("http://localhost:4000/JobOffers", {
      method: "GET",
      header: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setData(data.data));
  };

  useEffect(() => {
    getJobs();
    console.log(data);
  }, []);

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
          {data.map((jobOffer) => {
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
      <Navbar />
    </div>
  );
};

export {JobList};
