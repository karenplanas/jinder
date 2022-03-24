import React from 'react'
import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { getJobs, postFavourite } from "../../services/api-client";
import { Job } from "../Job/Job";
import { AppLayout } from '../AppLayout/AppLayout';
import { JobOffer } from '../../Interfaces/JobOffer';
import "./JobList.css";

type Direction = 'left' | 'right' | 'up' | 'down'

const JobList: React.FC = () => {
  const [jobOffers, setJobOffers] = useState<JobOffer[]>([]);

  useEffect(() => {
    getJobs(setJobOffers);
  }, []);

  const swiped = (direction: Direction, jobObject: JobOffer) => {
    if (direction === "right") {
      postFavourite(jobObject);
    } if (direction === "left") {
      console.log(`${jobObject._id} got rejected by user`);
    }
  };

  return (
    <AppLayout title='Find your dream job' >
      <div className="JobList">
        {jobOffers.map((jobOffer) => {
          return (
            <TinderCard
              className="card"
              key={jobOffer._id}
              onSwipe={(dir) => swiped(dir, jobOffer)}
            >
              <Job jobOffer={jobOffer} />
            </TinderCard>
          );
        })}
      </div>
    </AppLayout>
  );
};

export { JobList };
