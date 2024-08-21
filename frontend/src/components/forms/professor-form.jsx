"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfessorCreateValidator } from "@/lib/validator/professor.validator";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const CreateProfessorForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ProfessorCreateValidator),
    mode: "onchange",
  });
  const onSubmit = async (data) => {
    const response = await fetch("http://localhost:8000/api/professor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response.json());
    response.ok
      ? router.push("/admin/dashboard/professors")
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
          placeholder="email"
          type="email"
          {...register("email")}
          className="w-full"
        />
        {errors?.email && (
          <p className="error-message">{errors.email?.message}</p>
        )}
      </div>
      <div>
        <Input
          placeholder="password"
          type="password"
          {...register("password")}
          className="w-full"
        />
        {errors?.password && (
          <p className="error-message">{errors.password?.message}</p>
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
