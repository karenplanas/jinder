import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

interface Chat {
  jobSeekerUserId: mongoose.Types.ObjectId;
  employerUserId: mongoose.Types.ObjectId;
  messages: Message[];
}

interface Message {
  senderId: mongoose.Types.ObjectId;
  content: string;
  sentAt: Date;
}

const MessageSchema = new Schema<Message>(
  {
    senderId: { type: mongoose.SchemaTypes.ObjectId, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: {
      createdAt: 'sentAt',
    },
  }
);

const ChatSchema = new Schema<Chat>(
  {
    jobSeekerUserId: { type: mongoose.SchemaTypes.ObjectId, required: true },
    employerUserId: { type: mongoose.SchemaTypes.ObjectId, required: true },
    messages: { type: [MessageSchema] },
  },
  { timestamps: true }
);

// https://www.mongodb.com/docs/manual/core/index-unique/
// https://mongoosejs.com/docs/guide.html#indexes
ChatSchema.index({ jobSeekerUserId: 1, employerUserId: 1 }, { unique: true });

const Chat = model('chat', ChatSchema);
const Message = model('message', MessageSchema);

const aggregateChat = (match: object) => {
  return Chat.aggregate([
    {
      $match: match
    },
    {
      $lookup: {
        from: 'users',
        localField: 'jobSeekerUserId',
        foreignField: '_id',
        as: 'jobSeekerUser',
      },
    },
    {
      $unwind: {
        path: '$jobSeekerUser',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'employerUserId',
        foreignField: '_id',
        as: 'employerUser',
      },
    },
    {
      $unwind: {
        path: '$employerUser',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'employerprofiles',
        localField: 'employerUserId',
        foreignField: 'userId',
        as: 'employerProfile',
      },
    },
    {
      $unwind: {
        path: '$employerProfile',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $addFields: {
        'employerUser.employerProfile': '$employerProfile',
      },
    },
    {
      $unset: 'employerProfile',
    },
  ]);
}

const getChats = (userId: string) => {
  return aggregateChat({
      $or: [
        { jobSeekerUserId: new mongoose.Types.ObjectId(userId) },
        { employerUserId: new mongoose.Types.ObjectId(userId) },
      ]
    },
  );
};

const getChat = (userId: string, id: string) => {
  return aggregateChat({
    _id: new mongoose.Types.ObjectId(id),
    $or: [
      { jobSeekerUserId: new mongoose.Types.ObjectId(userId) },
      { employerUserId: new mongoose.Types.ObjectId(userId) },
    ]
  }).then((res) => res[0])
}

const createChat = (payload: Chat) => {
  return Chat.findOneAndUpdate(
    {
      jobSeekerUserId: payload.jobSeekerUserId,
      employerUserId: payload.employerUserId,
    },
    { $set: payload },
    { upsert: true, new: true }
  );
};

const addMessage = (
  chatId: string,
  senderId: string,
  payload: Partial<Message>
) => {
  return Chat.findOneAndUpdate(
    { _id: new mongoose.Types.ObjectId(chatId) },
    { $push: { messages: { ...payload, senderId } } },
    { upsert: true, new: true }
  );
};

export { Chat, Message, getChats, getChat, createChat, addMessage };
