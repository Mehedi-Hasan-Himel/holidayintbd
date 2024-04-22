"use client";
import React from "react";
import Link from "next/link";
import { context } from "@/app/Context";
import DeleteHotel from "./DeleteHotel";
import EditHotel from "./EditHotel";

export default function AdminHotel({
  hotel,
}: {
  hotel: { id: string; name: string; image: string };
}) {
  const appContext = React.useContext(context);

  return (
    <div
      key={hotel.id}
      className="relative h-60 cursor-pointer overflow-hidden rounded-lg shadow-md"
    >
      <Link href={makeURL(hotel.name, hotel.id)} className="group">
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
      <div className="absolute bottom-0 flex w-full items-center justify-between p-3">
        <button
          className="cursor-pointer rounded-full bg-gray-900 p-2"
          onClick={() => appContext?.setPopUp(<EditHotel />)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path
              fill="#FFF"
              d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z"
            ></path>
          </svg>
        </button>
        <button
          className="cursor-pointer rounded-full bg-gray-900 p-2"
          onClick={() =>
            appContext?.setPopUp(<DeleteHotel hotelID={hotel.id} />)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path
              fill="#FF0000"
              d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

function makeURL(name: string, id: string) {
  const hotelName = name.replace(" ", "-").toLowerCase();
  return `/hotels/${hotelName}_${id}`;
}
