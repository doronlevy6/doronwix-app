import express from "express";
import { getTickets } from "./controller/ticketController";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/tickets", getTickets);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
