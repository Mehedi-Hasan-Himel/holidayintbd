import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <section>
      <Hero />
      <Container className="mt-20 flex flex-col gap-3">
        <section className="mx-10">
          <h1 className="text-center text-3xl">About US</h1>

          <p className="text-lg tracking-wide">
            Holiday International is the country&#39;s first and leading online
            travel aggregator. Since our inception, we have dreamt of making
            travel easier for people of all ages and we move forward to make
            that dream into reality. The dynamic web app lets you book your
            flight, and hotel room and even find your perfect holiday from our
            thousands of holiday packages around the globe.
          </p>
          <p className="text-lg tracking-wide">
            Holiday International is revolutionizing the way you book travel
            services. With Holiday International&#39;s website , booking your
            flight, hotel, or holiday becomes more fun than you would think.
            With exciting games and real rewards like free trips and air
            tickets, Holiday International offers a wide range of amenities as
            well, designed to enhance your life. From travel solutions to
            lifestyle offerings, we provide everything you need.
          </p>
          <p className="text-lg tracking-wide">
            We have more than 250 employees, all experts in their respective
            fields. They have the experience and professionalism to understand
            your travel needs and fulfill them effortlessly within a short time.
            In today&#39;s era of digitalization, everyone has a lot of
            information and endless choices. Our clients still prefer us as we
            provide the best flight rates, exclusive hotel deals and a wide
            range of options for your accommodations and travel plans.
          </p>
        </section>
        <section className="mt-10 flex flex-col items-center justify-evenly gap-5 md:flex-row">
          <div>
            <img
              src="https://i.ibb.co/0FxJ0dC/tin.png"
              alt="about"
              width={500}
              height={500}
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/1GgHj22/triad.png"
              alt="about"
              width={500}
              height={500}
            />
          </div>
        </section>
      </Container>
    </section>
  );
}
