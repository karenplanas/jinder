import React, { useState } from 'react';
import { Building } from '../icons/Building';
import { Button } from '../Button/Button';
import { ApplyToJob } from '../ApplyToJob/ApplyToJob';
import { Favourite } from '../../Interfaces/favourite';
// import { Job } from '../Job/Job';
import { useAuthenticatedApiClient } from '../../services/authenticated-api-client';
import { ChatIcon } from '../icons/ChatIcon';
import { useUserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { Bin } from '../icons/Bin';
import { ImageHolder } from '../ImageHolder/ImageHolder';
import { Card } from '../Card/Card';
import './FavouriteItem.css';

interface Props {
  data: Favourite;
  refresh: () => Promise<void>;
}

const FavouriteItem: React.FC<Props> = ({ data, refresh }) => {
  const navigate = useNavigate();
  const [cardActive, setCardActive] = useState(false);
  const [popupActive, setPopupActive] = useState(false);
  const [applied, setApplied] = useState(false);
  const { user } = useUserContext();
  const apiClient = useAuthenticatedApiClient();
  const employerUserId = data.employerUserId;
  const jobSeekerUserId = user?._id;
  
  const createChat = async () => {
    const chat = await apiClient.postChat({ jobSeekerUserId, employerUserId });
    navigate(`/chatRoom/${chat._id}`);
  };

  if (data.applied === true && applied === false) setApplied(true);

  const toggleFunction = () => {
    if (popupActive === true) {
      setPopupActive(false);
    } else {
      setPopupActive(true);
    }
  };

  const showCard = () => {
    if (cardActive === false) setCardActive(true);
    else setCardActive(false);
  };

  const removeFavourite = () => {
    apiClient.dislikeJobOffer(data._id);
    refresh();
  };
  
  if (!data) {
    return <p>Loading</p>;
  }

  return (
      <Card className='FavouriteItem-card'>
        <div onClick={removeFavourite} className="rubbishBin FavouriteItem-Bin">
          <div className='FavouriteItem-Bin-Absolute'><Bin /></div>
        </div>
        <div onClick={showCard} className="showCard_div">
          <div className="FavouriteItem-card-top">
            <ImageHolder>
              <Building />
            </ImageHolder>
            <div className='FavouriteItem-text'>
              <p>{data.companyname}</p>
              <h4>{data.level}</h4>
            </div>
          </div>
          { cardActive && (
            <div className="FavouriteItem-expanded">
              <p>
                {data.bio}
              </p>
              <div className="Job-text-with-label">
                <h4>Salary</h4> {data.salary}
              </div>
              <h4>{data.contract}</h4>
              <h4>{data.location}</h4>
              <p>{data.description}</p>
              <div className="Job-text-with-label">
                <h4>Skills</h4> {data.skills.join(', ')}
              </div>
            </div>
          )}
        </div>
        <div className='FavouriteItem-text-Apply-Chat'>
          <div>
            <Button
              disabled={applied}
              className="mini"
              text="Apply"
              onClick={toggleFunction}
            ></Button>
          </div>

            <div className="chatIcon" onClick={createChat}>
              <ChatIcon />
            </div>
        </div>

        {popupActive ? (
          <div className="FavouriteItem-modal">
            <ApplyToJob
              setState={setPopupActive}
              setApply={setApplied}
              data={data}
            />
          </div>
        ) : (
          <div className="hidden"></div>
        )}

        {/* {cardActive ? (
          <div className="job_card_container" onClick={showCard}>
            <Job jobOffer={data}>
              <Button
                disabled={applied}
                className="list"
                text="Apply"
                onClick={toggleFunction}
              ></Button>
            </Job>
          </div>
        ) : (
          ''
        )} */}
    </Card>
  );
};

export { FavouriteItem };
