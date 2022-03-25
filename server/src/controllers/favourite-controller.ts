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
    console.log(e);
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

export const editApplied = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const modifyFavourite = await Favourite.findByIdAndUpdate(req.params.id, {
      applied: req.body.applied,
    });
    res.send(modifyFavourite).status(200);
    console.log(req.body);
  } catch (e) {
    res.status(500);
    res.json({ error: "Internal server error" });
  }
};

export const deleteFavourite = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.log(req.params.id);
    const deleteFavourite = await Favourite.findByIdAndDelete(req.params.id);
    res.send(deleteFavourite).status(200);
  } catch (e) {
    res.status(500);
    res.json({ error: "Internal server error" });
  }
};
