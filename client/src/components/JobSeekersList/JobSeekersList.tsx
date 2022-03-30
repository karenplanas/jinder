import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import { JobSeeker } from '../../Interfaces/User';
import { useAuthenticatedApiClient } from '../../services/authenticated-api-client';
import { AppLayout } from '../AppLayout/AppLayout';
import { JobSeekerCard } from '../JobSeeker/JobSeekerCard';
import './JobSeekersList.css'

const JobSeekersList: React.FC = () => {
  const apiClient = useAuthenticatedApiClient()
  const [jobSeekers, setJobSeekers] = useState<JobSeeker[]>();

  useEffect(() => {
    apiClient.getJobSeekers().then((data) => setJobSeekers(data));
  }, []);

  return (
    <AppLayout title="Find the talents">
      <div className="JobSeekersList">
        {jobSeekers?.map((jobSeeker) => {
          return (
            <TinderCard
              className="JobSeekersList-card"
              key={jobSeeker._id}
              // onSwipe={(dir) => swiped(dir, jobSeeker)}
            >
              <JobSeekerCard jobSeeker={jobSeeker} />
            </TinderCard>
          );
        })}
      </div>
    </AppLayout>
  )
}

export { JobSeekersList }