import express from 'express';
import * as jobOfferController from './controllers/JobOffer-controller';

const router = express.Router();

// https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/
// POST /job-postings
// GET /job-postings
router.post('/newJobOffer', jobOfferController.postJobOffer);
router.get('/JobOffers', jobOfferController.getJobOffers);



export default router;
