import React from "react";

export const SubjectCard = ({ subjectName, batchName, time }) => {
  return (
    <div className="h-36 w-64 hover:border rounded-md">
      <div className="relative w-full h-2/3 bg-black/25 rounded-t-md">
        <div className="absolute bottom-1 left-2 flex items-center justify-center rounded-lg">
          <div className="w-full">
            <h2 className=" p-1 rounded-sm text-xl font-semibold">
              {subjectName}
            </h2>
          </div>
        </div>
      </div>
      <div className="h-1/3 bg-white text-black text-[12px] px-2 w-full rounded-b-md justify-center flex flex-col">
        <p>{batchName}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};
