import React from "react";
import { Favourite } from "../../Interfaces/favourite";
import { Building } from "../icons/Building";
import "./ChatContainer.css";

interface Props {
  data: Favourite;
}

const ChatContainer: React.FC<Props> = ({ data }) => {
  return (
    <div className=" chat_container">
      {" "}
      <div className="company_logo_favourites">
        <Building />{" "}
      </div>
      <p>{data.companyname}</p>{" "}
    </div>
  );
};

export { ChatContainer };
