import { useUserContext } from "../contexts/UserContext"
import { JobSeekerProfile } from "../Interfaces/JobSeekerProfile"
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

  return {
    updateJobSeekerProfile
  }
}