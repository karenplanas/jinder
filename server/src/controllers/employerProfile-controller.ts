import express from 'express'
import * as EmployerProfile from '../models/EmployerProfile'

export const postEmployerProfile = async (req: express.Request, res: express.Response) => {
  const employerProfile = await EmployerProfile.createOrUpdate(req.user!._id, req.body)
  res.status(201)
  res.json({data: employerProfile})
}

export const getEmployerProfile = async (req: express.Request, res: express.Response) => {
  const employerProfile = await EmployerProfile.findOne(req.user!._id)
  res.status(200)
  res.json({data: employerProfile})
}