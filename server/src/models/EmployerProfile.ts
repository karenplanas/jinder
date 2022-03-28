import { model, Schema, Types } from "mongoose";

interface EmployerProfile {
  userId: Types.ObjectId;
  name: string;
  domain: string;
  address: {
    city: string;
    state: string;
    country: string;
  };
  size: {
    min: number;
    max: number;
  };
  imageUrl: string;
}

const EmployerProfileSchema = new Schema<EmployerProfile>({
  userId: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  domain: { type: String },
  address: {
    type: {
      city: { type: String },
      state: { type: String },
      country: { type: String },
    },
  },
  size: {
    min: { type: Number },
    max: { type: Number },
  },
  imageUrl: { type: String },
});

const EmployerProfile = model("employerProfile", EmployerProfileSchema);

export { EmployerProfile };
