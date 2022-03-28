import express from 'express'
import * as JobSeekerProfile from '../models/JobSeekerProfile'

export const postJobSeekerProfile = async (req: express.Request, res: express.Response) => {
  const user = await JobSeekerProfile.createOrUpdate(req.user!._id, req.body)
  res.status(201)
  res.json(user)
}

export const getJobSeekerProfile = async (req: express.Request, res: express.Response) => {
  const user = await JobSeekerProfile.findOne(req.user!._id)
  res.status(200)
  res.json(user)
}