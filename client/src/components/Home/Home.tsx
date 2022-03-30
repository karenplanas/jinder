import React from 'react'
import { useUserContext } from '../../contexts/UserContext'
import { JobList } from '../JobList/JobList';
import { JobSeekerList } from '../JobSeekerList/JobSeekerList';

const Home: React.FC = () => {
  const { user } = useUserContext();
  return (
    <>
      {
        user?.type === 'jobseeker' ?
        <JobList /> :
        <JobSeekerList />
      }
    </>
  )
}

export { Home }