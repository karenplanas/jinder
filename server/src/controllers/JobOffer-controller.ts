import express from 'express';
import { JobOffer } from '../models/JobOfferSchema';

export const postJobOffer = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const jobOffer = new JobOffer({
      companyname: req.body.companyname,
      companysize: req.body.companysize,
      position: req.body.position,
      bio: req.body.bio,
      role: req.body.role,
      level: req.body.level,
      description: req.body.description,
      languages: req.body.languages,
      education: req.body.education,
      experience: req.body.experience,
      location: req.body.location,
      contract: req.body.contract,
      salary: req.body.salary,
    });
    await jobOffer.save();
    res.status(201);
    res.json({ data: jobOffer });
  } catch (e) {
    res.status(500);
    res.json({ error: 'Internal server error' });
  }
};

export const getJobOffers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const jobs = await JobOffer.find();
    res.status(200);
    res.json({ data: jobs });
  } catch (e) {
    res.status(500);
    res.json({ error: 'Internal server error' });
  }
};