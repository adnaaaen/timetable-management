"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginValidator } from "@/lib/validator/login.validator";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginValidator),
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jsonResponse = await response.json();
    response.ok
      ? router.push(`/${jsonResponse.id}`)
      : console.log("something went wrong");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-96">
        <div className="mb-6">
          <Input
            placeholder="email"
            {...register("email")}
            type="email"
            className="w-full"
          />
          {errors?.email && (
            <p className="error-message">{errors.email?.message}</p>
          )}
        </div>
        <div className="mb-6">
          <Input
            placeholder="password"
            {...register("password")}
            type="password"
            className="w-full"
          />
          {errors?.password && (
            <p className="error-message">{errors?.password?.message}</p>
          )}
        </div>
        <Button className="w-full bg-blue-600">Login</Button>
      </form>
    </div>
  );
};
