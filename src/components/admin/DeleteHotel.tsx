'use client'
import React from 'react'
import {context} from '@/app/Context'
import {removeHotel} from '@/actions/hotelAction'

export default function DeleteHotel({hotelID}: {hotelID: string}) {
  const appContext = React.useContext(context);

  async function handelDelete() {
    const response = await removeHotel(hotelID);
    alert(response);
    if (response === 'Hotel deleted successfully') {
      appContext?.setPopUp(null);
    }
  }

  return (
    <div className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
      <svg
        className="mx-auto mb-3.5 h-11 w-11 text-gray-400 dark:text-gray-500"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <p className="mb-4 text-gray-500 dark:text-gray-300">
        Are you sure you want to delete this hotel?
      </p>
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={() => appContext?.setPopUp(null)}
          type="button"
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
        >
          No, cancel
        </button>
        <button
          onClick={handelDelete}
          className="rounded-lg bg-red-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Yes, I&apos;m sure
        </button>
      </div>
    </div>
  )
}
