"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginValidator } from "@/lib/validator/login.validator";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginValidator),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);
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
