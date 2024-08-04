"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export const useImageUpload = (url:string) => {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleUploadImage = async (file) => {
    try {
      setIsLoading(true);
      const imageData = new FormData();
      imageData.append("my_file", file);
      const res = await axios.post(url, imageData);
      console.log({res})
      if (res?.statusText !== "OK") {
        throw new Error(res?.data?.nessage);
      }

      setImageUrl(res?.data?.secure_url);
    } catch (err) {
      toast.error(err?.messsage || "Error in uploading an image");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, imageUrl, handleUploadImage };
};
