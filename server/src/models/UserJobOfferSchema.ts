import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface UserJobOffer {
  jobOfferId: mongoose.Types.ObjectId
  userId: mongoose.Types.ObjectId
  liked: boolean 
}

const UserJobOfferSchema = new Schema<UserJobOffer>({
  jobOfferId: {type: mongoose.SchemaTypes.ObjectId},
  userId: {type: mongoose.SchemaTypes.ObjectId},
  liked: {type: Boolean}  
});

const UserJobOffer = mongoose.model<UserJobOffer>("UserJobOffer", UserJobOfferSchema);

const createOrUpdate = (userId: string, jobOfferId: string, liked: boolean) => {
  return UserJobOffer.findOneAndUpdate(
    { userId, jobOfferId }, 
    { $set: {liked} }, 
    { upsert: true }
  ) 
}

export { UserJobOffer, createOrUpdate };
