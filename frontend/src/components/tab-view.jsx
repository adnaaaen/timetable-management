import React from "react";
import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";

export const TabView = ({ showSubjectView, showWeeklyView }) => {
  return (
    <div className="w-full h-10 flex justify-between">
      <div>name </div>
      <div>
        <Button
          className="hover:border-b-2 border-b-blue-600 rounded-none"
          onClick={showSubjectView}
        >
          Daily
        </Button>
        <Button
          className="hover:border-b-2 border-b-blue-600 rounded-none"
          onClick={showWeeklyView}
        >
          Weekly
        </Button>
      </div>
      <div>
        <Button className="gap-2 bg-red-600 p-2 h-7 rounded-[4px] text-[12px]">
        <LogOutIcon size={14}/>
        Log out
        </Button>
      </div>
    </div>
  );
};
