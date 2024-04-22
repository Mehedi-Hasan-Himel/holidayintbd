import User from "@/models/user";
import { connectToDB } from "@/database/connect";
import { ObjectId } from "mongoose";

type User = {
  _id: ObjectId;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export async function getUserByID(userID: string) {
  await connectToDB();
  return (await User.findById({ _id: userID }).select(
    "-password",
  )) as unknown as User | null;
}

export async function createUser(
  name: string,
  email: string,
  password: string,
) {
  await connectToDB();
  return (await User.create({
    name,
    email,
    password,
    role: "ADMIN",
  })) satisfies User | null;
}

export async function getUserByEmailAndPassword(email: string, password: string) {
  await connectToDB();
  return (await User.findOne({ email, password }).select(
    "-password",
  )) as unknown as User | null;
}

export async function updatePassword(userID: string, newPassword: string) {
  await connectToDB();
  return (await User.updateOne(
    { _id: userID },
    { password: newPassword },
  ).select("-password")) as unknown as User | null;
}
