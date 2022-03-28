import { JobOffer } from "./JobOffer"

export interface UserJobOffer {
  _id: string
  jobOfferId: string
  jobOffer: JobOffer
  userId: string
  liked: boolean 
}