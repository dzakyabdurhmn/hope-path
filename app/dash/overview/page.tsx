import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";
function DashboardPage() {
  return (
    <div className="container mx-auto p-4 flex">
      <div className="flex flex-wrap -mx-2">
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
        <div className="w-full flex sm:w-1/2 lg:w-1/2 px-2 mb-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Completed Task</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="text-3xl font-bold">5/8</h1>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Card className="w-full">
            <CardContent className="p-5  flex justify-between items-center">
              <div className="text-start">
                <h1 className="text-lg font-semibold">3 Poin</h1>
                <h1>Joining Online Support Group</h1>
              </div>
              <div>
                <CircleCheckBig />
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="p-5  flex justify-between items-center">
              <div className="text-start">
                <h1 className="text-lg font-semibold">3 Poin</h1>
                <h1>Joining Online Support Group</h1>
              </div>
              <div>
                <CircleCheckBig />
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="p-5  flex justify-between items-center">
              <div className="text-start">
                <h1 className="text-lg font-semibold">3 Poin</h1>
                <h1>Joining Online Support Group</h1>
              </div>
              <div>
                <CircleCheckBig />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
