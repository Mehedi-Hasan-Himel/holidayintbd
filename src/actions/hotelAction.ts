"use server";
import { createHotel, updateHotel, deleteHotel } from "@/services/hotelService";
import { cookies } from "next/headers";
import validateAdmin from "@/lib/validateAdmin";
import uploadImage from "@/lib/uploadImage";
import { revalidatePath } from "next/cache";

const cookieStore = cookies();
const token = cookieStore.get("token");

export async function addHotel(formData: FormData, placeID: string) {
  const isAdmin = await validateAdmin(token?.value);
  if (!isAdmin) {
    return "Unauthorized";
  }

  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const hotelImage = formData.get("hotelImage") as File;
    const rooms = formData.getAll("rooms") as File[];

    if (!name || !description || !hotelImage || rooms.length < 1) {
      return "All fields are required";
    }

    const hotelImageURL = await uploadImage(hotelImage);

    const roomImagesURL: string[] = []; 

    for(let i = 0; i < rooms.length; i++){
      const url = await uploadImage(rooms[i]);
      roomImagesURL.push(url);
    }

    await createHotel(placeID, name, description, hotelImageURL, roomImagesURL);

    revalidatePath(`/places/${placeID}`);

    return "Hotel created successfully";
  } catch (error) {
    console.error(error);
    return "server Error";
  }
}

export async function editHotel() {
  const isAdmin = await validateAdmin(token?.value);
  if (!isAdmin) {
    return "Unauthorized";
  }
  try {
    // updateHotel()
  } catch (error) {
    console.error(error);
    return "server Error";
  }
}

export async function removeHotel(hotelID: string) {
  const isAdmin = await validateAdmin(token?.value);
  if (!isAdmin) {
    return "Unauthorized";
  }
  try {
    await deleteHotel(hotelID);
    return "Hotel deleted successfully";
  } catch (error) {
    console.error(error);
    return "server Error";
  }
}
