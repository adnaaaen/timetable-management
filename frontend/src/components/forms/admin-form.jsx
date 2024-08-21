"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminValidator } from "@/lib/validator/admin.validator";
import { useRouter } from "next/navigation";

export const AdminForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AdminValidator),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    const { email, password } = data;
    email === "admin@gmail.com" && password === "admin1234"
      ? router.push("/admin/dashboard")
      : router.push("/admin");
  };
  return (
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
  );
};
