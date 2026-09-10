import Link from "next/link";
import { locations, regions, telHref } from "@/data/locations";
import { VentMark } from "@/components/marks";

export function Footer() {
  return (
    <footer className="mt-auto bg-teal-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.1fr_2fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <VentMark className="size-8" />
            <p className="font-display text-xl">Houston Air Duct</p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-paper/75">
            Air duct and dryer vent cleaning from fifteen Houston locations.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {regions.map((region) => (
            <div key={region}>
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-mist">
                {region}
              </p>
              <ul className="mt-3 space-y-2">
                {locations
                  .filter((location) => location.region === region)
                  .map((location) => (
                    <li key={location.slug}>
                      <Link
                        href={`/locations/${location.slug}`}
                        className="text-sm text-paper/85 hover:text-paper"
                      >
                        {location.street}
                      </Link>
                      <a
                        href={telHref(location.phone)}
                        className="ml-2 text-sm text-mist hover:text-paper"
                      >
                        {location.phone}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 text-xs text-paper/55 md:flex-row md:justify-between md:px-8">
          <p>Houston Air Duct Cleaning</p>
          <p>Houston, Texas</p>
        </div>
      </div>
    </footer>
  );
}
