"use client";
import React from "react";
import { Library, BookPlus } from "lucide-react";
import { Header } from "@/components/header";
import { ItemList } from "@/components/list-item";

const SubjectPage = () => {
  const subjects = [
    {
      name: "Database Management system",
    },
    {
      name: "object orient programming",
    },
    {
      name: "Software Engineering",
    },
    {
      name: "Computer Networks",
    },
  ];
  const onClick = () => {
    prompt("Click");
  };
  return (
    <div className="w-full h-full">
      <div className="w-full">
        <Header
          Icon={Library}
          Title="Subjects"
          ButtonText="add subject"
          ButtonIcon={BookPlus}
          ButtonOnClick={onClick}
        />
      </div>
      <div className="h-auto w-full px-3 mt-10">
        {subjects.map((subject,index)=>(
          <ItemList id={index+1} name={subject.name}/>
        ))}
      </div>
    </div>
  );
};

export default SubjectPage;
