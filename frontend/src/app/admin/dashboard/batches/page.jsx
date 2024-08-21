"use client";
import React, { useEffect, useState } from "react";
import { School, ListPlus, University } from "lucide-react";
import { Header } from "@/components/header";
import { ItemList } from "@/components/list-item";
import { useRouter } from "next/navigation";

const BatchesPage = () => {
  const router = useRouter();
  const [isEmpty, setIsEmpty] = useState(false);
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    const fetchBatches = async () => {
      const response = await fetch("http://localhost:8000/api/batch");
      const jsonResponse = await response.json();
      response.ok ? setIsEmpty(false) : setIsEmpty(true);
      setBatches(jsonResponse);
    };
    fetchBatches();
  }, []);
  const onClick = () => {
    router.push("/admin/dashboard/batches/new");
  };

  return (
    <div className="w-full h-full select-none">
      <div className="w-full">
        <Header
          Icon={School}
          Title="Batches"
          ButtonText="add batch"
          ButtonIcon={ListPlus}
          ButtonOnClick={onClick}
        />
      </div>
      <div className="h-auto w-full px-3 mt-10">
        {isEmpty ? (
          <div className="flex justify-center items-center h-96 flex-col opacity-5 cursor-default select-none">
            <University size={200} />
            <h1 className="text-xl">No batch&apos;s are there</h1>
          </div>
        ) : (
          batches.map((batch, index) => (
            <ItemList
              key={index}
              id={index + 1}
              name={batch.name}
              itemId={batch.id}
              path="batch"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BatchesPage;
