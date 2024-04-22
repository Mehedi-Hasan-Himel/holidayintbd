import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hotel({destination}: {destination: any}) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
        {destination.map((place: any) => (
          <div
            key={place.id}
            className="group relative h-60 cursor-pointer overflow-hidden rounded-lg shadow-md"
          >
            <Link href={`${place.href}`}>
              <img
                className="h-full w-full scale-110 transform object-fill transition duration-100 ease-in-out group-hover:scale-125	"
                src={place.image}
                alt={place.name}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h1 className="text-xl font-bold text-white duration-100 ease-in-out group-hover:text-3xl">
                  {place.name}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
