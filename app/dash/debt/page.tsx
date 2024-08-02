import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheckBig, MapPinIcon } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

function DashboardPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-2">
        <div className="flex flex-col min-w-full">
          <div className="py-5">
            <h1 className="text-xl font-semibold">AI Debt Analyzer</h1>
            <p className="font-sans text-purple-500">
              Analyze your online gambling debt and payment history!
            </p>
          </div>
          <div className="flex justify-between mb-2">
            <div />
            <div className="flex gap-4">
              <Button className="" variant="destructive" size="sm">
                Add Payment
              </Button>

              <Button className="" variant="outline" size="sm">
                Add Relapse
              </Button>
            </div>
          </div>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Note</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        <Button className="rounded-full bg-purple-500">
          Generate AI Analysis
        </Button>
      </div>
    </div>
  );
}

export default DashboardPage;
