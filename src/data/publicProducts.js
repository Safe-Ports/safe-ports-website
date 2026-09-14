export const publicProducts = [
  {
    key: "lands",
    name: "OwnTerra Lands",
    handle: "terra.lands",
    status: "implemented",
    statusLabel: { es: "Aplicación web", en: "Web application" },
    description: {
      es: "Inventario y comercialización de terrenos: fraccionamientos, planos, lotes, clientes, contratos, cobranza, documentos y reportes.",
      en: "Land inventory and sales: developments, maps, lots, clients, contracts, collections, documents, and reporting.",
    },
    tags: {
      es: ["Fraccionamientos", "Lotes", "Contratos y cobranza"],
      en: ["Developments", "Lots", "Contracts and collections"],
    },
    cta: { es: "Conocer Lands", en: "Explore Lands" },
    icon: "/icons/app-lands.png",
    accent: "#4fe8cd",
    glow: "rgba(111,175,107,.30)",
    landing: "/lands.html",
    video: "/videos/own-terra-demo.mp4",
    poster: "/videos/own-terra-demo-poster.jpg",
  },
  {
    key: "properties",
    name: "OwnTerra Properties",
    handle: "terra.properties",
    status: "prototype",
    statusLabel: { es: "Vista previa funcional", en: "Functional preview" },
    description: {
      es: "Portafolio, propietarios, propiedades, unidades, comunidades, rentas y operación. La experiencia actual es un prototipo funcional con datos demo o locales.",
      en: "Portfolio, owners, properties, units, communities, rentals, and operations. The current experience is a functional preview using demo or local data.",
    },
    tags: {
      es: ["Propietarios", "Propiedades", "Unidades"],
      en: ["Owners", "Properties", "Units"],
    },
    cta: { es: "Ver vista previa", en: "See the preview" },
    icon: "/icons/app-properties.png",
    accent: "#7c9dff",
    glow: "rgba(84,124,197,.30)",
    landing: "/properties.html",
    video: "/videos/ownterra_properties.mp4",
    poster: "/videos/ownterra-properties-poster.jpg",
  },
  {
    key: "construction",
    name: "OwnTerra Construction",
    handle: "terra.construction",
    status: "exploration",
    statusLabel: { es: "Exploración", en: "Exploration" },
    description: {
      es: "Concepto de seguimiento de obra. Aún no es una vertical operativa ni tiene rutas activas dentro de la aplicación autenticada.",
      en: "Construction-tracking concept. It is not yet an operational vertical and has no active routes in the authenticated application.",
    },
    tags: {
      es: ["Concepto", "Sin módulo operativo", "Por validar"],
      en: ["Concept", "No operational module", "To be validated"],
    },
    cta: { es: "Conocer la exploración", en: "View the exploration" },
    icon: "/icons/app-construction.png",
    accent: "#e8bd3f",
    glow: "rgba(232,189,63,.28)",
    landing: "/construction.html",
    video: "/videos/own-terra-Constructions.mp4",
    poster: "/videos/own-terra-construction-poster.jpg",
  },
];

export function getPublicProduct(key) {
  return publicProducts.find((product) => product.key === key);
}
