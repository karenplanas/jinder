import express from 'express'

export const errorHandler = async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    next();
  } catch (e) {
    res.status(500);
    res.json({ error: "Internal server error" });
  }
}