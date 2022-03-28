import { timeStamp } from 'console';
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
    }
  }
);

const ChatSchema = new Schema<Chat>({
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

const getChats = () => {
  return Chat.find();
};

const createChat = (payload: Chat) => {
  return Chat.findOneAndUpdate(
    {
      jobSeekerUserId: payload.jobSeekerUserId,
      employerUserId: payload.employerUserId,
    },
    { $set: payload },
    { upsert: true }
  );
};

const addMessage = (chatId: string, senderId: string, payload: Partial<Message> ) => {
  return Chat.findOneAndUpdate(
    { _id: new mongoose.Types.ObjectId(chatId) },
    { $push: { messages: { ...payload, senderId } } },
    { upsert: true, new: true }
  );
};

export { Chat, Message, getChats, createChat, addMessage };
