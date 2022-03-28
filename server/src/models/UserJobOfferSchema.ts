import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface UserJobOffer {
  jobOfferId: mongoose.Types.ObjectId
  userId: mongoose.Types.ObjectId
  liked: boolean 
  application?: JobApplication
}

interface JobApplication {
  fullName: string
  email: string
  presentation: string
}

const JobApplicationSchema = new Schema<JobApplication>({
  fullName: {type: String},
  email: {type: String},
  presentation: {type: String}
})

const UserJobOfferSchema = new Schema<UserJobOffer>({
  jobOfferId: {type: mongoose.SchemaTypes.ObjectId},
  userId: {type: mongoose.SchemaTypes.ObjectId},
  liked: {type: Boolean},
  application: { type: JobApplicationSchema}  
});

const UserJobOffer = mongoose.model<UserJobOffer>("UserJobOffer", UserJobOfferSchema);

const createOrUpdate = (userId: string, jobOfferId: string, payload: Partial<UserJobOffer>) => {
  return UserJobOffer.findOneAndUpdate(
    { userId, jobOfferId }, 
    { $set: payload }, 
    { upsert: true }
  ) 
}

const getUserJobOffers = (userId) => {
  return UserJobOffer.find({ userId })
}

const getLikedUserJobOffers = (userId) => {
  return UserJobOffer.aggregate([
    { 
      $match: { 
        userId: new mongoose.Types.ObjectId(userId), 
        liked: true 
      }
    }, 
    {
      $lookup: {
        from: 'joboffers',
        localField: 'jobOfferId',
        foreignField: '_id',
        as: 'jobOffer',
      },
    },
    {
      $unwind: {
        path: '$jobOffer',
        preserveNullAndEmptyArrays: true
      }
    }
  ])
}


export { UserJobOffer, createOrUpdate, getUserJobOffers, getLikedUserJobOffers };
