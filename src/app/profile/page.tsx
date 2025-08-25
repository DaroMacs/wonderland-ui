"use client";

import Profile from "@/components/pages/Profile";
import { LOGIN } from "@/constants/routes";
import { useWeb3 } from "@/context/web3";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
  const { isConnected } = useWeb3();
  const router = useRouter();

  useEffect(() => {
    if (!isConnected) {
      router.push(LOGIN);
    }
  }, [isConnected, router]);

  if (!isConnected) {
    return null;
  }

  return <Profile />;
};

export default ProfilePage;
