import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3005;

app.use(cors());
// app.use(cors({ origin: "http://localhost:5173" }));

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com '/artists' e '/songs'");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {});
