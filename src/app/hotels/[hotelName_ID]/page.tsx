import React from "react";
import Room from "@/components/Hotel/Room";
import { getHotelByID } from "@/services/hotelService";

// export async function generateStaticParams() {
//   const hotels = await getHotels();

//   return hotels.map((hotel) => {
//     const hotelID = hotel._id.toString();
//     const hotelName = hotel.name.replace(" ", "-").toLowerCase();

//     return {
//       params: { placeName_ID: `${hotelName}_${hotelID}` },
//     };
//   })
// }

export default async function page({
  params,
}: {
  params: { hotelName_ID: string };
}) {
  const [hotelName, hotelID] = params.hotelName_ID.split("_");
  
  const hotel = await getHotelByID(hotelID);  

  if (!hotel) return <div>Hotel not found</div>;

  return <Room images={hotel.rooms} />;
}
