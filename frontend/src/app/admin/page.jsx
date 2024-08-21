"use client";
import React from "react";
import { AdminForm } from "@/components/forms/admin-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";

const AdminLoginPage = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-6">
      <h2>sign-in as admin</h2>
      <AdminForm />
      <nav>
        <Button
          className="text-gray-400 hover:text-white gap-1 text-[12px]"
          onClick={() => router.push("/")}
        >
          <User size={12} />
          Back to as user
        </Button>
      </nav>
    </div>
  );
};

export default AdminLoginPage;
