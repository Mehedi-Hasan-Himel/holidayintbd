"use client";
import React from "react";
import { context } from "@/app/Context";
import AddPlaceForm from "@/components/admin/AddPlaceForm";

export default function AddPlace() {
  const appContext = React.useContext(context);

  return (
    <div
      onClick={() => appContext?.setPopUp(<AddPlaceForm />)}
      className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-white text-2xl transition-all hover:bg-blue-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-20 w-20"
      >
        <path
          fill="#6563FF"
          d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"
        ></path>
      </svg>
      Add New Place
    </div>
  );
}
