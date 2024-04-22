import React from "react";
import Hero from "../Hero";
import Container from "../Container";
import BangladeshDestination from "./BangladeshDestination";
import InternationalDestination from "./InternationalDestination";
import WhatsApp from "../WhatsApp";
import Promotions from "./Promotions";

import Domestic from "@/app/domestic/page";
import International from "@/app/international/page";

export default function HomePage() {
  return (
    <>
      {/* <WhatsApp /> */}
      <Hero />
      {/* <Container>
        <BangladeshDestination />
      </Container> */}
      <Domestic />

      <Promotions />
      {/* <Container>
        <InternationalDestination />
      </Container> */}
      <International />

    </>
  );
}
