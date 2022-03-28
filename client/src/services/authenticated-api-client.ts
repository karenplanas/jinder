import { useUserContext } from "../contexts/UserContext"
import { Chat } from "../Interfaces/Chat"
import { JobOffer } from "../Interfaces/JobOffer"
import { JobSeekerProfile } from "../Interfaces/JobSeekerProfile"
import { Message } from "../Interfaces/Message"
import { UserJobOffer } from "../Interfaces/UserJobOffer"
import { performRequest } from "./helpers"

export const useAuthenticatedApiClient = () => {
  const { user } = useUserContext()

  const updateJobSeekerProfile = (payload: Partial<JobSeekerProfile>) => {
    return performRequest({
      method: 'POST',
      path: '/job-seeker-profile',
      body: payload,
      token: user?.accessToken
    })
  }

  const getJobOffers = (): Promise<{ data: JobOffer[] }> => {
    return performRequest({
      method: 'GET',
      path: '/job-postings',
      token: user?.accessToken
    })
  }

  const likeJobOffer = (id: string): Promise<JobOffer> => {
    return performRequest({
      method: 'POST',
      path: `/job-postings/${id}/like`,
      token: user?.accessToken
    })
  }


  const getLikedJobOffers = (): Promise<{ data: UserJobOffer[] }> => {
    return performRequest({
      method: 'GET',
      path: `/job-postings/liked`,
      token: user?.accessToken
    })
  }

  const dislikeJobOffer = (id: string): Promise<JobOffer> => {
    return performRequest({
      method: 'POST',
      path: `/job-postings/${id}/dislike`,
      token: user?.accessToken
    })
  }

  const getChats = (): Promise<Chat[]> => {
    return performRequest({
      method: 'GET',
      path: '/chats',
      token: user?.accessToken
    })
  }

  const postChat = (payload: Partial<Chat>): Promise<Chat> => {
    return performRequest({
      method: 'POST',
      path: '/chats',
      token: user?.accessToken
    })
  }

  const postMessage = (chatId: string, payload: Partial<Message>): Promise<Chat> => {
    return performRequest({
      method: 'POST',
      path: `/chats/${chatId}/messages`,
      token: user?.accessToken
    })
  }

  return {
    dislikeJobOffer,
    getChats,
    postChat,
    postMessage,
    getJobOffers,
    getLikedJobOffers,
    likeJobOffer,
    updateJobSeekerProfile,
  }
}