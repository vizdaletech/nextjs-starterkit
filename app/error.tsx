"use client";

import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    toast.error("Oops something went wrong")
    console.error(error);
  }, [error]);

  return (
    <>
   <Toaster position="top-right"/>
   </>
  );
}
