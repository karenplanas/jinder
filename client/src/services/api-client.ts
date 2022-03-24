import { JobOffer } from "../Interfaces/JobOffer";
import { Favourite } from "../Interfaces/favourite";
import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../services/firebase';
import { ICredentials } from "../Interfaces/ICredentials";

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

/* *** User *** */

const loginUser = async (credentials: ICredentials) => {
  return await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
}

const signInwithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider);
};

const signInwithGithub = () => {
  const githubProvider = new GithubAuthProvider();
  return signInWithPopup(auth, githubProvider);
};


export { 
  postJobOffer, 
  getJobs, 
  getFavourites, 
  postFavourite, 
  addApplied, 
  loginUser,
  signInwithGoogle,
  signInwithGithub
 };
