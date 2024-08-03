import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
async function DashboardPage() {
  const tasks = await db.task.findMany();

  const compleate_task = await db.dailytask.findMany({
    where: {
      userId: "sss",
    },
  });

  return (
    <>
      <div className="flex flex-wrap  mt-5">
        <div className="w-full flex sm:w-1/2 lg:w-1/2 px-2 mb-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Weekly Point Count</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="text-3xl font-bold">21pt</h1>
            </CardContent>
          </Card>
        </div>
        <div className="w-full flex sm:w-1/2 lg:w-1/2 px-3 mb-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Completed Task</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="text-3xl font-bold">5/8</h1>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-3 p-2 w-full">
          {tasks.map((t) => (
            <Card className="w-full hover:bg-zinc-200 duration-700 hover:cursor-pointer">
              <CardContent className="p-5  flex justify-between items-center">
                <div className="text-start">
                  <h1 className="text-lg font-semibold">{t.task_poin} Poin</h1>
                  <h1>{t.task_name}</h1>
                </div>
                <div>
                  <CircleCheckBig />
                </div>
              </CardContent>
            </Card>
          ))}

          {tasks.map((t) => (
            <Card className="w-full hover:bg-zinc-200 duration-700 hover:cursor-pointer">
              <CardContent className="p-5  flex justify-between items-center">
                <div className="text-start">
                  <h1 className="text-lg font-semibold">{t.task_poin} Poin</h1>
                  <h1>{t.task_name}</h1>
                </div>
                <div>
                  <CircleCheckBig />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
