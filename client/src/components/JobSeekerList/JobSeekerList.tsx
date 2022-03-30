// @ts-nocheck
import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { JobSeekerProfile } from "../../Interfaces/JobSeekerProfile";
import { useAuthenticatedApiClient } from "../../services/authenticated-api-client";
import { AppLayout } from "../AppLayout/AppLayout";
import { JobSeeker } from "../JobSeeker/JobSeeker";

type Direction = "left" | "right" | "up" | "down";

const JobSeekerList: React.FC = () => {
  const apiClient = useAuthenticatedApiClient();
  const [jobSeekers, setJobSeekers] = useState<JobSeekerProfile[]>([]);

  useEffect(() => {
    apiClient.getAllJobSeekers().then((data) => {
      console.log("data", data);
      setJobSeekers(data);
      console.log("jobseekers==>yoyo", jobSeekers);
    });
  }, []);

  const swiped = async (direction: Direction, jobSeeker: JobSeekerProfile) => {
    if (direction === "right") {
      await apiClient.likeJobSeeker(jobSeeker._id);
    }
    if (direction === "left") {
      await apiClient.dislikeJobSeeker(jobSeeker._id);
    }
  };

  return (
    <AppLayout title="Job Applicants">
      <div className="JobSeekers">
        {jobSeekers.map((jobSeeker) => {
          console.log("jobSeeker", jobSeeker);
          return (
            <TinderCard
              className="card"
              key={jobSeeker._id}
              onSwipe={(dir) => swiped(dir, jobSeeker)}
            >
              <JobSeeker jobSeeker={jobSeeker} />
            </TinderCard>
          );
        })}
      </div>
    </AppLayout>
  );
};

export default JobSeekerList;
