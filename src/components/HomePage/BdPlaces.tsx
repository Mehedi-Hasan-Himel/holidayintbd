import React from "react";
import Image from "next/image";
import Link from "next/link";
import BDPlaces from "@/data/BDPlaces.json";

// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()



export default async function BdPlaces() {
  // const BDPlaces = await prisma.place.findMany({where:{international:false}})
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
        {BDPlaces.map((place) => (
          <div
            key={place.id}
            className="group relative h-60 cursor-pointer overflow-hidden rounded-lg shadow-md"
          >
            <Link href={`${place.name}`}>
              <img
                className="h-full w-full scale-110 transform object-fill transition duration-100 ease-in-out group-hover:scale-125	"
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
        ))}
      </div>
    </div>
  );
}
