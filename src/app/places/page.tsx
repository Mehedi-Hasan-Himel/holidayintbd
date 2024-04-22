import React from "react";
import Place from "@/components/Place";
import { getPlaces } from "@/services/placeService";

// export const revalidate = 21600 // revalidate at most every 6hours

export default async function page() {
  try {
    const Places = await getPlaces();

    return (
      <section className="mx-auto mt-20 flex max-w-screen-xl flex-col gap-3 px-0 py-10 xl:px-0">
        <div>
          <h1 className="mb-5 p-5 text-center font-semibold lg:text-5xl">Our Places</h1>
            <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
              {Places.map((place) => {
                const placeID = place._id.toString();

                return (
                  <Place
                    place={{ id:placeID, name: place.name, image: place.image }}
                    key={placeID}
                  />
                );
              })}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error(error);
    return <div>Failed to fetch data</div>;
  }
}
