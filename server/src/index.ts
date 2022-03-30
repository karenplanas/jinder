import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import router from "./router";
import * as db from "./models/db";
import { errorHandler } from "./middlewares/error-handler";
import http from "http";
import { Server } from "socket.io";
import { roomHandler } from "./RoomHandler/RoomHandler";

const app = express();
const PORT = 4000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("user is connected");
  roomHandler(socket);
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.use(errorHandler);
app.use(cors());
app.use(express.json());
app.use(router);

server.listen(PORT, async () => {
  console.log("listening on server");
  await db.connect();
});

// app.listen(PORT, async () => {
//   console.log(`Server listening on port ${PORT}`);
//   await db.connect();
// });
