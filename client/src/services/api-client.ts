import { JobOffer } from "../Interfaces/JobOffer";
import { Favourite } from "../Interfaces/favourite";

const postFavourite = (favourite: Favourite) => {
  return fetch("http://localhost:4000/favourites", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(favourite),
  });
};

const getFavourites = (setState: any) => {
  return fetch("http://localhost:4000/favourites")
    .then((res) => res.json())
    .then((data) => setState(data.data));
};

const addApplied = (favourite: Favourite) => {
  return fetch(`http://localhost:4000/favourites/${favourite._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ applied: true }),
  });
};

const postJobOffer = (jobOffer: JobOffer) => {
  return fetch("http://localhost:4000/job-postings", {
    method: "POST",
    headers: { "Content-type": " application/json " },
    body: JSON.stringify(jobOffer),
  });
};

const getJobs = (setState: any) => {
  return fetch("http://localhost:4000/job-postings")
    .then((res) => res.json())
    .then((data) => setState(data.data));
};

export { postJobOffer, getJobs, getFavourites, postFavourite, addApplied };
