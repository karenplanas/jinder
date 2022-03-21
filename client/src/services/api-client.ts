import { setConstantValue } from "typescript";
import { JobOffer } from "../Interfaces/JobOffer";

const myHeaders = new Headers();

myHeaders.append(
  "Authorization",
  "Basic MTc2NzVkZDUtNzFiNS00YmJkLTg5YWQtOTU4OGY5YzZkOGZhIDo="
);

const fetchJobs = () => {
  return fetch(
    "https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london",
    {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    }
  ).then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

const postJobOffer = (jobOffer: JobOffer) => {
  return fetch("http://localhost:4000/newJobOffer", {
    method: "POST",
    headers: { "Content-type": " application/json " },
    body: JSON.stringify(jobOffer),
  });
};

const getJobs = (setState: any) => {
  return fetch("http://localhost:4000/JobOffers")
    .then((res) => res.json())
    .then((data) => setState(data));
};

export { postJobOffer, getJobs, fetchJobs };
