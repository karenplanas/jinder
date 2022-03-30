import { User } from "./User";

export interface IJobSeeker extends User {
  skills: string[];
  experiences: Experience[];
  lookingFor: string[];
}
export interface Experience {
  title: string;
  companyName: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}
