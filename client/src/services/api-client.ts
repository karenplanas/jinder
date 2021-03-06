import { JobOffer } from '../Interfaces/JobOffer';
import { Favourite } from '../Interfaces/favourite';

const postFavourite = (favourite: Favourite, user: any) => {
  return fetch(`http://localhost:4000/users/${user._id}/favourites`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(favourite),
  });
};

const getFavourites = (setState: any, user: any) => {
  return fetch(`http://localhost:4000/users/${user._id}/favourites`)
    .then((res) => res.json())
    .then((data) => setState(data.data));
};

const addApplied = (favourite: Favourite, user: any) => {
  return fetch(
    `http://localhost:4000/users/${user._id}/favourites/${favourite._id}`,
    {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ applied: true }),
    }
  );
};

const deleteFavourite = (favourite: Favourite, user: any) => {
  return fetch(
    `http://localhost:4000/users/${user._id}/favourites/${favourite._id}`,
    {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(favourite),
    }
  );
};

const removeJobOffer = (id : string) => {
  return fetch(`http://localhost:4000/job-postings/${id}`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  });
};

const postJobOffer = (jobOffer: JobOffer) => {
  return fetch('http://localhost:4000/job-postings', {
    method: 'POST',
    headers: { 'Content-type': ' application/json ' },
    body: JSON.stringify(jobOffer),
  });
};

const getJobs = (setState: any) => {
  return fetch('http://localhost:4000/job-postings')
    .then((res) => res.json())
    .then((data) => {
      return setState(data.data);
    });
};

export {
  postJobOffer,
  getJobs,
  getFavourites,
  postFavourite,
  addApplied,
  removeJobOffer,
  deleteFavourite,
};
