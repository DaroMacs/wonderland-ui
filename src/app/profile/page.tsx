"use client";

import Profile from "@/components/pages/Profile";
import { LOGIN } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccount } from "wagmi";

export default function ProfilePage() {
  const { isConnected } = useAccount();
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
}
