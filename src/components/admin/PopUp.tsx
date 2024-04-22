"use client";
import { useContext } from "react";
import { context } from "@/app/Context";

export default function PopUp({ children }: { children: React.ReactNode }) {
  const appContext = useContext(context);

  return (
    <section className="fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-[#000000aa]">
      <div className="relative max-w-[80vw] max-h-[90vh] rounded-md overflow-y-scroll dark:bg-black bg-white">
      <button
        type="button"
        className="fixed right-2.5 top-2.5 z-50 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        data-modal-toggle="deleteModal"
        onClick={()=>appContext?.setPopUp(null)}
      >
        <svg
          aria-hidden="true"
          className="lg:h-10 lg:w-10 h-5 w-5"
          fill="#FF0000"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
        {children}
      </div>
    </section>
  );
}
