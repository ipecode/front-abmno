"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; 

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("alignai_token"); 
    router.push("/login"); 
  }, []);

  return <p>Saindo...</p>;
};

export default Logout;