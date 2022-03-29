import express from 'express';
import * as favouritesController from './controllers/favourite-controller';
import * as jobOfferController from './controllers/JobOffer-controller';
import * as userController from './controllers/user-controller';
import * as jobSeekerProfileController from './controllers/JobSeekerProfile-controller';
import * as userJobOfferController from './controllers/UserJobOffer-controller';
import * as chatController from './controllers/chat-controller';
import { authMiddleware } from './middlewares/auth-middlware';

const router = express.Router();

router.post('/users', userController.postUser);
router.post('/users/login', userController.login);
router.post(
  '/job-seeker-profile',
  authMiddleware,
  jobSeekerProfileController.postJobSeekerProfile
);
router.get(
  '/job-seeker-profile',
  authMiddleware,
  jobSeekerProfileController.getJobSeekerProfile
);

router.post('/job-postings', jobOfferController.postJobOffer);
router.get('/job-postings', authMiddleware, jobOfferController.getJobOffers);
router.get(
  '/job-postings/liked',
  authMiddleware,
  userJobOfferController.getLikedJobOffer
);
router.post(
  '/job-postings/:id/like',
  authMiddleware,
  userJobOfferController.postUserJobOfferLike
);
router.post(
  '/job-postings/:id/dislike',
  authMiddleware,
  userJobOfferController.postUserJobOfferDislike
);
router.post(
  '/job-postings/:id/application',
  authMiddleware,
  userJobOfferController.postUserJobOfferApplication
);
router.delete('/job-postings/:id', jobOfferController.deleteJobOffer);

router.post('/users/:id/favourites', favouritesController.postFavourite);
router.get('/users/:id/favourites', favouritesController.getFavourites);
router.put('/users/:id/favourites/:id', favouritesController.editApplied);
router.delete(
  '/users/:id/favourites/:id',
  favouritesController.deleteFavourite
);

router.get('/chats', authMiddleware, chatController.getChats);
router.get('/chats/:id', authMiddleware, chatController.getChat);
router.post('/chats', authMiddleware, chatController.postChat);
router.post('/chats/:id/messages', authMiddleware, chatController.postMessage);

export default router;
