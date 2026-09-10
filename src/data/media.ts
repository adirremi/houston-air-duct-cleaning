export const photos = {
  hero: {
    src: "/images/hero-ducts.jpg",
    alt: "Galvanized air ducts in a mechanical room",
  },
  ducts: {
    src: "/images/service-ducts.jpg",
    alt: "Inside a metal air duct with a cleaning hose",
  },
  dryer: {
    src: "/images/service-dryer.jpg",
    alt: "Exterior dryer vent on a brick wall",
  },
  registers: {
    src: "/images/service-registers.jpg",
    alt: "Floor register grille on hardwood",
  },
  buildings: {
    src: "/images/service-buildings.jpg",
    alt: "Houston house and office with outdoor HVAC equipment",
  },
  texture: {
    src: "/images/texture-metal.jpg",
    alt: "",
  },
} as const;

export const services = [
  {
    title: "Air duct cleaning",
    text: "Supply and return runs, from the registers back toward the air handler.",
    image: photos.ducts,
    points: [
      "Supply and return ducts",
      "Access at the air handler",
      "Debris extracted from the runs",
    ],
  },
  {
    title: "Dryer vent cleaning",
    text: "Lint removed from the dryer outlet through the exterior termination.",
    image: photos.dryer,
    points: [
      "Interior dryer connection",
      "The vent path through the wall or roof",
      "Exterior hood cleared of lint",
    ],
  },
  {
    title: "Registers and grilles",
    text: "Covers taken down, cleaned, and set back on the same openings.",
    image: photos.registers,
    points: [
      "Covers removed and washed",
      "Openings vacuumed",
      "Covers returned to the same rooms",
    ],
  },
  {
    title: "Homes and buildings",
    text: "Houses, apartments, offices, and other occupied Houston properties.",
    image: photos.buildings,
    points: [
      "Single-family houses",
      "Apartments and small offices",
      "Retail and other occupied spaces",
    ],
  },
] as const;
