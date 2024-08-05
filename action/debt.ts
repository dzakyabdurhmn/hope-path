"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { prisma as db } from "@/lib/prisma";
import { GetUser } from "@/lib/queries";

const DebtSchema = z.object({
  amount: z.string(),
  type: z.string().min(5),
  note: z.string().min(10),
});

export const addpayment = async (prevState: any, formData: FormData) => {
  const user = await GetUser();

  if (!user) {
    return { message: "User not found" };
  }

  const validatedFields = DebtSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await db.debt.create({
      data: {
        amount: Number(validatedFields.data.amount),
        type: validatedFields.data.type,
        note: validatedFields.data.note,
        userId: user.id, // Assuming user.id is a number
      },
    });
  } catch (error) {
    console.error("Error paying debt:", error);
    return { message: "Try again" };
  }

  revalidatePath("/dash/debt");
};

export const addexpense = async (prevState: any, formData: FormData) => {
  const user = await GetUser();

  if (!user) {
    return { message: "User not found" };
  }

  const validatedFields = DebtSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  let amount = Number(validatedFields.data.amount);
  if (amount > 0) {
    amount = -amount;
  }

  try {
    await db.debt.create({
      data: {
        amount: -validatedFields.data.amount, // Ensure the amount is negative for expenses
        type: validatedFields.data.type,
        note: validatedFields.data.note,
        userId: user.id, // Assuming user.id is a number
      },
    });
  } catch (error) {
    console.error("Error recording expense:", error);
    return { message: "Try again" };
  }

  // Revalidate the cache or re-fetch the data for the specified path
  revalidatePath("/dash/debt");

  return { message: "Expense added successfully" };
};
