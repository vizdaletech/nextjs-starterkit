import { getCookies, setCookies } from "@/utils/server-actions/cookies";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const usePost = (
  url: string,
  formData: any,
  redirectUrl: any = null,
  isAuth: boolean = false
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      // console.log({ formData });

      const token = await getCookies("session");
      const res = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log({res})
      //Throwing an error if the status is not equal to ok
      if (res.statusText !== "OK" && res.statusText !== "") {
        throw new Error();
      } else {
        //If the response is successful, we should either redirect the user to another page or we should show a success message
        if (redirectUrl) {
          //If this hook is called within authentication form, cookie has to be set.
          if (isAuth) {
            const token: string = res?.data?.token;
            const isCookieSet = setCookies("session", token);
            // console.log({isCookieSet})
            if (isCookieSet) {
              router.push(redirectUrl);
            }
          } else {
            router.push(redirectUrl);
          }
        } else {
          setIsLoading(false);
          toast.success("Submitted successfully");
          router.refresh();
          return res;
        }
      }
    } catch (err: any) {
      setIsLoading(false);
      // console.log({ error: err });
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  return { isLoading, handleSubmit };
};
