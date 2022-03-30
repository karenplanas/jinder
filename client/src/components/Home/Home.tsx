import React from 'react'
import { useUserContext } from '../../contexts/UserContext'
import { JobList } from '../JobList/JobList';
import { JobSeekersList } from '../JobSeekersList/JobSeekersList';

const Home: React.FC = () => {
  const { user } = useUserContext();
  return (
    <>
      {
        user?.type === 'jobseeker' ?
        <JobList /> :
        <JobSeekersList />
      }
    </>
  )
}

export { Home }