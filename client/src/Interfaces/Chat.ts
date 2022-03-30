import { Message } from './Message';
export interface Chat {
  _id: string
  employerUser: {
    email: string
    employerProfile: { name: string; userId: string }
  }
  jobSeekerUser : {
    email: string
    externalId: string
    firstName: string
    lastName: string
  }
  jobSeekerUserId: string
  employerUserId: string
  messages: Message[]
}
