import express from 'express';
import * as jobOfferController from './controllers/JobOffer-controller';

const router = express.Router();

router.post('/newJobOffer', jobOfferController.postJobOffer);
router.get('/JobOffers', jobOfferController.getJobOffers);

export default router;
