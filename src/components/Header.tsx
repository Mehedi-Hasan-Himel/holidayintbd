"use client";
import Link from "next/link";
import React from "react";
import ThemeButton from "./ThemeButton";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MobileNav from "./MobileNav";

export default function Header() {
  const navigation = [
    {
      name: "Home",
      href: "/",
    },

    {
      name: "Domestic",
      href: "/domestic",
    },
    {
      name: "International",
      href: "/international",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Login",
      href: "/login",
    },
    {
      name: "Dashboard",
      href: "/dashboard",
    },
  ];
  const pathName = usePathname();
  return (
    <nav className=" fixed top-0 z-50 py-5 w-full border-b border-border/40 bg-background/95 px-5 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* className=" fixed top-0 z-50 w-full backdrop-blur " */}
      <section className=" mx-auto flex h-20 max-w-screen-xl items-center justify-between ">
        <Link
          href="/"
          className="cursor-pointe flex  items-center gap-1 font-semibold uppercase underline decoration-[1px] underline-offset-2 hover:text-blue-600"
        >
          <img
            className="pt-14 rounded-md"
            width={200}
            height={200}
            src="/images/Holiday-Logo.png"
            alt="logo of Holiday International"
          />
          {/* <span className="mt-3 text-sm lg:text-2xl">
            Holiday International
          </span> */}
        </Link>
        <div className="hidden items-center gap-7 lg:inline-flex">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className={`group relative overflow-hidden ${pathName === item.href && "text-blue-600"}`}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-0 inline-flex h-[1px] w-full -translate-x-[105%] duration-300 group-hover:translate-x-0 dark:bg-white ${pathName === item.href ? "translate-x-0 bg-blue-600 dark:bg-blue-600" : "bg-black dark:bg-white"}`}
              />
            </Link>
          ))}
        </div>
        <div className="flex gap-5">
          <MobileNav />
          {/* <div className="lg:hidden">
            <ThemeButton />
          </div> */}
        </div>

        <div className="hidden lg:inline-block ">
          <ThemeButton />
        </div>
       
      </section>
    </nav>
  );
}
