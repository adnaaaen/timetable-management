import React from "react";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip } from "@nextui-org/tooltip";

export const ItemList = ({ id, name, itemId, path }) => {
  const deleteProfessor = async (id) => {
    const response = await fetch(`http://localhost:8000/api/${path}?id=${id}`, {
      method: "DELETE",
    });
    response.status == 200
      ? window.location.reload()
      : console.log("something went wrong");
  };
  return (
    <div className="w-full bg-gray-600 h-9 rounded-sm flex justify-between items-center px-4 text-sm my-4 cursor-pointer">
      <div className="flex gap-5">
        <span>{id}.</span>
        <span className="capitalize">{name}</span>
      </div>
      <>
        <Tooltip
          content="delete"
          offset={-7}
          delay={1000}
          closeDelay={100}
          className="text-[11px] bg-white text-red-600 rounded-sm py-0 px-1"
        >
          <Button
            className="hover:text-red-600"
            onClick={() => deleteProfessor(itemId)}
          >
            <Trash2 size={16} />
          </Button>
        </Tooltip>
      </>
    </div>
  );
};
