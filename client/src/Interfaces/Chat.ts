import { Message } from './Message';
export interface Chat {
  _id: string;
  employerUser: {
    email: string;
    employerProfile: { name: string; userId: string };
  };
  jobSeekerUserId: string;
  employerUserId: string;
  messages: Message[];
}
