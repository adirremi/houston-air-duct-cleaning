import type { Metadata } from "next";
import Link from "next/link";
import { locations, regions, telHref } from "@/data/locations";
import { PageBanner } from "@/components/Photo";
import { MapLink, PhoneLink } from "@/components/links";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Phone numbers and maps for every Houston Air Duct Cleaning location.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner kicker="Contact" title="Call the location that fits the job.">
        <p className="mt-5 max-w-xl text-base leading-7 text-paper/75">
          Numbers below ring that address. Maps open in Google Maps.
        </p>
      </PageBanner>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <div className="space-y-12">
        {regions.map((region) => (
          <section key={region}>
            <h2 className="text-[0.7rem] uppercase tracking-[0.18em] text-teal">
              {region}
            </h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {locations
                .filter((location) => location.region === region)
                .map((location) => (
                  <li
                    key={location.slug}
                    className="grid gap-4 py-5 md:grid-cols-[1fr_auto] md:items-center"
                  >
                    <div>
                      <Link
                        href={`/locations/${location.slug}`}
                        className="font-display text-2xl tracking-tight hover:text-teal"
                      >
                        {location.street}
                      </Link>
                      <p className="mt-1 text-sm text-ink/60">
                        {location.neighborhood} · Houston, TX {location.zip}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <PhoneLink phone={location.phone} />
                      <a
                        href={telHref(location.phone)}
                        className="sr-only"
                      >
                        {location.phone}
                      </a>
                      <MapLink href={location.mapUrl} />
                    </div>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
      </div>
    </>
  );
}
