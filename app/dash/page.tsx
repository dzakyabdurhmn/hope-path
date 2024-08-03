import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { MapPinIcon } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import getRandomQuote from "@/lib/mock";
function DashboardPage() {
  const quote = getRandomQuote();

  return (
    <div className="container mx-auto p-4">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap -mx-2">
          <div className="flex flex-col min-w-full">
            <Card className="w-full">
              <CardContent className="p-5  flex justify-between items-center">
                <div className="w-full">
                  <ol className="flex overflow-auto items-center w-full gap-x-9">
                    <li className="relative flex-shrink-0">
                      <a
                        href="https://pagedone.io/"
                        className="flex items-center font-medium w-full"
                      >
                        <span className="w-6 h-6 bg-indigo-600 border border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-8 lg:h-8">
                          1
                        </span>
                        <div className="block">
                          <h4 className="text-base text-indigo-600">
                            Create Pagedone Account
                          </h4>
                        </div>
                        <svg
                          className="w-5 h-5 ml-2 stroke-indigo-600 sm:ml-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 18L9.67462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.6893 10.1478 11.4393 9.67462 10.9393L5 6M12.6608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.6893 17.8086 11.4393 17.3354 10.9393L12.6608 6"
                            stroke="stroke-current"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="relative flex-shrink-0">
                      <a className="flex items-center font-medium w-full">
                        <span className="w-6 h-6 bg-gray-50 border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm lg:w-8 lg:h-8">
                          2
                        </span>
                        <div className="block">
                          <h4 className="text-base text-gray-900">
                            Billing Information
                          </h4>
                        </div>
                        <svg
                          className="w-5 h-5 ml-2 stroke-gray-900 sm:ml-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 18L9.67462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.6893 10.1478 11.4393 9.67462 10.9393L5 6M12.6608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.6893 17.8086 11.4393 17.3354 10.9393L12.6608 6"
                            stroke="stroke-current"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="relative flex-shrink-0">
                      <a className="flex items-center font-medium w-full">
                        <span className="w-6 h-6 bg-gray-50 border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm lg:w-8 lg:h-8">
                          3
                        </span>
                        <div className="block">
                          <h4 className="text-base text-gray-900">Summary</h4>
                        </div>
                      </a>
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap -mx-2">
          <div className="flex flex-col min-w-full">
            <Card className="w-full">
              <CardContent className="p-5  rounded-lg border border-lime-400 bg-[#E5F8A3]  italic">
                <p className="max-w-xl">{quote}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Separator className="w-full border-2 m-4 rounded-full" />
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-2">
          <div className="flex flex-col min-w-full">
            <h1 className="text-xl font-semibold">
              Rehabilition Places Near You!
            </h1>
            <div className="flex flex-col gap-x-4 max-h-lg">
              <Card className="mt-4   bg-blue-300 rounded-xl border-blue-500 flex items-center gap-6 w-full  p-3">
                <MapPinIcon size={30} />
                <div>
                  <h1 className="text-lg font-semibold">Place name</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </Card>
              <Card className="mt-4  border-none bg-blue-300 rounded-xl shadow-lg flex items-center gap-6 w-full  p-3">
                <MapPinIcon size={30} />
                <div>
                  <h1 className="text-lg font-semibold">Place name</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
