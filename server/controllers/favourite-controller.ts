import express from "express";
import { Favourite } from "../src/models/favouriteSchema";

export const postFavourite = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const favourite = new Favourite({
      companyname: req.body.companyname,
      companysize: req.body.companysize,
      position: req.body.position,
      bio: req.body.bio,
      role: req.body.role,
      level: req.body.level,
      description: req.body.description,
      languages: req.body.languages,
      education: req.body.education,
      experience: req.body.experience,
      location: req.body.location,
      contract: req.body.contract,
      salary: req.body.salary,
      messages: req.body.messages,
    });
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
