import express from "express";
import { JobSeekerProfile } from "../models/JobSeekerProfile";
// import { User } from "../models/User";

export const getJobSeeker = async (
  req: express.Request,
  res: express.Response
) => {
  const jobSeekers = await JobSeekerProfile.find();
  console.log(jobSeekers);
  res.status(200).json(jobSeekers);
};

// export const getJobSeeker = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   const jobSeekers = await User.find({ type: "job-seeker" });
//   console.log(jobSeekers);
//   res.status(200).json(jobSeekers);
// };
