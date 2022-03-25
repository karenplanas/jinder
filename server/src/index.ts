import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config();
import router from './router';
import * as db from './models/db';
import { errorHandler } from './middlewares/error-handler';
const app = express();
const PORT = 4000;

app.use(errorHandler);
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
  await db.connect();
});
