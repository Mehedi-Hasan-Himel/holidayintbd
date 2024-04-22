"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
export default function Room({images}: {images: String[]}) {
  // const slides = [
  //   {
  //     url: "/images/Domestic/Bandarban-Hotel/Bononibash/1.jpeg",
  //   },
  //   {
  //     url: "/images/Domestic/Bandarban-Hotel/Bononibash/2.jpeg",
  //   },
  //   {
  //     url: "/images/Domestic/Bandarban-Hotel/Bononibash/3.jpeg",
  //   },
  //   {
  //     url: "/images/Domestic/Bandarban-Hotel/Bononibash/4.jpeg",
  //   },
  //   {
  //     url: "/images/Domestic/Bandarban-Hotel/Bononibash/5.jpeg",
  //   },
  // ];
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  function nextSlide() {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  function goToSlide(slideIndex: any) {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className=" relative m-auto mt-24 h-[680px] w-full max-w-[1400px] px-4 py-16">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="absolute left-5 top-[50%]  -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white ">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="absolute right-5 top-[50%]  -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white ">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="top-4 flex justify-center py-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer text-2xl"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
