"use client";
import { addpayment, addexpense } from "@/action/debt";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";

export function DebtForm() {
  const [state, formAction] = useFormState(addpayment, null);
  const [state_expense, expense_action] = useFormState(addexpense, null);

  return (
    <div className="flex gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add Payment</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          {JSON.stringify(state?.Error)}
          <form action={formAction}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Ammount
                </Label>
                <Input
                  id="name"
                  name="amount"
                  placeholder="amount"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Type
                </Label>
                <Input name="type" placeholder="type" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Type
                </Label>
                <Input name="note" placeholder="note" className="col-span-3" />
              </div>
            </div>
            <DialogClose className="right-0 ml-auto flex">
              <Button className="w-full" type="submit">
                Save changes
              </Button>
            </DialogClose>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Expense</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Relapse</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          {JSON.stringify(state_expense?.error)}
          <form action={expense_action}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Ammount
                </Label>
                <Input
                  id="name"
                  name="amount"
                  placeholder="amount"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Type
                </Label>
                <Input name="type" placeholder="type" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Note
                </Label>
                <Input name="note" placeholder="note" className="col-span-3" />
              </div>
            </div>
            <DialogClose className="right-0 ml-auto flex">
              <Button className="w-full" type="submit">
                Save changes
              </Button>
            </DialogClose>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
