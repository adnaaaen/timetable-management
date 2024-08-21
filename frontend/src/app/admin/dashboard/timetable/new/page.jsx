"use client";
import React from "react";
import { CreateTimeTableForm } from "@/components/forms/timetable-form";
import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";

const CreateTimetablePage = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-full justify-center flex flex-col">
      <div className="w-full top-0 fixed">
        <Button
          onClick={() => router.push("/admin/dashboard/timetable")}
          className="gap-1 text-gray-300 hover:text-white"
        >
          <Undo2 size={15} />
          back
        </Button>
      </div>
      <div className="w-full justify-center items-center flex flex-col">
        <div className="flex flex-col text-center mb-10">
          <span className="text-xl">want to add new timetable?</span>
          <span className="text-sm text-gray-400">fill the form below</span>
        </div>
        <div className="w-4/6">
          <CreateTimeTableForm />
        </div>
      </div>
    </div>
  );
};

export default CreateTimetablePage;
