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

  console.log(jobSeeker);
  return (
    <Card
      className={clsx("JobSeeker", { fullSize: showDetail })}
      onClick={toggleDetails}
    >
      {/* experiences */}
      <h2>Experience</h2>
      <p>{jobSeeker.experiences[0].title}</p>
      <p>{jobSeeker.experiences[0].companyName}</p>
      <p>
        {jobSeeker.experiences[0].startDate}-{jobSeeker.experiences[0].endDate}
      </p>
      {/* skills */}
      <h2>Skills</h2>
      <p>{jobSeeker.skills.map((skill) => skill)}</p>
    </Card>
  );
};

export { JobSeeker };
