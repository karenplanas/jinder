// @ts-nocheck
import clsx from "clsx";
import { useState } from "react";
import { JobSeekerProfile } from "../../Interfaces/JobSeekerProfile";
import { Card } from "../Card/Card";
import { Email } from "../icons/Email";
import { Skill } from "../icons/Skill";
import { Work } from "../icons/Work";
import "./JobSeeker.css";

// import "./Job.css";

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
      <div>
        <h3 className="name">{capitalizeName(firstName, lastName)}</h3>
        <div>
          <h3>
            <Work />
            Experience{" "}
          </h3>
          {experiences.map((experience, indx) => (
            <ul key={indx}>
              <li>{experience.title}</li>
              <li>
                {experience.companyName}({experience.location})
              </li>
              <li>
                {experience.startDate}-{experience.endDate}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <h3>
        {" "}
        <Skill />
        Skills
      </h3>
      {skills.join(", ")}

      {lookingFor && (
        <div>
          <h3>Looking For</h3>
          <span>{lookingFor.location} </span>
          <span>{lookingFor.position} </span>
          <span>{lookingFor.role}</span>
        </div>
      )}
      <p>
        <Email />
        {email}
      </p>
    </Card>
  );
};

export { JobSeeker };
