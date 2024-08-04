import { useAfterSubmitStore } from "@/store/useCommonStore";
import { fetchData } from "@/utils/api/fetchData";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useFetch = (endpoint: any) => {
  const [data, setData] = useState<any>(null);
  const [isFetchLoading, setIsFetchLoading] = useState<boolean>(false);
  const { formSubmitChange } = useAfterSubmitStore((state: any) => state);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsFetchLoading(true);
        const data = await fetchData(
          `${process.env.NEXT_PUBLIC_DEV_API_URL}${endpoint}`
        ); //Has to be changed
        console.log(data);
        if (data) {
          setData(data);
        }
        setIsFetchLoading(false);
      } catch (err) {
        toast.error(err.message);
      }
    };
    getData();
  }, [formSubmitChange]);
  return { isFetchLoading, data };
};
