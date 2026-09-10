import type { Metadata } from "next";
import { locations, regions } from "@/data/locations";
import { LocationCard } from "@/components/LocationCard";
import { PageBanner } from "@/components/Photo";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Fifteen Houston Air Duct Cleaning locations with phone numbers and maps.",
};

export default function LocationsPage() {
  return (
    <>
      <PageBanner kicker="Locations" title="Fifteen addresses. One city.">
        <p className="mt-5 max-w-xl text-base leading-7 text-paper/75">
          Each location has a direct number and a Google Map. Open the page for
          the street you need.
        </p>
      </PageBanner>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
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
    </>
  );
}
