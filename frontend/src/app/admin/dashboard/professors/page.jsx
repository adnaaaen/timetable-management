"use client";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { UserCog, UserPlus, UserRoundX } from "lucide-react";
import { ItemList } from "@/components/list-item";
import { useRouter } from "next/navigation";

const ProfessorPage = () => {
  const router = useRouter();
  const [isEmpty, setIsEmpty] = useState(false);
  const [professor, setProfessor] = useState([]);
  useEffect(() => {
    const fetchProfessors = async () => {
      const response = await fetch("http://localhost:8000/api/professor");
      console.log(response);
      const jsonResponse = await response.json();
      response.ok ? setIsEmpty(false) : setIsEmpty(true);
      setProfessor(jsonResponse);
    };
    fetchProfessors();
  }, [setProfessor]);
  const onClick = () => {
    router.push("/admin/dashboard/professors/new");
  };
  return (
    <div className="w-full h-full select-none">
      <div className="w-full">
        <Header
          Icon={UserCog}
          Title="Professors"
          ButtonText="add professor"
          ButtonIcon={UserPlus}
          ButtonOnClick={onClick}
        />
      </div>
      <div className="h-auto w-full px-3 mt-10">
        {isEmpty ? (
          <div className="flex justify-center items-center h-96 flex-col opacity-5 cursor-default select-none">
            <UserRoundX size={200} />
            <h1 className="text-xl">No professor&apos;s are there</h1>
          </div>
        ) : (
          professor.map((professors, index) => (
            <ItemList
              key={index}
              id={index + 1}
              name={professors.name}
              itemId={professors.id}
              path="professor"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProfessorPage;
