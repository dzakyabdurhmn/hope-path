"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { prisma as db } from "@/lib/prisma";
import { GetUser } from "@/lib/queries";

const ContactSchema = z.object({
  id: z.string(),
  note: z.string().min(11),
});

export const completeTask = async (prevState: any, formData: FormData) => {
  const user = await GetUser();

  if (!user) {
    return { message: "User not found" };
  }

  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await db.usertask.create({
      data: {
        taskId: Number(validatedFields.data.id),
        note: validatedFields.data.note,
        userId: user.id, // Assuming user.id is a number
      },
    });
  } catch (error) {
    console.error("Error creating user task:", error);
    return { message: "Try again" };
  }

  revalidatePath("/dash/overview");
};
