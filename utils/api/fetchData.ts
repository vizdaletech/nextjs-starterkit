import axios from "axios";

export const fetchData = async (url: string) => {
  try {
    const res = await axios.get(url);
    const data = res.data;
    // console.log({ data });
    return data;
  } catch (error: any) {
    throw new Error(error.message)
  }
};
