import mongoose from 'mongoose';
const Schema = mongoose.Schema;

interface favourite {
  employerUserId: string;
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
  messages: string[];
  applied: boolean;
}

const FavouriteSchema = new Schema<favourite>({
  employerUserId: {
    type: String,
    required: true,
  },
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
    default: false,
  },
});

const Favourite = mongoose.model<favourite>('Favourite', FavouriteSchema);

export { Favourite };
