import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const __dirname = path.resolve();

const app = express();
const PORT = 3005;

app.use(cors());
// app.use(cors({ origin: "http://localhost:5173" }));

app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com '/artists' e '/songs'");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dis")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dis/index.html"));
});
app.listen(PORT, () => {});
