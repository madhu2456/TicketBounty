import Link from "next/link";
import { homePath, ticketsPath } from "@/paths";
import { Button } from "@/components/ui/button";
import { LucideKanban } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

const Header = () => {
  return (
    <nav
      className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b
            bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between"
    >
      <div className="flex align-items gap-x-2">
        <Button asChild={true} variant="ghost">
          <Link href={homePath()} className="text-lg font-bold">
            <LucideKanban />
            <h1 className="text-lg font-semibold ml-2">TicketBounty</h1>
          </Link>
        </Button>
      </div>
      <div className="flex align-items gap-x-2">
        <ThemeSwitcher />
        <Button asChild={true} variant="default">
          <Link href={ticketsPath()}>Tickets</Link>
        </Button>
      </div>
    </nav>
  );
};

export { Header };
