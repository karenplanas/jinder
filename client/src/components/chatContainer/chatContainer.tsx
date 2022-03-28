import React from 'react';
import { Favourite } from '../../Interfaces/favourite';
import { Building } from '../icons/Building';
import './ChatContainer.css';

interface Props {
  data: Favourite;
}

const ChatContainer: React.FC<Props> = ({ data }) => {
  return (
    <div className=" chat_container_chat">
      {' '}
      <div className="company_logo_favourites">
        <Building />{' '}
      </div>
      <h6>{data.companyname}</h6>{' '}
    </div>
  );
};

export { ChatContainer };
