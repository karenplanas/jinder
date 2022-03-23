export interface JobSeekerProfile {
  _id: string;
  skills: string[];
  experience: Experience[];
  lookingFor: string[]
}
export interface Experience {
  title: string,
  companyName: string,
  location: string,
  startDate: string,
  endDate: string,
  description: string
}