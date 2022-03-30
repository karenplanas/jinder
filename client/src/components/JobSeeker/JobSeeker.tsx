// @ts-nocheck
import clsx from "clsx";
import { useState } from "react";
import { JobSeekerProfile } from "../../Interfaces/JobSeekerProfile";
import { Card } from "../Card/Card";
import { Email } from "../icons/Email";
import { ImagePlaceHolder } from "../icons/ImagePlaceHolder";
import { Lupe } from "../icons/Lupe";
import { Skill } from "../icons/Skill";
import { Work } from "../icons/Work";
import { ImageHolder } from "../ImageHolder/ImageHolder";
import "./JobSeeker.css";

interface Props {
  jobSeeker: JobSeekerProfile;
}

const JobSeeker: React.FC<Props> = ({ jobSeeker }) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const toggleDetails = () => {
    setShowDetail((previousState) => !previousState);
  };

  const { email, firstName, lastName } = jobSeeker;
  const { experiences, lookingFor, skills } = jobSeeker.jobseekerUser;

  const capitalizeName = (firstName, lastName) =>
    firstName[0].toUpperCase() +
    firstName.substring(1) +
    " " +
    lastName[0].toUpperCase() +
    lastName.substring(1);

  return (
    <Card
      className={clsx("JobSeeker", { fullSize: showDetail })}
      onClick={toggleDetails}
    >
      <div className="JobSeeker-avatar-name">
        <ImageHolder>
          <ImagePlaceHolder />
        </ImageHolder>
        <h2 className="name">{capitalizeName(firstName, lastName)}</h2>
      </div>

      <div className="JobSeeker-section">
        <div className="JobSeeker-icon-with-label">
          <Work />
          <h3>Experience</h3>
        </div>

        <div className="JobSeeker-experiences">
          {experiences.map((experience, indx) => (
            <ul key={indx}>
              <li><span className="bold">{experience.title}</span> at {experience.companyName} </li>
              <li>({experience.location})</li>
              <li>From {experience.startDate} To {experience.endDate}</li>
            </ul>
          ))}
        </div>
      </div>

      <div className="JobSeeker-section">
        <div className="JobSeeker-icon-with-label">
          <Skill />
          <h3>Skills</h3>
        </div>        
        {skills.join(", ")}
      </div>      

      <div className="JobSeeker-section">
        {lookingFor && (
          <>
            <div className="JobSeeker-icon-with-label">
              <Lupe />
              <h3>Looking For</h3>
            </div>
            <div className="JobSeeker-looking">
              <span>{lookingFor.location}</span>
              <span>{lookingFor.position}</span>
              <span>{lookingFor.role}</span>
            </div>
          </>
        )}
      </div>

      <div className="JobSeeker-section">
        <div className=" JobSeeker-icon-with-label">
          <Email />
          <h4>{email}</h4>
        </div> 
      </div>

    </Card>
  );
};

export { JobSeeker };
