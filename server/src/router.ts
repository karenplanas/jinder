import express from "express";
import * as favouritesController from "./controllers/favourite-controller";
import * as jobOfferController from "./controllers/JobOffer-controller";
import * as userController from "./controllers/user-controller";

const router = express.Router();
router.post("/users", userController.postUser);
router.get("/users/:id", userController.getUser);

router.post("/job-postings", jobOfferController.postJobOffer);
router.get("/job-postings", jobOfferController.getJobOffers);

router.post("/favourites", favouritesController.postFavourite);
router.get("/favourites", favouritesController.getFavourites);
router.put("/favourites/:id", favouritesController.editApplied);

export default router;
