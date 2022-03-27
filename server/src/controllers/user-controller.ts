import express from 'express'
import * as User from '../models/User'

export const postUser = async (req: express.Request, res: express.Response) => {
  const user = await User.create(req.body)
  res.status(201)
  res.json(user)
}

export const login = async (req: express.Request, res: express.Response) => {
  const user = await User.findOrCreateByExternalId(req.body.externalId)
  res.status(200)
  res.json(user)
}