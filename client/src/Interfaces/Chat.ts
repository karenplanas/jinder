import { Message } from "./Message"
export interface Chat {
  jobSeekerUserId: string
  employerUserId: string
  messages: Message[]
}