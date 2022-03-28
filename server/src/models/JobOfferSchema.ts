import mongoose from "mongoose";
import { getJobOffers } from "../controllers/JobOffer-controller";
import { getUserJobOffers } from "./UserJobOfferSchema";
const Schema = mongoose.Schema;

interface newJobOffer {
  companyname: string;
  companysize: string;
  position: string;
  bio: string;
  role: string;
  level: string;
  description: string;
  languages: string[];
  education: string;
  experience: string;
  location: string;
  contract: string;
  salary: string;
  messages?: [];
  applied?: boolean;
}

const JobOfferSchema = new Schema<newJobOffer>({
  companyname: {
    type: String,
    required: true,
  },
  companysize: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  languages: {
    type: [],
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contract: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  messages: {
    type: [],
  },
  applied: {
    type: Boolean,
  },
});

const JobOffer = mongoose.model<newJobOffer>("JobOffer", JobOfferSchema);

const getNewJobOffers = async (userId: string) => {
  const userJobOffers = await getUserJobOffers(userId)
  return JobOffer.find(
    {_id: {$nin: userJobOffers.map(userJobOffer => userJobOffer.jobOfferId)}}
  )
}


export { JobOffer, getNewJobOffers };
