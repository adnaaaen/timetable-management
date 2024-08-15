"use client"
import React from "react";
import { LoginForm } from "@/components/forms/login-form";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-6">
      <h2>Let&apos;s get&apos;s onboard</h2>
      <LoginForm />
      <nav>
        <Button className="text-gray-400 hover:text-white gap-1 text-[12px]" onClick={()=>router.push("/admin")}>
          <Wrench size={12} />
          Admin?
        </Button>
      </nav>
    </div>
  );
};

export default LoginPage;
