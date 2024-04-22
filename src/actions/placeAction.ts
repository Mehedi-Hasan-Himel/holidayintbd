"use server";
import { createPlace, updatePlace, deletePlace } from "@/services/placeService";
import { deleteHotelsByPlaceID } from "@/services/hotelService";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import validateAdmin from "@/lib/validateAdmin";
import uploadImage from "@/lib/uploadImage";

const cookieStore = cookies();
const token = cookieStore.get("token");

export async function addPlace(formData: FormData) {
  const isAdmin = await validateAdmin(token?.value);
  if (!isAdmin) {
    return "Unauthorized";
  }
  try {
    const name = formData.get("placeName") as string;
    const isInternational = formData.get("isInternational") as string;
    const PlaceImage = formData.get("placeImage") as File;

    if(!name  || !PlaceImage) {
      return "Please fill all the fields";
    }

    const international = isInternational === "on" ? true : false;

    const image = await uploadImage(PlaceImage);

    await createPlace(name, international, image);

    if(international) {
      revalidatePath("/international");
    }else{
      revalidatePath("/domestic");
    }

    return "Place created successfully";
  } catch (error) {
    console.error(error);
    return "server Error";
  }
}

export async function editPlace() {
  const isAdmin = await validateAdmin(token?.value);
  if (!isAdmin) {
    return "Unauthorized";
  }
  try {
    // updatePlace()
  } catch (error) {
    console.error(error);
    return "server Error";
  }
}

export async function removePlace(placeID: string) {
  const isAdmin = await validateAdmin(token?.value);
  if (!isAdmin) {
    return "Unauthorized";
  }
  try {
    await deletePlace(placeID);
    await deleteHotelsByPlaceID(placeID);

    revalidatePath("/international");
    revalidatePath("/domestic");

    return "Place deleted successfully";
  } catch (error) {
    console.error(error);
    return "server Error";
  }
}
