import { JobOffer } from '../Interfaces/JobOffer';

const postJobOffer = (jobOffer: JobOffer) => {
  fetch('http://localhost:4000/newJobOffer', {
    method: 'POST',
    headers: { 'Content-type': ' application/json ' },
    body: JSON.stringify(jobOffer),
  });
};

export { postJobOffer };
