export interface JobOffer {
  _id: string;
  companyname: string;
  companysize: string;
  position: string;
  bio: string;
  role: string;
  level: string;
  description: string;
  skills: string[];
  education: string;
  experience: string;
  location: string;
  contract: string;
  salary: string;
  messages?: [];
  applied?: boolean;
}
