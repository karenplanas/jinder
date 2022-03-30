import clsx from "clsx";
import { useState } from "react";
import { JobOffer } from "../../Interfaces/JobOffer";
import { Card } from "../Card/Card";
import { JobHeader } from "./JobHeader";
import "./Job.css";

interface Props {
  jobOffer: JobOffer;
}

const Job: React.FC<Props> = ({ jobOffer }) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const toggleDetails = () => {
    setShowDetail((previousState) => !previousState);
  };

  return (
    <Card
      className={clsx("Job", { fullSize: showDetail })}
      onClick={toggleDetails}
    >
      <JobHeader name={jobOffer.companyname} size={jobOffer.companysize} />
      <div className="Job-content">
        <h3>{jobOffer.position}</h3>
        <p>
          {showDetail ? jobOffer.bio : `${jobOffer.bio?.substring(0, 220)}...`}
        </p>
        <div className="Job-text-with-label">
          <h4>Salary</h4> {jobOffer.salary}
        </div>
        <h4>{jobOffer.contract}</h4>
        <h4>{jobOffer.location}</h4>
      </div>
      {showDetail && (
        <>
          <p>{jobOffer.description}</p>
          <p>{jobOffer.skills}</p>
        </>
      )}
    </Card>
  );
};

export { Job };
