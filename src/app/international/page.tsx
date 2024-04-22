import React from "react";
import Place from "@/components/Place";
import { getInternationalPlaces } from "@/services/placeService";
import AdminPlace from "@/components/admin/AdminPlace";
import { cookies } from "next/headers";
import validateAdmin from "@/lib/validateAdmin";
import AddPlace from "@/components/admin/AddPlace";


export default async function page() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  const isAdmin = await validateAdmin(token?.value)

  try {
    const InternationalPlaces = await getInternationalPlaces();

    return (
      <section className="mx-auto mt-20 flex max-w-screen-xl flex-col gap-3 px-0 py-10 xl:px-0">
        <div>
          <h1 className="mb-5 p-5 text-center font-semibold lg:text-5xl">
            International&apos;s Destination
          </h1>
          <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
            {isAdmin ? (
              <AddPlace />
            ) : null}
            {InternationalPlaces.map((place) => {
              const placeID = place._id.toString();

              if (isAdmin) {
                return (
                  <AdminPlace
                    place={{
                      id: placeID,
                      name: place.name,
                      image: place.image,
                    }}
                    key={placeID}
                  />
                );
              } else {
                return (
                  <Place
                    place={{
                      id: placeID,
                      name: place.name,
                      image: place.image,
                    }}
                    key={placeID}
                  />
                );
              }
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
