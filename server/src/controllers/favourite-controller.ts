import express from "express";
import { Favourite } from "../models/favouriteSchema";

export const postFavourite = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const favourite = new Favourite(req.body);
    await favourite.save();
    res.status(201);
    res.json({ data: favourite });
  } catch (e) {
    res.status(500);
    res.json({ error: "Internal server error" });
  }
};

export const getFavourites = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const favourites = await Favourite.find();
    res.status(200);
    res.json({ data: favourites });
  } catch (e) {
    res.status(500);
    res.json({ error: "Internal server error" });
  }
};