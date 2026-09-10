import type { Metadata } from "next";
import { services } from "@/data/media";
import { PageBanner, ServicePhoto } from "@/components/Photo";
import { PageLink } from "@/components/links";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Air duct cleaning, dryer vent cleaning, and register cleaning in Houston.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner kicker="Services" title="The work, kept to the system.">
        <p className="mt-5 max-w-xl text-base leading-7 text-paper/75">
          Ducts, dryer vents, and the covers that sit on them. Call a location for
          the property you have in mind.
        </p>
      </PageBanner>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="border border-line bg-paper">
              <ServicePhoto src={service.image.src} alt={service.image.alt} />
              <div className="p-6 md:p-8">
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
              </div>
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
    </>
  );
}
