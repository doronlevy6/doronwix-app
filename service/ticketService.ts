import { Ticket } from "../model/ticket";
import fs from "fs";
import util from "util";

const readFile = util.promisify(fs.readFile);

export const getTicketData = async (): Promise<Ticket[]> => {
  const data = await readFile("./data.json", "utf-8");
  return JSON.parse(data);
};

export const searchTickets = async (query: string): Promise<Ticket[]> => {
  const data = await getTicketData();
  return data.filter((ticket) =>
    ticket.title.toLowerCase().includes(query.toLowerCase())
  );
};
