import { useUserContext } from '../contexts/UserContext';
import { Chat } from '../Interfaces/Chat';
import { JobOffer } from '../Interfaces/JobOffer';
import { JobSeekerProfile } from '../Interfaces/JobSeekerProfile';
import { Message } from '../Interfaces/Message';
import { UserJobOffer } from '../Interfaces/UserJobOffer';
import { performRequest } from './helpers';

export const useAuthenticatedApiClient = () => {
  const { user } = useUserContext();

  const updateJobSeekerProfile = (payload: Partial<JobSeekerProfile>) => {
    return performRequest({
      method: 'POST',
      path: '/job-seeker-profile',
      body: payload,
      token: user?.accessToken,
    });
  };

  const getJobOffers = (): Promise<{ data: JobOffer[] }> => {
    return performRequest({
      method: 'GET',
      path: '/job-postings',
      token: user?.accessToken,
    });
  };

  const likeJobOffer = (id: string): Promise<JobOffer> => {
    return performRequest({
      method: 'POST',
      path: `/job-postings/${id}/like`,
      token: user?.accessToken,
    });
  };

  const getLikedJobOffers = (): Promise<{ data: UserJobOffer[] }> => {
    return performRequest({
      method: 'GET',
      path: `/job-postings/liked`,
      token: user?.accessToken,
    });
  };

  const dislikeJobOffer = (id: string): Promise<JobOffer> => {
    return performRequest({
      method: 'POST',
      path: `/job-postings/${id}/dislike`,
      token: user?.accessToken,
    });
  };

  const getChats = (): Promise<Chat[]> => {
    return performRequest<{ data: Chat[]}>({
      method: 'GET',
      path: '/chats',
      token: user?.accessToken,
    }).then((value) => value.data)
  };

  const getChat = (id: string): Promise<Chat> => {
    return performRequest<{ data: Chat}>({
      method: 'GET',
      path: `/chats/${id}`,
      token: user?.accessToken,
    }).then((value) => value.data)
  };

  const postChat = (payload: Partial<Chat>): Promise<Chat> => {
    return performRequest<{ data: Chat}>({
      method: 'POST',
      path: '/chats',
      token: user?.accessToken,
      body: payload,
    }).then((value) => value.data)
  };

  const postMessage = (
    chatId: string,
    payload: Partial<Message>
  ): Promise<Chat> => {
    return performRequest<{ data: Chat}>({
      method: 'POST',
      path: `/chats/${chatId}/messages`,
      token: user?.accessToken,
      body: payload,
    }).then((value) => value.data)
  };

  const getJobSeekerProfile = (): Promise<JobSeekerProfile> => {
    return performRequest<{ data: JobSeekerProfile}>({
      method: 'GET',
      path: '/job-seeker-profile',
      token: user?.accessToken,
    }).then((value) => value.data)
  };

  return {
    dislikeJobOffer,
    getChat,
    getChats,
    getJobOffers,
    getLikedJobOffers,
    postChat,
    postMessage,
    likeJobOffer,
    updateJobSeekerProfile,
    getJobSeekerProfile
  };
};
