import { model, Schema } from "mongoose";
import { EmployerProfile } from "./EmployerProfile";
import { JobSeekerProfile } from "./JobSeekerProfile";
import { generateJwt } from "../utils/jwt-utils";

interface User {
  _id: string;
  externalId: string;
  firstName: string;
  lastName: string;
  email: string;
  type: "employer" | "jobseeker";
}
interface Employer extends User {
  type: "employer";
  employerProfile: EmployerProfile;
}

interface JobSeeker extends User {
  type: "jobseeker";
  jobSeekerProfile: JobSeekerProfile;
}

const UserSchema = new Schema<User>({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true },
  type: { type: String, required: true },
  externalId: { type: String, required: true },
});

const User = model("user", UserSchema);

const findOne = (externalId: string) => {
  return User.aggregate([
    {
      $match: { externalId },
    },
    {
      $lookup: {
        from: "employerprofiles",
        localField: "_id",
        foreignField: "userId",
        as: "employerProfile",
      },
    },
    {
      $unwind: {
        path: "$employerProfile",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'jobseekerprofiles',
        localField: '_id',
        foreignField: 'userId',
        as: 'jobSeekerProfile'
      }
    },
    {
      $unwind: {
        path: "$jobSeekerProfile",
        preserveNullAndEmptyArrays: true,
      },
    },
  ]).then((result) => result[0]);
};

const findAllJobSeekers = () => {
  return User.aggregate([
    {
      $match: {
        type: 'jobseeker'
      }
    },
    {
      $lookup: {
        from: 'jobseekerprofiles',
        localField: '_id',
        foreignField: 'userId',
        as: 'jobSeekerProfile'
      }
    },
    {
      $unwind: {
        path: '$jobSeekerProfile',
        preserveNullAndEmptyArrays: true
      }
    }
  ])
}


const create = async (payload: Partial<User> & { companyName?: string }) => {
  const user = await User.create(payload);

  if (user.type === "employer") {
    const employerProfile = await EmployerProfile.create({
      userId: user.id,
      name: payload.companyName,
    });

    return generateJwt({
      ...user.toObject(),
      employerProfile: employerProfile.toObject(),
    });
  }

  return generateJwt(user.toObject());
};

const findOrCreateByExternalId = async (
  externalId: string,
  payload: object = {}
) => {
  const user = await findOne(externalId);

  if (!user) {
    return create({
      ...payload,
      externalId,
    });
  }

  return generateJwt(await findOne(externalId))
}

export { 
  JobSeeker, 
  User,
  Employer,  
  create,
  findOne,
  findOrCreateByExternalId,
  findAllJobSeekers
}


