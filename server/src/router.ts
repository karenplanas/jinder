import express from "express";
import * as favouritesController from "./controllers/favourite-controller";
import * as jobOfferController from "./controllers/JobOffer-controller";
import * as userController from "./controllers/user-controller";
import * as messageController from "./controllers/message-controller";

const router = express.Router();

router.post("/users", userController.postUser);
router.get("/users/:id", userController.getUser);

router.post("/job-postings", jobOfferController.postJobOffer);
router.get("/job-postings", jobOfferController.getJobOffers);
router.delete("/job-postings/:id", jobOfferController.deleteJobOffer);

router.post("/users/:id/favourites", favouritesController.postFavourite);
router.get("/users/:id/favourites", favouritesController.getFavourites);
router.put("/users/:id/favourites/:id", favouritesController.editApplied);
router.delete(
  "/users/:id/favourites/:id",
  favouritesController.deleteFavourite
);

router.put("/messages", messageController.addMessages);

export default router;
