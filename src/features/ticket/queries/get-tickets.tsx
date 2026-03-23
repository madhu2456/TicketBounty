import {initialTickets} from "@/data";
import type {TicketType} from "@/features/ticket/types";

export const getTickets = async (): Promise<TicketType[]> => {
    // simulating API request with delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return new Promise((resolve) => {
        resolve(initialTickets);
    });
};
