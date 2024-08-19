"use client";
import React, { useEffect, useState } from "react";
import { CalendarRange, CalendarPlus, CalendarSearch } from "lucide-react";
import { Header } from "@/components/header";
import { ItemList } from "@/components/list-item";
import { useRouter } from "next/navigation";

const SubjectPage = () => {
  const router = useRouter();
  const [isEmpty, setIsEmpty] = useState(false);
  const [timetables, setTimetables] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const response = await fetch("http://localhost:8000/api/timetable");
      const jsonResponse = await response.json();
      response.ok ? setIsEmpty(false) : setIsEmpty(true);
      setTimetables(jsonResponse);
    };
    fetchSubjects();
  }, [setTimetables]);

  const onClick = () => {
    router.push("/admin/dashboard/timetable/new");
  };

  return (
    <div className="w-full h-full select-none">
      <div className="w-full">
        <Header
          Icon={CalendarRange}
          Title="Time-Table"
          ButtonText="add timetable"
          ButtonIcon={CalendarPlus}
          ButtonOnClick={onClick}
        />
      </div>
      <div className="h-auto w-full px-3 mt-10">
        {isEmpty ? (
          <div className="flex justify-center items-center h-96 flex-col opacity-5 cursor-default select-none">
            <CalendarSearch size={200} />
            <h1 className="text-xl">No timetable are there</h1>
          </div>
        ) : (
          timetables.map((timetable, index) => (
            <ItemList
              key={index}
              id={index + 1}
              name={`${timetable.professor.name} have ${timetable.subject.display_name} in ${timetable.batch.display_name} at ${timetable.time}`}
              itemId={timetable.id}
              path="timetable"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SubjectPage;
