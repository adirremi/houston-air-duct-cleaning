import type { Metadata } from "next";
import { locations } from "@/data/locations";
import { photos } from "@/data/media";
import { PageBanner, ServicePhoto } from "@/components/Photo";
import { PageLink } from "@/components/links";

export const metadata: Metadata = {
  title: "About",
  description:
    "Houston Air Duct Cleaning operates fifteen service locations across the city.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner kicker="About" title="A Houston shop, spread across the city.">
        <p className="mt-5 max-w-xl text-base leading-7 text-paper/75">
          Fifteen addresses. Each one has its own phone and map. Use the location
          closest to the building.
        </p>
      </PageBanner>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid items-start gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="max-w-xl text-base leading-7 text-ink/70">
              Houston Air Duct Cleaning works from fifteen addresses across the
              city. The work is air ducts, dryer vents, and the registers on the
              walls and floors. That is the list.
            </p>
          </div>
          <ServicePhoto
            src={photos.buildings.src}
            alt={photos.buildings.alt}
            className="aspect-[4/3]"
          />
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          <article>
            <p className="font-display text-5xl text-copper/80">
              {String(locations.length).padStart(2, "0")}
            </p>
            <h2 className="mt-2 font-display text-2xl">Locations</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              Downtown through the Galleria, Meyerland, the East End, and the north
              freeways.
            </p>
          </article>
          <article>
            <p className="font-display text-5xl text-copper/80">TX</p>
            <h2 className="mt-2 font-display text-2xl">Houston only</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              Every address on this site is inside Houston city limits.
            </p>
          </article>
          <article>
            <p className="font-display text-5xl text-copper/80">2</p>
            <h2 className="mt-2 font-display text-2xl">Systems</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              HVAC ducts and dryer vents. Each job is booked at the location page.
            </p>
          </article>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <PageLink href="/locations" variant="primary">
            See every address
          </PageLink>
          <PageLink href="/contact" variant="outline">
            Contact
          </PageLink>
        </div>
      </div>
    </>
  );
}
