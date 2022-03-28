import express from 'express';
import * as Chat from '../models/ChatSchema';

const getChats = async (req: express.Request, res: express.Response) => {
  const response = await Chat.getChats();
  res.status(200);
  res.json({ data: response });
};

const postChat = async (req: express.Request, res: express.Response) => {
  const response = await Chat.createChat(req.body);
  res.status(200);
  res.json({ data: response });
};

export { getChats, postChat };
