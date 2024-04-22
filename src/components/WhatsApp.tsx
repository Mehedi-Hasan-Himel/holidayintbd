import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WhatsApp() {
  return (
    <div
      className="absolute  cursor-pointer
    	"
    >
      <Link
        target="_blank"
        href="https://wa.me/8801321753335
">
        <img
          className="fixed bottom-2 right-5 z-50 "
          src="/images/whatsapp.svg"
          alt="whatsapp"
          width={60}
          height={60}
        />
      </Link>
    </div>
  );
}
