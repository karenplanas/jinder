import { verifyJwt } from '../utils/jwt-utils'
import express from 'express'

const authMiddleware = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeaders = req.headers.authorization;

  if (!authHeaders) {
    res.status(401);
    res.json({ error: 'Unauthorized'});
    return;
  }

  const token = authHeaders.split(' ')[1];
  const user = verifyJwt(token);

  if (!user) {
    res.status(401);
    res.json({ error: 'Unauthorized'});
    return;
  }

  req.user = user;
  await next();

}

export { authMiddleware }
