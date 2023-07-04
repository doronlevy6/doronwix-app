import { Request, Response } from "express";
import { getTicketData, searchTickets } from "../service/ticketService";

export const getTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await getTicketData();
    res.json(tickets);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const searchTicket = async (req: Request, res: Response) => {
  if (typeof req.query.title !== "string") {
    return res
      .status(400)
      .json({ message: "'title' query parameter should be a string" });
  }
  const query = req.query.title as string;
  if (!query) {
    return res.status(400).json({ message: "Missing 'title' query parameter" });
  }
  try {
    const tickets = await searchTickets(query);
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
