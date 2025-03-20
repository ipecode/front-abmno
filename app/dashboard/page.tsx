"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/Login"); 
    } else {
      setUser({ id: "12345", email: "user@example.com" });
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-semibold">Bem-vindo ao Dashboard</h2>
        {user && (
          <p className="text-gray-700 mt-4">ID: {user.id} | Email: {user.email}</p>
        )}
        <button
          onClick={() => {
            if (typeof window !== "undefined") {
              localStorage.removeItem("token");
              router.push("/Login");
            }
          }}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
        >
          Sair
        </button>
      </div>
    </div>
  );
};

export default Dashboard;