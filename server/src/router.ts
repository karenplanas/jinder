import express from "express";
import * as jobOfferController from "./controllers/JobOffer-controller";
import * as favouritesController from "./controllers/favourite-controller";

const router = express.Router();

// https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/
// POST /job-postings
// GET /job-postings

router.post("/job-postings", jobOfferController.postJobOffer);
router.get("/job-postings", jobOfferController.getJobOffers);

router.post("/favourites", favouritesController.postFavourite);
router.get("/favourites", favouritesController.getFavourites);
router.put("/favourites/:id", favouritesController.editApplied);

export default router;
