import { setConstantValue } from "typescript";
import { JobOffer } from "../Interfaces/JobOffer";
import { Favourite } from "../Interfaces/favourite";

const postFavourite = (favourite: Favourite) => {
  return fetch("http://localhost:4000/newFavourite", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(favourite),
  });
};

const getFavourites = (setState: any) => {
  return fetch("http://localhost:4000/getFavourites")
    .then((res) => res.json())
    .then((data) => setState(data.data));
};

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
    .then((data) => setState(data.data));
};

export { postJobOffer, getJobs, getFavourites, postFavourite };
