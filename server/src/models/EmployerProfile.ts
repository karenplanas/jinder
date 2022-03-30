import { model, Schema, Types } from "mongoose";

interface EmployerProfile {
  userId: Types.ObjectId;
  companyName: string;
  domain: string;
  address: {
    city: string;
    state: string;
    country: string;
  };
  companySize: {
    min: number;
    max: number;
  };
  imageUrl: string;
  description: string;
}

const EmployerProfileSchema = new Schema<EmployerProfile>({
  userId: { type: Schema.Types.ObjectId, required: true },
  companyName: { type: String, required: true },
  domain: { type: String },
  address: {
    type: {
      city: { type: String },
      state: { type: String },
      country: { type: String },
    },
  },
  companySize: {
    min: { type: Number },
    max: { type: Number },
  },
  imageUrl: { type: String },
  description: String
});

const EmployerProfile = model("employerProfile", EmployerProfileSchema);

const createOrUpdate = (userId: string, payload: Partial<EmployerProfile>) => {
  return EmployerProfile.findOneAndUpdate(
    { userId }, 
    { $set: payload }, 
    { upsert: true, new: true }
  ) 
}

const findOne = (userId: string) => {
  return EmployerProfile.findOne({ userId });
}

export { EmployerProfile, createOrUpdate, findOne };
