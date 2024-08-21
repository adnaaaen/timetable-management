"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BatchCreateValidator } from "@/lib/validator/batch.validator";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const CreateBatchForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BatchCreateValidator),
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    data.start_year = new Date(data.start_year).toISOString().split("T")[0];
    data.end_year = new Date(data.end_year).toISOString().split("T")[0];
    const response = await fetch("http://localhost:8000/api/batch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response.json());
    response.ok
      ? router.push("/admin/dashboard/batches")
      : console.log("something went wrong");
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
      <div>
        <Input type="date" {...register("start_year")} className="w-full" />
        {errors?.start_year && (
          <p className="error-message">{errors.start_year?.message}</p>
        )}
      </div>
      <div>
        <Input type="date" {...register("end_year")} className="w-full" />
        {errors?.end_year && (
          <p className="error-message">{errors.end_year?.message}</p>
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
