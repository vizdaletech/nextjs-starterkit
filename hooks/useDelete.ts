import { useAfterSubmitStore } from "@/store/useCommonStore";
import { getCookies } from "@/utils/server-actions/cookies";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export const useDelete = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { changeFormSubmit, formSubmitChange } = useAfterSubmitStore(
    (state: any) => state
  );
  const handleDelete = async () => {
    try {
      setIsLoading(true);
      const token = await getCookies("session")

      const res = await axios.delete(url,  {
        headers : {
          Authorization : `Bearer ${token}`
        }
      });

      console.log({res})
      if (res.statusText !== "OK") {
        throw new Error(res.data.message);
      }
      changeFormSubmit(!formSubmitChange);
    } catch (err: any) {
        console.log({err})
        changeFormSubmit(!formSubmitChange)
      toast.error(err.message || "Something went wrong");
      setIsLoading(false)
    }
  };

  return { handleDelete, isLoading };
};
