import React from "react";
import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";

export const TabView = ({ greetingName }) => {
  return (
    <div className="w-full h-10 flex justify-between px-4 cursor-default">
      <div className="font-semibold text-lg">
        {`Hi ${greetingName}`} &#128075;
      </div>
      <div>
        <Button className="gap-2 bg-red-600 p-2 h-7 rounded-[4px] text-[11px] hover:bg-red-800">
          <LogOutIcon size={13} />
          Log out
        </Button>
      </div>
    </div>
  );
};
