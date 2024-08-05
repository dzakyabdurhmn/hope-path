import * as React from "react";
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
import { Button } from "@/components/ui/button";
import { GetDebt } from "@/lib/queries";
import { formatCurrency, formatDate } from "@/lib/utils";
import { DebtForm } from "./form";
import Analyze from "./analyze";

async function DashboardPage() {
  const debt = await GetDebt();
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-2">
        <div className="flex flex-col min-w-full">
          <div className="py-5 px-2">
            <h1 className="text-xl font-semibold">AI Debt Analyzer</h1>
            <p className="font-sans text-purple-500">
              Analyze your online gambling debt and payment history!
            </p>
          </div>
          <div className="flex justify-between mb-2">
            <div />
            <DebtForm />
          </div>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Note</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {debt.debt.map((debt) => (
                <TableRow key={debt.id}>
                  <TableCell className="font-medium">
                    {formatDate(debt.date.toDateString())}
                  </TableCell>
                  <TableCell>{formatCurrency(debt.amount)}</TableCell>

                  <TableCell>{debt.type}</TableCell>
                  <TableCell className="text-right">{debt.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">
                  {formatCurrency(debt.totalAmount)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>

        <Analyze data={JSON.stringify(debt.debt)} />
      </div>
    </div>
  );
}

export default DashboardPage;
