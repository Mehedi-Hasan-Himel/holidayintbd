import React from "react";
import Link from "next/link";

export default function Place({
  place,
}: {
  place: { id:string; name: string; image: string};
}) {
  return (
    <div className="group relative h-60 cursor-pointer overflow-hidden rounded-lg shadow-md">
      <Link href={makeURL(place.name,place.id)}>
        <img
          className="h-full w-full scale-110 transform object-fill transition duration-100 ease-in-out group-hover:scale-125"
          src={place.image}
          alt={place.name}
          sizes="100%"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-3xl font-bold text-white duration-100 ease-in-out group-hover:text-5xl">
            {place.name}
          </h1>
        </div>
      </Link>
    </div>
  );
}

function makeURL(name: string, id: string) {
  const placeName = name.replace(" ","-").toLowerCase();
  return `/places/${placeName}_${id}`;
}