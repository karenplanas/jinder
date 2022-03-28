import { timeStamp } from "console";
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

interface Chat {
  jobSeekerUserId : mongoose.Types.ObjectId
  employerUserId: mongoose.Types.ObjectId
  messages : Message[]
}

interface Message {
  senderId: mongoose.Types.ObjectId
  content: string
  sentAt: Date
}

const MessageSchema = new Schema<Message>({
  senderId: { type: mongoose.SchemaTypes.ObjectId},
  content: { type: String },
  sentAt: { type: mongoose.SchemaTypes.Date}
  },
  { timestamps: true }
)

const ChatSchema = new Schema<Chat>({
  jobSeekerUserId: { type: mongoose.SchemaTypes.ObjectId },
  employerUserId: { type: mongoose.SchemaTypes.ObjectId },
  messages: { type: [MessageSchema]}
})

const Chat = model('chat', ChatSchema)
const Message = model('message', MessageSchema)

const getChats = () => {
  return Chat.find()
}

const createChat = (
  payload: Chat
  ) => {
    return Chat.findOneAndUpdate(
      { jobSeekerUserId : payload.jobSeekerUserId,  employerUserId : payload.employerUserId },
      { $set: payload },
      { upsert: true }
    )
}

export { Chat, Message, getChats, createChat }
