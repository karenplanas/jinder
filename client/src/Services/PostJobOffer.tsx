import { setConstantValue } from "typescript";
import { JobOffer } from "../Interfaces/JobOffer";

const postJobOffer = (jobOffer: JobOffer) => {
  fetch("http://localhost:4000/newJobOffer", {
    method: "POST",
    headers: { "Content-type": " application/json " },
    body: JSON.stringify(jobOffer),
  });
};

const getJobs = (setState: any) => {
  fetch("http://localhost:4000/JobOffers")
    .then((res) => res.json())
    .then((data) => setState(data));
};

export { postJobOffer, getJobs };
