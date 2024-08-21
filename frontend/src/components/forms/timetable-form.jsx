"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TimetableCreateValidator } from "@/lib/validator/timetable.validator";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const CreateTimeTableForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(TimetableCreateValidator),
    mode: "onChange",
  });

  const [professorOptions, setProfessorOptions] = useState([]);
  const [batchOptions, setBatchOptions] = useState([]);
  const [subjectOptions, setSubjectOptions] = useState([]);

  const timeOptions = [
    "9:30 AM to 10:30 AM",
    "10:30 AM to 11:30 AM",
    "11:45 AM to 12:45 PM",
    "1:30 PM to 2:30 PM",
    "2:30 PM to 3:30 PM",
  ];

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const professorsResponse = await fetch(
          "http://localhost:8000/api/professor"
        );
        const subjectsResponse = await fetch(
          "http://localhost:8000/api/subject"
        );
        const batchesResponse = await fetch("http://localhost:8000/api/batch");

        const jsonProfessor = await professorsResponse.json();
        const jsonSubject = await subjectsResponse.json();
        const jsonBatch = await batchesResponse.json();

        setProfessorOptions(jsonProfessor.status == 404 ? [] : jsonProfessor);
        console.log(professorOptions);

        setSubjectOptions(jsonSubject.status == 404 ? [] : jsonSubject);
        setBatchOptions(jsonBatch.status == 404 ? [] : jsonBatch);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };
    fetchOptions();
  }, [professorOptions]);

  const onSubmit = async (data) => {
    const convertedData = {
      professor_id: parseInt(data.professor_id, 10),
      batch_id: parseInt(data.batch_id, 10),
      subject_id: parseInt(data.subject_id, 10),
      time: data.time,
    };
    const response = await fetch("http://localhost:8000/api/timetable", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(convertedData),
    });
    console.log(response.json());
    response.ok
      ? router.push("/admin/dashboard/timetable")
      : console.log("Something wen wrong");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full gap-x-6 gap-y-4 grid grid-cols-2"
    >
      <div>
        <label htmlFor="professor_id" className="text-sm">
          Select Professor
        </label>
        <Controller
          name="professor_id"
          control={control}
          render={({ field }) => (
            <select id="professor_id" {...field} className="custom-select">
              {professorOptions.length > 0 ? (
                <>
                  <option value="">choose</option>
                  {professorOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </>
              ) : (
                <option value="">no professors</option>
              )}
            </select>
          )}
        />
        {errors.professor_id && (
          <p className="error-message">{errors.professor_id.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="batch_id" className="text-sm">
          Select Batch:
        </label>
        <Controller
          name="batch_id"
          control={control}
          render={({ field }) => (
            <select id="batch_id" {...field} className="custom-select">
              {batchOptions.length > 0 ? (
                <>
                  <option value="">choose</option>
                  {batchOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.display_name}
                    </option>
                  ))}
                </>
              ) : (
                <option value="">no batches</option>
              )}
            </select>
          )}
        />
        {errors.batch_id && (
          <p className="error-message">{errors.batch_id.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject_id" className="text-sm">
          Select Subject:
        </label>
        <Controller
          name="subject_id"
          control={control}
          render={({ field }) => (
            <select id="subject_id" {...field} className="custom-select">
              {subjectOptions.length > 0 ? (
                <>
                  <option value="">choose</option>
                  {subjectOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.display_name}
                    </option>
                  ))}
                </>
              ) : (
                <option value="">no subjects</option>
              )}
            </select>
          )}
        />
        {errors.subject_id && (
          <p className="error-message">{errors.subject_id.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="time" className="text-sm">
          Select Time Slot:
        </label>
        <Controller
          name="time"
          control={control}
          render={({ field }) => (
            <select id="time" {...field} className="custom-select">
              {}
              <option value="">choose</option>
              {timeOptions.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          )}
        />
        {errors.time && <p className="error-message">{errors.time.message}</p>}
      </div>
      <Button type="submit" className="custom-button hover:bg-zinc-300 mt-5">
        Assign
      </Button>
    </form>
  );
};
