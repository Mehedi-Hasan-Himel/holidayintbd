import React from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const destination = [
  {
    id: 1,
    title: "Tropical",
    desc: "Exotic Places",
    image: "https://i.ibb.co/VD99sS7/Tropical.png",
  },
  {
    id: 2,
    title: "Stunning ",
    desc: "Far Away Places",
    image: "https://i.ibb.co/SwKW9DY/Stunning.png",
  },
  {
    id: 3,
    title: "Relaxing",
    desc: "Holiday",
    image: "https://i.ibb.co/4TRftb1/Relaxing.png",
  },
  {
    id: 4,
    title: "Romantic",
    desc: "Wine Tour",
    image: "https://i.ibb.co/F5vpTCG/Romantic.png",
  },
];

export default function Promotions() {
  return (
    <section className="my-5 gap-0">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {destination.map((place) => (
            <div
              key={place.id}
              className="relative h-[650px] overflow-hidden  shadow-md"
            >
              <img
                className="h-full w-full object-fill"
                src={place.image}
                alt={place.desc}
                // fill
                // height={240}
                // width={433}
                // layout="fill"
                // style={{objectFit:"cover"}}
                // objectFit="cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-40 pb-10">
                <p className="text-md font-bold italic text-white">
                  {place.title}
                </p>
                <br />
                <p className="text-2xl font-bold text-white">{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
