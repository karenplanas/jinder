// @ts-nocheck
import clsx from "clsx";
import { useState } from "react";
import { JobSeekerProfile } from "../../Interfaces/JobSeekerProfile";
import { Card } from "../Card/Card";

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
  console.log(email, firstName, lastName);

  const { experiences, lookingFor, skills } = jobSeeker.jobseekerUser;
  console.log(
    jobSeeker.jobseekerUser.experiences.map((experience) =>
      console.log("experience", experience)
    )
  );
  console.log({ experiences, lookingFor, skills });
  console.log("jobseekerUser", jobSeeker.jobseekerUser);

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
        {/* name */}
        <h3>Name: {capitalizeName(firstName, lastName)}</h3>
        {/* email */}
        <h3>Email: {email}</h3>
        {/* experience */}
        <h3>Experience </h3>
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
        {/* Looking for */}
        <h3>Looking For</h3>
        <p>{lookingFor.location}</p>
        <p>{lookingFor.position}</p>
        <p>{lookingFor.role}</p>
        {/* skills */}
        <h3>Skills</h3>
        {skills.map((skill, indx) => (
          <ul key={indx}>
            <li>{skill}</li>
          </ul>
        ))}
      </div>
    </Card>
  );
};

export { JobSeeker };
