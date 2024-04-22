import React from "react";
import { getHotelsByPlaceID } from "@/services/hotelService";
import Hotel from "@/components/Hotel";
import AdminHotel from "@/components/admin/AdminHotel";
import AddHotel from "@/components/admin/AddHotel";
import validateAdmin from "@/lib/validateAdmin";
import { cookies } from "next/headers";

// export async function generateStaticParams() {
//   const places = await getPlaces();

//   return places.map((place) => {
//     const placeID = place._id.toString();
//     const placeName = place.name.replace(" ", "-").toLowerCase();

//     return {
//       params: { placeName_ID: `${placeName}_${placeID}` },
//     };
//   });
// }

export default async function page({
  params,
}: {
  params: { placeName_ID: string };
}) {
  const [placeName, placeID] = params.placeName_ID.split("_");

  const cookieStore = cookies()
  const token = cookieStore.get('token')
  const isAdmin = await validateAdmin(token?.value)

  const hotels = await getHotelsByPlaceID(placeID);

  return (
    <div className="mt-40 max-w-screen-xl mx-auto">
      <h2 className="text-center text-2xl font-semibold">{placeName}</h2>
      <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
        {isAdmin ? (
          <AddHotel placeID={placeID} />
        ) : null}
        {hotels.map((hotel) => {
          const hotelID = hotel._id.toString();

          if(isAdmin){
            return(
              <AdminHotel key={hotelID} hotel={{id: hotelID, name: hotel.name, image: hotel.image}}/>
            )
          }else{
            return (
              <Hotel key={hotelID} hotel={{id: hotelID, name: hotel.name, image: hotel.image}}/>
            )
          }
        })}
      </div>
    </div>
  );
}

