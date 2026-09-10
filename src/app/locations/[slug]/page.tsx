import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  fullAddress,
  getLocation,
  locations,
  mapsEmbedSrc,
  nearbyLocations,
} from "@/data/locations";
import { LocationJsonLd } from "@/components/JsonLd";
import { LocationCard } from "@/components/LocationCard";
import { MapLink, PageLink, PhoneLink } from "@/components/links";
import { Seam } from "@/components/marks";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};

  const title = `${location.street}, Houston`;
  const description = `Air duct cleaning at ${location.street}, ${location.neighborhood}. Call ${location.phone}.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const streetNumber = location.street.split(" ")[0];
  const nearby = nearbyLocations(location.slug);
  const index = locations.findIndex((item) => item.slug === location.slug);

  return (
    <>
      <LocationJsonLd location={location} />
      <article className="relative overflow-hidden">
        <p
          className="pointer-events-none absolute -right-4 top-8 font-display text-[8rem] leading-none text-teal/[0.07] md:right-8 md:text-[12rem]"
          aria-hidden
        >
          {streetNumber}
        </p>

        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-teal">
            {String(index + 1).padStart(2, "0")} · {location.neighborhood}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl tracking-tight md:text-6xl">
            {location.street}
          </h1>
          <p className="mt-3 text-base text-ink/70">
            Houston, TX {location.zip}
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink/70">
            Air duct and dryer vent cleaning from this Houston location. Call or
            open the map for {location.neighborhood}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <PhoneLink phone={location.phone} className="min-w-48" />
            <MapLink href={location.mapUrl} className="min-w-40" />
          </div>

          <Seam className="my-12" />

          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="overflow-hidden border border-line bg-paper-2">
              <iframe
                title={`Map of ${location.street}`}
                src={mapsEmbedSrc(location)}
                className="h-80 w-full border-0 lg:h-full min-h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <aside className="border border-line bg-paper p-6">
              <h2 className="font-display text-2xl tracking-tight">
                This location
              </h2>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-teal">
                    Address
                  </dt>
                  <dd className="mt-1 leading-6">{fullAddress(location)}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-teal">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <PhoneLink
                      phone={location.phone}
                      variant="ghost"
                      className="px-0 py-0 text-base"
                    />
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-teal">
                    Area
                  </dt>
                  <dd className="mt-1">
                    {location.neighborhood} · {location.region}
                  </dd>
                </div>
              </dl>
              <MapLink href={location.mapUrl} className="mt-8 w-full" />
            </aside>
          </div>

          <section className="mt-16">
            <h2 className="font-display text-3xl tracking-tight">
              Nearby locations
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {nearby.map((item) => (
                <LocationCard
                  key={item.slug}
                  location={item}
                  index={locations.indexOf(item)}
                />
              ))}
            </div>
            <div className="mt-8">
              <PageLink href="/locations" variant="outline">
                All locations
              </PageLink>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
