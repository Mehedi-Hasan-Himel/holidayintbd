import { connectToDB } from "@/database/connect";
import Place from "@/models/place";
import { ObjectId } from "mongoose";

type Place = {
  _id: ObjectId;
  name: string;
  international: boolean;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export async function getDomesticPlaces() {
  await connectToDB();
  return (await Place.find({ international: false }).sort({updatedAt:-1})) satisfies Place[] | null;
}

export async function getInternationalPlaces() {
  await connectToDB();
  return (await Place.find({ international: true }).sort({updatedAt:-1})) satisfies Place[] | null;
}

export async function getPlaces() {
  await connectToDB();
  return (await Place.find().sort({updatedAt:-1})) satisfies Place[] | null;
}

export async function getPlaceByID(placeID: string) {
  await connectToDB();
  return (await Place.findById({ _id: placeID })) satisfies Place | null;
}

export async function createPlace(
  name: string,
  international: boolean,
  image: string,
) {
  await connectToDB();
  return (await Place.create({
    name,
    international,
    image,
  })) satisfies Place | null;
}

export async function updatePlace(
  placeID: string,
  name: string,
  international: boolean,
  image: string,
) {
  await connectToDB();
  return Place.updateOne({ _id: placeID }, { name, international, image });
}

export async function deletePlace(placeID: string) {
  await connectToDB();
  return Place.deleteOne({ _id: placeID });
}
