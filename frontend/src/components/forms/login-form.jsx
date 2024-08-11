"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-96">
        <Input
          placeholder="email"
          {...register("email")}
          type="email"
          className="w-full mb-6"
        />
        <Input
          placeholder="password"
          {...register("password")}
          type="password"
          className="w-full mb-6"
        />
        <Button className="w-full bg-blue-600">Login</Button>
      </form>
    </div>
  );
};
