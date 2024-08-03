import { auth } from "@clerk/nextjs/server";
import { prisma as db } from "./prisma";

export async function GetUser() {
  const { userId } = auth();

  const user = await db.user.findFirst({
    where: {
      clerkUserId: userId,
    },
  });

  return user;
}

export async function GetFinisedTasks() {
  const user = await GetUser();

  const finishedTasks = await db.userTask.findMany({
    where: {
      userId: user?.id as any,
    },
    select: {
      taskId: true,
    },
  });

  return finishedTasks.map((task) => task.taskId);
}

export async function GetTask() {
  const finishedTaskIds = await GetFinisedTasks();

  const tasks = await db.task.findMany({
    where: {
      id: {
        notIn: finishedTaskIds,
      },
    },
  });

  return tasks;
}

export async function GetFinisedTask() {
  const user = await GetUser();

  const finishedTasks = await db.userTask.findMany({
    where: {
      userId: user?.id as any,
    },
    include: {
      task: {
        select: {
          name: true,
          points: true,
        },
      },
    },
  });

  const tasksWithDetails = finishedTasks.map((userTask) => ({
    taskId: userTask.taskId,
    name: userTask.task.name,
    points: userTask.task.points,
    note: userTask.note,
  }));

  return tasksWithDetails;
}

export async function getTotalTaskCount() {
  try {
    const totalTasks = await db.task.count();
    return totalTasks;
  } catch (error) {
    console.error("Error fetching total task count:", error);
    throw new Error("Failed to fetch total task count");
  }
}

export async function GetDebt() {
  const user = await GetUser();

  const finishedTasks = await db.debt.findMany({
    where: {
      userId: user?.id as any,
    },
  });

  return finishedTasks;
}
