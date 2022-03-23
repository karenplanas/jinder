import { model, Schema } from "mongoose"

interface JobSeekerProfile {
  skills: string[];
  experience: Experience[];
  lookingFor: string[]
}

interface Experience {
  title: string,
  companyName: string,
  location: string,
  startDate: string,
  endDate: string,
  description: string
}

const JobSeekerProfileSchema = new Schema<JobSeekerProfile>({
  skills: { type: [String] },
  experience: { type: [{}] },
  lookingFor: { type: [String] }
});

const JobSeekerProfile = model<JobSeekerProfile>('jobSeekerProfile', JobSeekerProfileSchema);

export { JobSeekerProfile }


