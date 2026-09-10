import type { Metadata } from "next";
import { PageLink } from "@/components/links";
import { Seam } from "@/components/marks";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Air duct cleaning, dryer vent cleaning, and register cleaning in Houston.",
};

const services = [
  {
    title: "Air duct cleaning",
    points: [
      "Supply and return ducts",
      "Access at the air handler",
      "Debris extracted from the runs",
    ],
  },
  {
    title: "Dryer vent cleaning",
    points: [
      "Interior dryer connection",
      "The vent path through the wall or roof",
      "Exterior hood cleared of lint",
    ],
  },
  {
    title: "Registers and grilles",
    points: [
      "Covers removed and washed",
      "Openings vacuumed",
      "Covers returned to the same rooms",
    ],
  },
  {
    title: "Homes and businesses",
    points: [
      "Single-family houses",
      "Apartments and small offices",
      "Retail and other occupied spaces",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <p className="text-[0.7rem] uppercase tracking-[0.18em] text-teal">
        Services
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-5xl tracking-tight md:text-6xl">
        The work, kept to the system.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-7 text-ink/70">
        Ducts, dryer vents, and the covers that sit on them. Call a location for
        the property you have in mind.
      </p>
      <Seam className="my-12" />

      <div className="grid gap-10 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="border-t border-line pt-6">
            <h2 className="font-display text-3xl tracking-tight">
              {service.title}
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-ink/75">
              {service.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-teal" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap gap-3">
        <PageLink href="/locations" variant="primary">
          Choose a location
        </PageLink>
        <PageLink href="/about" variant="outline">
          About the company
        </PageLink>
      </div>
    </div>
  );
}
