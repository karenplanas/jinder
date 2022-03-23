import express from "express";
import * as jobOfferController from "../controllers/JobOffer-controller";
import * as favourtieController from "../controllers/favourite-controller";

const router = express.Router();

router.post("/newJobOffer", jobOfferController.postJobOffer);
router.get("/JobOffers", jobOfferController.getJobOffers);

router.post("/newFavourite", favourtieController.postFavourite);
router.get("/getFavourites", favourtieController.getFavourites);

export default router;
