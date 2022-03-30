import express from 'express'
import * as JobSeekerProfile from '../models/JobSeekerProfile'

export const postJobSeekerProfile = async (req: express.Request, res: express.Response) => {
  const jobSeekerProfile = await JobSeekerProfile.createOrUpdate(req.user!._id, req.body)
  res.status(201)
  res.json({data: jobSeekerProfile})
}

export const getJobSeekerProfile = async (req: express.Request, res: express.Response) => {
  const jobSeekerProfile = await JobSeekerProfile.findOne(req.user!._id)
  res.status(200)
  res.json({data: jobSeekerProfile})
}