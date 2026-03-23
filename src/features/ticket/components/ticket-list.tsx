import {TicketItem} from "@/features/ticket/components/ticket-item";
import {getTickets} from "@/features/ticket/queries/get-tickets";
import type {TicketType} from "@/features/ticket/types";

const TicketList = async () => {
    const tickets = await getTickets();
    return (
        <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
            {tickets.map((ticket: TicketType) => (
                <TicketItem key={ticket.id} ticket={ticket} isDetail={false}/>
            ))}
        </div>
    );
};

export {TicketList};
