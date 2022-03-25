import express from "express";
import { Favourite } from "../models/favouriteSchema";

export const addMessages = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const modifyMessages = await Favourite.findByIdAndUpdate(req.params.id, {
      messages: req.body.messages,
    });
    res.send(modifyMessages).status(200);
    console.log(req.body);
  } catch (e) {
    res.status(500);
    res.json({ error: "Internal server error" });
  }
};
