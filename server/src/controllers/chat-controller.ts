import express from 'express';
import * as Chat from '../models/ChatSchema';

const getChats = async (req: express.Request, res: express.Response) => {
  const response = await Chat.getChats(req.user._id);
  res.status(200);
  res.json({ data: response });
};

const getChat = async (req: express.Request, res: express.Response) => {
  const response = await Chat.getChat(req.user._id, req.params.id);
  res.status(200);
  res.json({ data: response });
};


const postChat = async (req: express.Request, res: express.Response) => {
  const response = await Chat.createChat(req.body);
  res.status(200);
  res.json({ data: response });
};

const postMessage = async (req: express.Request, res: express.Response) => {
  const response = await Chat.addMessage(req.params.id, req.user._id, req.body);
  res.status(200);
  res.json({ data: response });
};

export { getChat, getChats, postChat, postMessage };
