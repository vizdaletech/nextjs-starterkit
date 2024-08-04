import { removeCookie } from "@/utils/server-actions/cookies";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const useLogout = () => {
  const [isLogoutLoading, setIsLogoutLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleLogout = async () => {
    try {
      setIsLogoutLoading(true);
      await removeCookie("session");
      router.push("/login");
      
    } catch (err: any) {
      setIsLogoutLoading(false);
      toast.error(err.message);
    }
  };

  return { isLogoutLoading, handleLogout };
};
