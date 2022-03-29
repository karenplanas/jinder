// @ts-nocheck
import express from "express";
import { JobSeekerProfile } from "../models/JobSeekerProfile";
import { User } from "../models/User";

// export const getJobSeekerProfile = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   const jobSeekers = await JobSeekerProfile.find();
//   console.log(jobSeekers);
//   res.status(200).json(jobSeekers);
// };

export const getJobSeeker = async (
  req: express.Request,
  res: express.Response
) => {
  // const jobSeekers = await User.find({ type: "job-seeker" })
  const jobSeekers = await User.aggregate([
    { $match: { type: "job-seeker" } },
    // {
    //   $unwind: {
    //     path: "$jobseekerProfile",
    //     preserveNullAndEmptyArrays: true,
    //   },
    // },
    {
      $lookup: {
        from: "jobseekerprofiles",
        localField: "externalId",
        foreignField: "_id",
        as: "jobseekerProfile",
      },
    },
  ]).exec();
  console.log(jobSeekers);
  // [
  //   {
  //     $lookup: {
  //       from: "jobseekerprofiles",
  //       localField: "_id",
  //       foreignField: "userId",
  //       as: "jobseekerProfile",
  //     },
  //   },
  // ]

  res.status(200).json(jobSeekers);
};

// aggregate.lookup({
//   from: "users",
//   localField: "userId",
//   foreignField: "_id",
//   as: "users",
// });
