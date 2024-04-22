"use server";
import { getUserByEmailAndPassword } from "@/services/userService";
import { cookies } from "next/headers";

export default async function loginAction(email: string, password: string) {
  const cookieStore = cookies()

  try {
    const admin = await getUserByEmailAndPassword(email, password);

    if (!admin) {
      return {ok:false,massage:"Wrong Email or Password"}
    }

    cookieStore.set("token",admin._id.toString())

    return {ok:true,massage:"login seucesfull"}
    
  } catch (error) {
    console.error(error);
    return {ok:false,massage:"server Error"} ;
  }
}
