"use client"
import React from "react";
import { Button } from "./ui/button";

export const Header = (props) => {
  const { Title, Icon, ButtonText, ButtonOnClick, ButtonIcon } = props;
  return (
    <nav className="top-0 w-full flex justify-between px-3 h-12 items-center cursor-default">
      <div className="flex items-center gap-1">
        <Icon size={16} />
        {Title}
      </div>
      <Button
        className="bg-white h-7 p-0 text-black px-2 text-[13px] rounded-sm flex gap-1 hover:bg-zinc-200"
        onClick={ButtonOnClick}
      >
        <ButtonIcon size={15} />
        {ButtonText}
      </Button>
    </nav>
  );
};
