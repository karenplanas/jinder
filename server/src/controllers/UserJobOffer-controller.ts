import express from 'express'
import * as UserJobOffer from '../models/UserJobOfferSchema'

export const postUserJobOfferLike = async (req: express.Request, res: express.Response) => {
  const response = await UserJobOffer.createOrUpdate(req.user!._id, req.params.id, {liked: true})
  res.status(200)
  res.json(response)
}

export const postUserJobOfferDislike = async (req: express.Request, res: express.Response) => {
  const response = await UserJobOffer.createOrUpdate(req.user!._id, req.params.id, {liked: false})
  res.status(200)
  res.json(response)
}

export const postUserJobOfferApplication = async (req: express.Request, res: express.Response) => {
  const response = await UserJobOffer.createOrUpdate(req.user!._id, req.params.id, {application: req.body})
  res.status(200)
  res.json(response)
}

export const getLikedJobOffer = async (req: express.Request, res: express.Response) => {
  const response = await UserJobOffer.getLikedUserJobOffers(req.user!._id)
  res.status(200)
  res.json({ data: response })
}

