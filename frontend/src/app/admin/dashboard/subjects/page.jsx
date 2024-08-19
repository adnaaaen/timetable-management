"use client";
import React, { useEffect, useState } from "react";
import { Library, BookPlus, BookX } from "lucide-react";
import { Header } from "@/components/header";
import { ItemList } from "@/components/list-item";
import { useRouter } from "next/navigation";

const SubjectPage = () => {
  const router = useRouter();
  const [isEmpty, setIsEmpty] = useState(false);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const response = await fetch("http://localhost:8000/api/subject");
      const jsonResponse = await response.json();
      response.ok ? setIsEmpty(false) : setIsEmpty(true);
      setSubjects(jsonResponse);
    };
    fetchSubjects();
  }, [setSubjects]);

  const onClick = () => {
    router.push("/admin/dashboard/subjects/new");
  };

  return (
    <div className="w-full h-full select-none">
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
        {isEmpty ? (
          <div className="flex justify-center items-center h-96 flex-col opacity-5 cursor-default select-none">
            <BookX size={200} />
            <h1 className="text-xl">No subjects&apos;s are there</h1>
          </div>
        ) : (
          subjects.map((subject, index) => (
            <ItemList
              id={index + 1}
              name={subject.display_name}
              itemId={subject.id}
              path="subject"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SubjectPage;
