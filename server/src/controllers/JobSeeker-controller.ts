import express from "express";
import { User } from "../models/User";

export const getJobSeeker = async (
  req: express.Request,
  res: express.Response
) => {
  const jobSeekers = await User.find({ type: "jobseeker" });
  res.status(200).json(jobSeekers);
};
