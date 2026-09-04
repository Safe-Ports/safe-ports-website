import { ArrowLeft, ArrowRight, Check, Layers3, ShieldCheck, Sparkles } from "lucide-react";

const products = {
  lands: {
    name: "OwnTerra Lands", handle: "terra.lands", accent: "#4fe8cd", icon: "/icons/app-lands.png",
    eyebrow: "Operación comercial de terrenos",
    title: "Del plano al contrato, sin perder el control.",
    intro: "Centraliza desarrollos, lotes, disponibilidad, clientes, contratos y cobranza en un espacio diseñado para equipos que venden tierra.",
    video: "/videos/own-terra-demo.mp4", poster: "/videos/own-terra-demo-poster.jpg", appPath: "/dashboard",
    outcomes: ["Inventario actualizado para todo el equipo", "Seguimiento comercial de punta a punta", "Cobranza y documentos ligados a cada operación"],
    features: [
      ["Inventario visual", "Organiza fraccionamientos y lotes con estatus, superficies, precios y disponibilidad."],
      ["CRM inmobiliario", "Da seguimiento a prospectos, clientes, visitas y oportunidades desde un mismo flujo."],
      ["Contratos y cobranza", "Conecta la venta con documentos, anticipos, saldos y próximos pagos."],
    ],
    shots: [["/dashboard/core.png", "Panel operativo"], ["/dashboard/gestion-lotes.png", "Gestión de lotes"], ["/dashboard/clientes.png", "Clientes y seguimiento"], ["/dashboard/contratos.png", "Contratos"]],
  },
  properties: {
    name: "OwnTerra Properties", handle: "terra.properties", accent: "#7c9dff", icon: "/icons/app-properties.png",
    eyebrow: "Administración de inmuebles",
    title: "Tu portafolio inmobiliario, en un solo lugar.",
    intro: "Coordina propietarios, propiedades y unidades rentables con una vista clara de la operación y una base lista para crecer.",
    video: "/videos/ownterra_properties.mp4", poster: "/videos/ownterra-properties-poster.jpg", appPath: "/properties",
    outcomes: ["Información ordenada por propietario", "Visibilidad por propiedad y unidad", "Operación preparada para múltiples portafolios"],
    features: [
      ["Propietarios", "Concentra datos de contacto, portafolio asignado y contexto operativo de cada propietario."],
      ["Propiedades", "Gestiona inmuebles, imágenes, ubicación y características sin perder su relación jerárquica."],
      ["Unidades", "Distingue espacios disponibles, rentados, en mantenimiento o archivados dentro de cada propiedad."],
    ],
    shots: [["/screenshots/properties-operations.jpg", "Operación centralizada"], ["/screenshots/properties-portfolio.jpg", "Vista del portafolio"]],
  },
  construction: {
    name: "OwnTerra Construction", handle: "terra.construct", accent: "#e8bd3f", icon: "/icons/app-construction.png",
    eyebrow: "Control de obra y presupuesto",
    title: "Convierte la obra en información accionable.",
    intro: "Estructura proyectos, cuantifica conceptos y controla presupuestos para que dirección y campo trabajen sobre la misma realidad.",
    video: "/videos/own-terra-Constructions.mp4", poster: "/videos/own-terra-construction-poster.jpg", appPath: "/construccion",
    outcomes: ["Presupuestos trazables por concepto", "Avance visible para campo y dirección", "Catálogos reutilizables entre proyectos"],
    features: [
      ["Estructura de obra", "Organiza fases, partidas y conceptos con una WBS clara y controlable."],
      ["Cuantificación y APU", "Trabaja generadores, insumos, rendimientos y presupuestos híbridos desde el proyecto."],
      ["Reportes ejecutivos", "Resume costos, avance y utilidad con información lista para revisión y exportación."],
    ],
    shots: [["/screenshots/construction-budget.jpg", "Presupuesto y costos"], ["/screenshots/construction-progress.jpg", "Avance de obra"]],
  },
};

const Brand = () => <a className="brand" href="/"><span className="mark"><i /></span><b>OWN TERRA</b></a>;

export default function ProductLanding({ productKey }) {
  const product = products[productKey];
  const appBase = import.meta.env.VITE_OWN_TERRA_URL?.trim() || "https://dev.own-terra.com/";
  const appUrl = new URL(product.appPath.replace(/^\//, ""), `${appBase.replace(/\/+$/, "")}/`).toString();

  return <div className="site productLanding" style={{ "--product": product.accent }}>
    <header className="nav productNav"><Brand /><nav><a href="/hub.html"><ArrowLeft /> Ecosistema</a><a className="navCta productNavCta" href={appUrl} target="_blank" rel="noreferrer">Abrir aplicación <ArrowRight /></a></nav></header>
    <main>
      <section className="productHero shell">
        <div className="productHeroCopy">
          <div className="productIdentity"><img src={product.icon} alt="" /><span>{product.handle}</span></div>
          <p className="productEyebrow">{product.eyebrow}</p>
          <h1>{product.title}</h1><p className="productIntro">{product.intro}</p>
          <div className="actions"><a className="button productButton" href={appUrl} target="_blank" rel="noreferrer">Entrar a {product.name.replace("OwnTerra ", "")} <ArrowRight /></a><a className="button ghost" href="#funciones">Conocer funciones</a></div>
          <div className="productTrust"><ShieldCheck /> Acceso seguro por organización y permisos</div>
        </div>
        <div className="productHeroMedia"><video autoPlay muted loop playsInline preload="metadata" poster={product.poster}><source src={product.video} type="video/mp4" /></video></div>
      </section>

      <section className="productOutcomes shell">{product.outcomes.map(item => <div key={item}><Check /><span>{item}</span></div>)}</section>

      <section className="productSection shell" id="funciones"><header><small>CAPACIDADES PRINCIPALES</small><h2>Todo lo esencial para operar con claridad.</h2></header><div className="productFeatureGrid">{product.features.map(([title, body], index) => <article key={title}><span>0{index + 1}</span>{index === 0 ? <Layers3 /> : index === 1 ? <Sparkles /> : <ShieldCheck />}<h3>{title}</h3><p>{body}</p></article>)}</div></section>

      <section className="productSection productScreens shell"><header><small>EL PRODUCTO EN ACCIÓN</small><h2>Una interfaz hecha para el trabajo real.</h2><p>Explora algunas de las vistas que conectan la operación diaria de tu equipo.</p></header><div className={`productGallery gallery${product.shots.length}`}>{product.shots.map(([src, label]) => <figure key={src}><img src={src} alt={`Captura de ${label} en ${product.name}`} loading="lazy" /><figcaption>{label}</figcaption></figure>)}</div></section>

      <section className="productFinal shell"><div><img src={product.icon} alt="" /><small>{product.handle}</small><h2>Conoce {product.name} trabajando con tu operación.</h2></div><a className="button productButton" href={appUrl} target="_blank" rel="noreferrer">Abrir aplicación <ArrowRight /></a></section>
    </main>
    <footer><Brand /><span>© 2026</span><p>{product.name} · Parte del ecosistema Own Terra</p></footer>
  </div>;
}
