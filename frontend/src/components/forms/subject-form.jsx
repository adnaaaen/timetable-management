"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubjectCreateValidator } from "@/lib/validator/subject.validator";

export const CreateSubjectForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SubjectCreateValidator),
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    const response = await fetch("http://localhost:8000/api/subject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response.json());
    response.ok
      ? router.push("/admin/dashboard/subjects")
      : console.log("Something wen wrong");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full gap-y-10 flex flex-col"
    >
      <div className="">
        <Input
          placeholder="name"
          type="text"
          {...register("name")}
          className="w-full"
        />
        {errors?.name && (
          <p className="error-message">{errors.name?.message}</p>
        )}
      </div>
      <div>
        <Input
          placeholder="display_name"
          type="display_name"
          {...register("display_name")}
          className="w-full"
        />
        {errors?.display_name && (
          <p className="error-message">{errors.display_name?.message}</p>
        )}
      </div>
      <div className="gap-2 flex">
        <Button className="custom-button w-full" type="submit">
          Create
        </Button>
      </div>
    </form>
  );
};
