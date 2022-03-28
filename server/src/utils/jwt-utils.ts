import jwt from 'jsonwebtoken'
import { User } from '../models/User';

const { SECRET_KEY } = process.env;

const signJwt = (payload: object) => jwt.sign({ ...payload }, SECRET_KEY);

const generateJwt = <T extends object>(user: T): T & { accessToken: string } => {
  const accessToken = signJwt(user);
  return { ...user, accessToken };
};

const verifyJwt = (token: string): User => jwt.verify(token, SECRET_KEY) as User;

export { signJwt, verifyJwt, generateJwt };
