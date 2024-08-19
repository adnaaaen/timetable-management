"use client";
import React, { useEffect, useState } from "react";
import { SubjectCard } from "@/components/subject-card";
import { TabView } from "@/components/tab-view";
import { useCurrentTime } from "@/utils/current-time";
import { Calendar, Clock } from "lucide-react";
import { usePathname } from "next/navigation";

const TimeTablePage = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [timetables, setTimetables] = useState([]);
  const { weekday, month, day, year, time } = useCurrentTime();
  useEffect(() => {
    const fetchTimeTable = async () => {
      const response = await fetch(`http://localhost:8000/api/timetableby?id=${id}`);
      const jsonResponse = await response.json();
      setTimetables(jsonResponse.status == 404 ? [] : jsonResponse);
      console.log(jsonResponse);
    };
    fetchTimeTable();
  }, []);
  

  return (
    <div className="flex w-screen h-full md:h-screen flex-col justify-center items-center select-none">
      <div className="mt-2 h-10 w-full px-2">
        <TabView greetingName={"Naseela"} />
      </div>
      <div className="w-full h-20 px-5 justify-center flex flex-col">
        <div className="flex items-center gap-x-2">
          <Calendar size={16} />
          <h2 className="font-medium text-md">{`${weekday} ${month} ${day} ${year}`}</h2>
        </div>
        <div className="flex items-center gap-x-2">
          <Clock size={16} />
          <h2 className="font-semibold text-md">{`${time} AM`}</h2>
          <h2>{id}</h2>
        </div>
      </div>
      <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-10">
        {timetables.map((subject, index) => (
          <SubjectCard
            key={index}
            subjectName={subject.subject.display_name}
            batchName={subject.batch.display_name}
            time={subject.time}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeTablePage;
