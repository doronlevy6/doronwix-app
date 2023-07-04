import { Request, Response } from "express";
import { getTicketData } from "../service/ticketService";

export const getTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await getTicketData();
    res.json(tickets);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
