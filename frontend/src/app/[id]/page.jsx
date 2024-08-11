"use client";
import React, { useState } from "react";
import { SubjectCard } from "@/components/subject-card";
import { TabView } from "@/components/tab-view";
import Head from "next/head";

const subjectData = [
  {
    subjectName: "PHP",
    batchName: "2022-25 BCA",
    time: "9:30 AM to 10:30 AM",
    imageSrc:
      "https://images.unsplash.com/photo-1486829776724-8495de073f81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    subjectName: "Web Designing",
    batchName: "2023-26 BCA",
    time: "10:30 AM to 11:30 AM",
    imageSrc:
      "https://images.unsplash.com/photo-1513165533842-2a0dd8b51a74?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    subjectName: "Software Engineer",
    batchName: "2022-25 BCA",
    time: "1:30 PM to 2:30 PM",
    imageSrc:
      "https://images.unsplash.com/photo-1519936475307-336803f1a2f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    subjectName: "DBMS",
    batchName: "2022-25 BCA",
    time: "1:30 PM to 2:30 PM",
    imageSrc:
      "https://images.unsplash.com/photo-1476970980147-71209edbfa4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    subjectName: "OOPS",
    batchName: "2022-25 BCA",
    time: "1:30 PM to 2:30 PM",
    imageSrc:
      "https://images.unsplash.com/photo-1523897056079-5553b57112d4?q=80&w=2141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const TimeTablePage = () => {
  const [isWeeklyView, setIsWeeklyView] = useState(false);

  const showWeeklyView = () => {
    setIsWeeklyView(true);
  };

  const showSubjectView = () => {
    setIsWeeklyView(false);
  };

  return (
    <div className="flex w-screen h-full md:h-screen flex-col justify-center items-center">
      <Head>
        <title>Subject wise mam</title>
      </Head>
      <div className="mt-2 h-10 w-full px-2">
        <TabView
          showSubjectView={showSubjectView}
          showWeeklyView={showWeeklyView}
        />
      </div>
      {isWeeklyView ? (
        <div className="h-full">
          <h2 className="text-white">Weekly timetable</h2>
        </div>
      ) : (
        <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-24">
          {subjectData.map((data, index) => (
            <SubjectCard
              key={index}
              courseName={data.subjectName}
              batchName={data.batchName}
              time={data.time}
              imageSrc={data.imageSrc}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeTablePage;
