import type { Metadata } from "next";
import { locations, regions } from "@/data/locations";
import { LocationCard } from "@/components/LocationCard";
import { Seam } from "@/components/marks";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Fifteen Houston Air Duct Cleaning locations with phone numbers and maps.",
};

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <p className="text-[0.7rem] uppercase tracking-[0.18em] text-teal">
        Locations
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-5xl tracking-tight md:text-6xl">
        Fifteen addresses. One city.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-7 text-ink/70">
        Each location has a direct number and a Google Map. Open the page for
        the street you need.
      </p>
      <Seam className="my-12" />

      <div className="space-y-14">
        {regions.map((region) => {
          const group = locations.filter((location) => location.region === region);
          return (
            <section key={region}>
              <h2 className="font-display text-3xl tracking-tight">{region}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.map((location) => (
                  <LocationCard
                    key={location.slug}
                    location={location}
                    index={locations.indexOf(location)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
