import React from "react";
import Link from "next/link";

export default function Hotel({
  hotel,
}: {
  hotel: { id: string; name: string; image: string };
}) {
  return (
    <div
      key={hotel.id}
      className="group relative h-60 cursor-pointer overflow-hidden rounded-lg shadow-md"
    >
      <Link href={makeURL(hotel.name, hotel.id)}>
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
}

function makeURL(name: string, id: string) {
  const hotelName = name.replace(" ", "-").toLowerCase();
  return `/hotels/${hotelName}_${id}`;
}
