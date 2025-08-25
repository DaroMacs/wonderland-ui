"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Login from "@/components/pages/Login";
import { PROFILE } from "@/constants/routes";
import { useWeb3 } from "@/context/web3";

const LoginPage = () => {
  const { isConnected } = useWeb3();
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.push(PROFILE);
    }
  }, [isConnected, router]);

  if (isConnected) {
    return null;
  }

  return <Login />;
};

export default LoginPage;
