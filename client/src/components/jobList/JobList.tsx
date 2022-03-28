import React from "react";
import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { Job } from "../Job/Job";
import { AppLayout } from "../AppLayout/AppLayout";
import { JobOffer } from "../../Interfaces/JobOffer";
import "./JobList.css";
import { useAuthenticatedApiClient } from "../../services/authenticated-api-client";

type Direction = "left" | "right" | "up" | "down";

const JobList: React.FC = () => {
  const apiClient = useAuthenticatedApiClient()
  const [jobOffers, setJobOffers] = useState<JobOffer[]>([]);

  useEffect(() => {
    apiClient.getJobOffers().then(({ data }) => setJobOffers(data))
  }, []);

  const swiped = async (direction: Direction, jobOffer: JobOffer) => {
    if (direction === "right") {
      await apiClient.likeJobOffer(jobOffer._id)
    }
    if (direction === "left") {
      await apiClient.dislikeJobOffer(jobOffer._id)
    }
  };

  return (
    <AppLayout title="Find your dream job">
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
