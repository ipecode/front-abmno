"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent: React.FC) => {
  return (props: any) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
      const token = localStorage.getItem("alignai_token");

      if (!token) {
        router.push("/login"); 
      } else {
        setIsAuthenticated(true);
      }
    }, []);

    if (!isAuthenticated) return null; 

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;