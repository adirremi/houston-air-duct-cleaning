export type Location = {
  slug: string;
  street: string;
  zip: string;
  neighborhood: string;
  region: "Downtown & Midtown" | "East" | "West & Southwest" | "North";
  phone: string;
  mapUrl: string;
};

export const locations: Location[] = [
  {
    slug: "1315-sterrett-st",
    street: "1315 Sterrett St",
    zip: "77002",
    neighborhood: "Downtown",
    region: "Downtown & Midtown",
    phone: "346-776-0790",
    mapUrl: "https://maps.app.goo.gl/p3xAQGhv94vmeo8A9",
  },
  {
    slug: "300-w-gray-st",
    street: "300 W Gray St",
    zip: "77002",
    neighborhood: "Midtown",
    region: "Downtown & Midtown",
    phone: "346-776-0792",
    mapUrl: "https://maps.app.goo.gl/Su8tqgRDLojLuyTW8",
  },
  {
    slug: "4603-geneva-dr",
    street: "4603 Geneva Dr",
    zip: "77002",
    neighborhood: "East Downtown",
    region: "Downtown & Midtown",
    phone: "346-776-0797",
    mapUrl: "https://maps.app.goo.gl/giVFtrWhtEB7Sx81A",
  },
  {
    slug: "2625-louisiana-st",
    street: "2625 Louisiana St",
    zip: "77006",
    neighborhood: "Midtown",
    region: "Downtown & Midtown",
    phone: "346-776-0812",
    mapUrl: "https://maps.app.goo.gl/Qv5wxprqkVBmPskPA",
  },
  {
    slug: "407-travis-st",
    street: "407 Travis St",
    zip: "77002",
    neighborhood: "Downtown",
    region: "Downtown & Midtown",
    phone: "346-776-0799",
    mapUrl: "https://maps.app.goo.gl/Pm6N4d6FDKzQm9tEA",
  },
  {
    slug: "710-main-st",
    street: "710 Main St",
    zip: "77002",
    neighborhood: "Downtown",
    region: "Downtown & Midtown",
    phone: "346-776-0808",
    mapUrl: "https://maps.app.goo.gl/DHbgJHq38wzfEQzf9",
  },
  {
    slug: "3102-canal-st",
    street: "3102 Canal St",
    zip: "77003",
    neighborhood: "East End",
    region: "East",
    phone: "346-766-1276",
    mapUrl: "https://maps.app.goo.gl/x3daobYbZeFg9zJc6",
  },
  {
    slug: "5006-westheimer-rd",
    street: "5006 Westheimer Rd",
    zip: "77056",
    neighborhood: "Galleria",
    region: "West & Southwest",
    phone: "346-776-0813",
    mapUrl: "https://maps.app.goo.gl/EEwVZPYw2sAkZKKu6",
  },
  {
    slug: "10775-eastex-fwy",
    street: "10775 Eastex Fwy",
    zip: "77093",
    neighborhood: "North Houston",
    region: "North",
    phone: "346-776-0817",
    mapUrl: "https://maps.app.goo.gl/E2aTVk8sNFejgrN26",
  },
  {
    slug: "10590-northwest-fwy",
    street: "10590 Northwest Fwy",
    zip: "77092",
    neighborhood: "Northwest",
    region: "North",
    phone: "346-776-0818",
    mapUrl: "https://maps.app.goo.gl/vjkyDmw7bjruw4BJ7",
  },
  {
    slug: "250-meyerland-plz",
    street: "250 Meyerland Plz",
    zip: "77096",
    neighborhood: "Meyerland",
    region: "West & Southwest",
    phone: "346-767-6380",
    mapUrl: "https://maps.app.goo.gl/ZxyVu7pURQxMSNgKA",
  },
  {
    slug: "9188-bellaire-blvd",
    street: "9188 Bellaire Blvd",
    zip: "77036",
    neighborhood: "Bellaire Corridor",
    region: "West & Southwest",
    phone: "346-767-6381",
    mapUrl: "https://maps.app.goo.gl/E9VVJpt9YH4wnJJ67",
  },
  {
    slug: "7690-san-felipe-st",
    street: "7690 San Felipe St",
    zip: "77063",
    neighborhood: "Uptown",
    region: "West & Southwest",
    phone: "346-767-6384",
    mapUrl: "https://maps.app.goo.gl/KBWwppz1W4JZJo4m9",
  },
  {
    slug: "6100-westheimer-rd",
    street: "6100 Westheimer Rd",
    zip: "77057",
    neighborhood: "Galleria West",
    region: "West & Southwest",
    phone: "346-776-0825",
    mapUrl: "https://maps.app.goo.gl/wJDaqJQNN6vrA3VW7",
  },
  {
    slug: "6606-tidwell-rd",
    street: "6606 Tidwell Rd",
    zip: "77016",
    neighborhood: "Northeast",
    region: "North",
    phone: "346-797-0061",
    mapUrl: "https://maps.app.goo.gl/FJWCy69wGk3ae8mW8",
  },
];

export const regions = [
  "Downtown & Midtown",
  "East",
  "West & Southwest",
  "North",
] as const;

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export function fullAddress(location: Location) {
  return `${location.street}, Houston, TX ${location.zip}, United States`;
}

export function telHref(phone: string) {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}

export function mapsEmbedSrc(location: Location) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress(location))}&z=15&output=embed`;
}

export function nearbyLocations(slug: string, limit = 3) {
  const current = getLocation(slug);
  if (!current) return locations.slice(0, limit);

  const sameRegion = locations.filter(
    (location) => location.slug !== slug && location.region === current.region,
  );
  const rest = locations.filter(
    (location) => location.slug !== slug && location.region !== current.region,
  );

  return [...sameRegion, ...rest].slice(0, limit);
}
