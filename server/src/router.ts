import express from 'express';
import * as favouritesController from './controllers/favourite-controller';
import * as jobOfferController from './controllers/JobOffer-controller';
import * as userController from './controllers/user-controller';
import * as jobSeekerProfileController from './controllers/jobSeekerProfile-controller';
import * as userJobOfferController from './controllers/UserJobOffer-controller';
import * as chatController from './controllers/chat-controller';
import * as employerProfileController from './controllers/employerProfile-controller';
import * as jobSeekerController from "./controllers/JobSeeker-controller";
import { authMiddleware } from './middlewares/auth-middlware';

const router = express.Router();

router.post('/users', userController.postUser);
router.post('/users/login', userController.login);
router.post('/job-seeker-profile', authMiddleware, jobSeekerProfileController.postJobSeekerProfile);
router.get('/job-seeker-profile', authMiddleware, jobSeekerProfileController.getJobSeekerProfile);
router.post('/employer-profile', authMiddleware, employerProfileController.postEmployerProfile);
router.get('/employer-profile', authMiddleware, employerProfileController.getEmployerProfile);

router.get('/job-seekers', userController.getJobSeekers)

router.get('/user-job-postings/liked', authMiddleware, userJobOfferController.getLikedJobOffer);
router.post('/job-postings', jobOfferController.postJobOffer);
router.get('/job-postings', authMiddleware, jobOfferController.getJobOffers);
router.get('/job-postings/:id', authMiddleware, jobOfferController.getJobOffersById);
router.post('/job-postings/:id/like', authMiddleware, userJobOfferController.postUserJobOfferLike);
router.post('/job-postings/:id/dislike', authMiddleware, userJobOfferController.postUserJobOfferDislike);
router.post('/job-postings/:id/application', authMiddleware, userJobOfferController.postUserJobOfferApplication);
router.delete('/job-postings/:id', jobOfferController.deleteJobOffer);

router.post('/users/:id/favourites', favouritesController.postFavourite);
router.get('/users/:id/favourites', favouritesController.getFavourites);
router.put('/users/:id/favourites/:id', favouritesController.editApplied);
// router.delete('/users/:id/favourites/:id', favouritesController.deleteFavourite);

router.get("/chats", authMiddleware, chatController.getChats);
router.get("/chats/:id", authMiddleware, chatController.getChat);
router.post("/chats", authMiddleware, chatController.postChat);
router.post("/chats/:id/messages", authMiddleware, chatController.postMessage);

router.get("/jobseekers", authMiddleware, jobSeekerController.getJobSeeker);

export default router;
