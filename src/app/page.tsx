import { locations } from "@/data/locations";
import { LocationRow } from "@/components/LocationCard";
import { PageLink } from "@/components/links";
import { DuctSlats, Seam, VentMark } from "@/components/marks";

const services = [
  {
    title: "Air duct cleaning",
    text: "Supply and return runs, from the registers back toward the air handler.",
  },
  {
    title: "Dryer vent cleaning",
    text: "Lint removed from the dryer outlet through the exterior termination.",
  },
  {
    title: "Registers and grilles",
    text: "Covers taken down, cleaned, and set back on the same openings.",
  },
  {
    title: "Homes and buildings",
    text: "Houses, apartments, offices, and other occupied Houston properties.",
  },
];

const steps = [
  { n: "01", title: "Access", text: "Open returns and supplies. Set tools at the unit." },
  { n: "02", title: "Agitate", text: "Loosen dust and debris along the duct runs." },
  { n: "03", title: "Extract", text: "Vacuum the system with a contained collector." },
  { n: "04", title: "Close", text: "Clean registers. Restore covers. Walk the work." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute -right-24 top-8 size-[28rem] rounded-full opacity-70 vent-ring md:right-8" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:py-24">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.22em] text-teal">
              Houston, Texas
            </p>
            <h1 className="mt-4 max-w-xl font-display text-[3.1rem] leading-[0.95] tracking-tight md:text-7xl">
              Air duct cleaning.
              <span className="italic text-teal"> Fifteen locations.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-ink/70">
              Call the location nearest the property. Map and phone are on every page.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PageLink href="/locations" variant="primary">
                View locations
              </PageLink>
              <PageLink href="/services" variant="outline">
                Services
              </PageLink>
            </div>
          </div>

          <div className="relative hidden justify-center md:flex">
            <VentMark className="size-64 text-teal" />
          </div>
        </div>
        <DuctSlats className="w-full text-teal" />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-teal">
              Directory
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-tight">
              Find a Houston location
            </h2>
          </div>
          <PageLink href="/locations" variant="ghost" className="hidden px-0 md:inline-flex">
            All location pages
          </PageLink>
        </div>
        <Seam className="my-8" />
        <ol>
          {locations.map((location) => (
            <LocationRow key={location.slug} location={location} />
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-teal">
            Work
          </p>
          <h2 className="mt-2 font-display text-4xl tracking-tight">
            What we clean
          </h2>
          <div className="mt-10 grid gap-px bg-line sm:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="bg-paper-2 p-6 md:p-8">
                <h3 className="font-display text-2xl tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-ink/70">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <PageLink href="/services" variant="outline">
              Service details
            </PageLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-teal">
          Method
        </p>
        <h2 className="mt-2 font-display text-4xl tracking-tight">
          On site
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.n}>
              <p className="font-display text-3xl text-copper/80">{step.n}</p>
              <h3 className="mt-2 font-display text-2xl tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">{step.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
