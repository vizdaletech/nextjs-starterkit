"use server"

import {cookies} from "next/headers"

export const setCookies = (name:string,value:string) => {
    const cookieStore = cookies()
    cookieStore.set({
        name,
        value,
        httpOnly : true,
        path : "/"
    })

   return cookieStore.has(name)
}


export const getCookies = (name:string) => {
    const cookieStore = cookies()
    const result = cookieStore.get(name)?.value
    return result

}

export const removeCookie = (name:string) => {
    const cookieStore = cookies()
    cookieStore.delete(name)
    console.log("Done")

}

export const checkCookie = () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token") || "";
    return token !== "";
  };
  