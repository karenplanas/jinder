import express from "express";
import { getNewJobOffers, JobOffer } from "../models/JobOfferSchema";

export const postJobOffer = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const jobOffer = new JobOffer(req.body);
    await jobOffer.save();
    res.status(201);
    res.json({ data: jobOffer });
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: "Internal server error" });
  }
};

export const getJobOffers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const jobs = await getNewJobOffers(req.user._id);
    res.status(200);
    res.json({ data: jobs });
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: "Internal server error" });
  }
};

export const deleteJobOffer = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const deleteJob = await JobOffer.findByIdAndDelete(req.params.id);
    res.send(deleteJob).status(200);
  } catch (e) {
    res.status(500);
    res.json({ error: "Internal server error" });
  }
};
