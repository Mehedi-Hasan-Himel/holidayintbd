import React from "react";
import Link from "next/link";
import { getHotels } from "@/services/hotelService";

// export const revalidate = 21600 // revalidate at most every 6hours

export default async function page() {
  const hotels = await getHotels();

  return (
    <div className="mt-40">
      <h2 className="text-center text-2xl font-semibold">Our Hotels</h2>
        <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel) => {
            const hotelID = hotel._id.toString();
            
            return (
              <div
                key={hotelID}
                className="group relative h-60 cursor-pointer overflow-hidden rounded-lg shadow-md"
              >
                <Link href={`/hotels/${hotel.name}_${hotelID}`}>
                  <img
                    className="h-full w-full scale-110 transform object-fill transition duration-100 ease-in-out group-hover:scale-125"
                    src={hotel.image}
                    alt={hotel.name}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <h1 className="text-xl font-bold text-white duration-100 ease-in-out group-hover:text-3xl">
                      {hotel.name}
                    </h1>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
