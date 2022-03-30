import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../contexts/UserContext';
import { JobOffer } from '../../Interfaces/JobOffer';
import { useAuthenticatedApiClient } from '../../services/authenticated-api-client';
import { AppLayout } from '../AppLayout/AppLayout';
import { Card } from '../Card/Card';
import { Bin } from '../icons/Bin';
import { NavTabs } from '../NavTabs/NavTabs';
import { removeJobOffer } from '../../services/api-client';
import { useNavigate } from 'react-router-dom';
import './JobOffersList.css';

const JobOffersList: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const apiClient = useAuthenticatedApiClient();
  const [jobOffers, setJobOffers] = useState<JobOffer[]>([]);

  const tabs = [
    { name: 'My job offers', endpoint: '/job-position/list' },
    { name: 'Create new job offer', endpoint: '/job-position/edit' },
  ];
  const getJobOffers = async () =>
    await apiClient.getJobOffersById(user!._id).then(({ data }) => {
      setJobOffers(data);
    });

  useEffect(() => {
    getJobOffers();
  }, []);

  const deleteJobOffer = (id: string) => {
    removeJobOffer(id);
    getJobOffers();
  };

  return (
    <AppLayout title="Jobs">
      <NavTabs tabs={tabs}></NavTabs>
      <div className="JobOffersList-container">
        {jobOffers.map((jobOffer) => {
          return (
            <Card className="jobOfferCard">
              <div className="Title">
                <h3>{jobOffer.position}</h3>
                <div className='binDelete'
                  onClick={() => {
                    deleteJobOffer(jobOffer._id);
                  }}
                >
                  <Bin></Bin>
                </div>
              </div>

              <div className="Description">
                <h4>{jobOffer.bio}</h4>
              </div>
            </Card>
          );
        })}
      </div>
    </AppLayout>
  );
};

export { JobOffersList };
