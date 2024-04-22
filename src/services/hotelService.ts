import Hotel from "@/models/hotel";
import { connectToDB } from "@/database/connect";
import { ObjectId } from "mongoose";

type Hotel = {
  _id: ObjectId;
  place_id: ObjectId;
  name: string;
  description: string;
  image: string;
  rooms: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export async function getHotelsByPlaceID(placeID: string) {
  await connectToDB();
  return (await Hotel.find({ place_id: placeID }).sort({updatedAt:-1})) satisfies Hotel[] | null;
}

export async function getHotels() {
  await connectToDB();
  return (await Hotel.find().sort({updatedAt:-1})) satisfies Hotel[] | null;
}

export async function getHotelByID(hotelID: string) {
  await connectToDB();
  return (await Hotel.findById({ _id: hotelID })) satisfies Hotel | null;
}

export async function createHotel(
  place_id: string,
  name: string,
  description: string,
  image: string,
  rooms: string[],
) {
  await connectToDB();
  return (await Hotel.create({
    place_id,
    name,
    description,
    image,
    rooms,
  })) satisfies Hotel | null;
}

export async function updateHotel(
  hotelID: string,
  name: string,
  description: string,
  image: string,
  rooms: string[],
) {
  await connectToDB();
  return await Hotel.updateOne(
    { _id: hotelID },
    { name, description, image, rooms },
  );
}

export async function deleteHotel(hotelID: string) {
  await connectToDB();
  return await Hotel.deleteOne({ _id: hotelID });
}

export async function deleteHotelsByPlaceID(placeID: string) {
  await connectToDB();
  return (await Hotel.deleteMany({ place_id: placeID })) 
}