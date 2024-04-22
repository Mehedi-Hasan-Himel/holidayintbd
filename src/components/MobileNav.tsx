import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeButton from "./ThemeButton";
import { usePathname } from "next/navigation";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.09],
    },
  },
};

const MobileNav = () => {
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

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className=" text-primary  lg:hidden ">
      {/* Nav Open */}
      <div
        onClick={() => setOpenMenu(true)}
        className="cursor-pointer text-3xl"
      >
        <CgMenuRight></CgMenuRight>
      </div>
      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className=" absolute right-0 top-0 z-20 h-screen w-full max-w-xs bg-white shadow-2xl dark:bg-black "
        // backdrop-blur supports-[backdrop-filter]:bg-background/60
      >
        {/* icon */}
        <div
          onClick={() => setOpenMenu(false)}
          className="absolute left-4 top-5 z-30 cursor-pointer text-4xl text-primary"
        >
          <IoMdClose></IoMdClose>
        </div>
        {/* menu list start*/}
        <div className="font-primary  flex h-full cursor-pointer flex-col items-center  justify-start gap-y-8 pt-20 text-3xl font-bold text-primary  dark:text-white">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className={`group relative overflow-hidden ${
                  pathName === item.href && "text-blue-600"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 inline-flex h-[1px] w-full -translate-x-[-250%] duration-300 group-hover:translate-x-0 dark:bg-white ${
                    pathName === item.href
                      ? "translate-x-0 bg-blue-600 dark:bg-blue-600"
                      : "bg-black dark:bg-white"
                  }`}
                />
              </Link>
            </div>
          ))}
          {/* <Link href="/">Home</Link>

          <Link href="/services">Services</Link>

          <Link href="/experience">Experience</Link>

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link> */}

          <ThemeButton />
        </div>
        {/* menu list start*/}
      </motion.div>
    </nav>
  );
};

export default MobileNav;
