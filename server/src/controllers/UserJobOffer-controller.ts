import express from 'express'
import * as UserJobOffer from '../models/UserJobOfferSchema'

export const postUserJobOfferLike = async (req: express.Request, res: express.Response) => {
  const user = await UserJobOffer.createOrUpdate(req.user!._id, req.params.id, true)
  res.status(201)
  res.json(user)
}

export const postUserJobOfferDislike = async (req: express.Request, res: express.Response) => {
  const user = await UserJobOffer.createOrUpdate(req.user!._id, req.params.id, false)
  res.status(201)
  res.json(user)
}

