import mongoose from 'mongoose';
const Schema = mongoose.Schema;

interface newJobOffer {
  companyname: string;
  position: string;
  role: string;
  languages: string[];
  education: string;
  experience: string;
  location: string;
  contract: string;
  salary: string;
}

const JobOfferSchema = new Schema<newJobOffer>({
  companyname: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  role: {
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
});

const JobOffer = mongoose.model<newJobOffer>('JobOffer', JobOfferSchema);

export { JobOffer };
