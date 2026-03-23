import { ticketPath } from "@/paths";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TICKET_ICONS } from "@/features/ticket/constants";
import type { TicketType } from "@/features/ticket/types";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type TicketItemPropsType = {
  ticket: TicketType;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemPropsType) => {
  const detailButton = (
    <Button variant="outline" asChild={true} size={"icon"}>
      <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  return (
    <div
      className={
        isDetail
          ? `w-full max-w-[580px] flex gap-x-1`
          : `w-full max-w-[420px] flex gap-x-1`
      }
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={
              isDetail
                ? `whitespace-break-spaces`
                : `line-clamp-3 whitespace-break-spaces`
            }
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      {isDetail ? null : (
        <div className="flex flex-col gap-y-1">{detailButton}</div>
      )}
    </div>
  );
};

export { TicketItem };
