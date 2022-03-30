import express from "express";
import { User } from "../models/User";

export const getJobSeeker = async (
  req: express.Request,
  res: express.Response
) => {
  const jobSeekers = await User.aggregate([
    {
      $lookup: {
        from: "jobseekerprofiles",
        localField: "_id",
        foreignField: "userId",
        as: "jobseekerUser",
      },
    },
    {
      $unwind: {
        path: "$jobseekerUser",
        preserveNullAndEmptyArrays: false,
      },
    },
  ]).exec();
  console.log(jobSeekers);
  res.status(200).json(jobSeekers);
};
