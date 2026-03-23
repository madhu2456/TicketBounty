import { initialTickets } from "@/data";
import type { TicketType } from "@/features/ticket/types";

export const getTicket = async (
  ticketId: string,
): Promise<TicketType | null> => {
  const maybeTicket = initialTickets.find((ticket) => ticketId === ticket.id);

  // simulating API request with delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    resolve(maybeTicket || null);
  });
};
