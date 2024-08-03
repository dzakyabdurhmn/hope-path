import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";
import { GetFinisedTask, GetTask, getTotalTaskCount } from "@/lib/queries";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Form from "./form";

async function DashboardPage() {
  const tasks = await GetTask();
  const finishedTasks = await GetFinisedTask();
  const totalTask = await getTotalTaskCount();

  const totalPoints = finishedTasks.reduce((sum, task) => sum + task.points, 0);

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap -mx-2">
            <div className="flex flex-col min-w-full">
              <div className="flex flex-wrap mt-5">
                <div className="w-full flex sm:w-1/2 lg:w-1/2 px-2 mb-4">
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle>Total Point Count</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h1 className="text-3xl font-bold">{totalPoints}pt</h1>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-full flex sm:w-1/2 lg:w-1/2 px-3 mb-4">
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle>Completed Task</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h1 className="text-3xl font-bold">
                        {finishedTasks.length}/{totalTask}
                      </h1>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex flex-col gap-3 p-2 w-full">
                  {tasks.map((task) => (
                    <Card
                      key={task.id}
                      className="w-full hover:bg-zinc-200 duration-700 hover:cursor-pointer"
                    >
                      <CardContent className="p-5 flex justify-between items-center">
                        <div className="text-start">
                          <h1 className="text-lg font-semibold">
                            {task.points} Poin
                          </h1>
                          <h1>{task.name}</h1>
                        </div>

                        <Dialog>
                          <DialogTrigger className={buttonVariants()}>
                            Finished
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Finish Task</DialogTitle>
                              <DialogDescription>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </DialogDescription>
                            </DialogHeader>
                            <Form id={task.id} />
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  ))}

                  {finishedTasks.map((task) => (
                    <Card
                      key={task.taskId}
                      className="w-full bg-green-400 hover:bg-zinc-200 duration-700 hover:cursor-pointer"
                    >
                      <CardContent className="p-5 flex justify-between items-center">
                        <div className="text-start">
                          <h1 className="text-lg font-semibold">
                            {task.points} Poin
                          </h1>
                          <h1>{task.name}</h1>
                        </div>

                        <div>
                          <CircleCheckBig />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
