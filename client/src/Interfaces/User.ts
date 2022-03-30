import { EmployerProfile } from "./EmployerProfile";
import { JobSeekerProfile } from "./JobSeekerProfile";

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accessToken: string;
  type: 'employer' | 'jobseeker'
}
export interface JobSeeker extends User {
  type: 'jobseeker'
  jobSeekerProfile: JobSeekerProfile
}
export interface Employer extends User {
  type: 'employer'
  employerProfile: EmployerProfile
}