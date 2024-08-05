// import { UserButton } from "@clerk/nextjs";
// import * as React from "react";
// function DashboardPage() {
//   return (
//     // <div className="border-b-2 border-black">
//     //   <div className="flex justify-between items-center p-2">
//     //     <h1 className="font-semibold">Shift</h1>
//     // <UserButton />
//     //   </div>
//     // </div>
//     <nav className="flex items-center justify-between p-4 bg-gray-100">
//       <div className="text-lg font-semibold">Shift</div>
//       <div className="flex items-center space-x-4">
//         <UserButton />
//       </div>
//     </nav>
//   );
// }

// export default DashboardPage;

import Link from "next/link";
import {
  Bell,
  CircleUser,
  Coins,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  SquareChartGantt,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";
export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block max-w-[260px]">
        <div className="flex h-full min-h-screen min-w-[220px]  fixed flex-col gap-2 ">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Shift</span>
            </Link>
          </div>
          <div className="flex-1 w-full">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-y-3">
              <Link
                href="/dash"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary "
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="/dash/overview"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <SquareChartGantt className="h-4 w-4" />
                Overview
              </Link>
              <Link
                href="/dash/debt"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Coins className="h-4 w-4" />
                Debt analyzer
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Button size="sm" className="w-full">
              Help
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium p-2">
                <Link
                  href="/dash"
                  className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                >
                  <Home className="h-4 w-4" />
                  Home
                </Link>
                <Link
                  href="/dash/overview"
                  className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                >
                  <SquareChartGantt className="h-4 w-4" />
                  Overview
                </Link>
                <Link
                  href="/dash/debt"
                  className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                >
                  <Coins className="h-4 w-4" />
                  Debt analyzer
                </Link>
              </nav>
              <div className="mt-auto">
                <Button size="sm" className="w-full">
                  Help
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1"></div>
          <div>
            <UserButton />
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
