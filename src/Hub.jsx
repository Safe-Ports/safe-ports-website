import { ArrowLeft, ArrowRight } from "lucide-react";

const Brand = () => (
  <a className="brand" href="/">
    <span className="mark"><i /></span>
    <b>OWN TERRA</b>
  </a>
);

const apps = [
  {
    name: "OwnTerra Lands",
    handle: "terra.lands",
    icon: "/icons/app-lands.png",
    glow: "rgba(111,175,107,.30)",
    status: "on",
    landing: "/lands.html",
    video: "/videos/own-terra-demo.mp4",
    poster: "/videos/own-terra-demo-poster.jpg",
    desc: "Lotificación, trazo y subdivisión de terrenos con planos topográficos y control de preventas.",
    tags: ["Planos DWG/PDF", "Compraventa", "Enganches"],
  },
  {
    name: "OwnTerra Properties",
    handle: "terra.properties",
    icon: "/icons/app-properties.png",
    glow: "rgba(84,124,197,.30)",
    status: "on",
    landing: "/properties.html",
    video: "/videos/ownterra_properties.mp4",
    poster: "/videos/ownterra-properties-poster.jpg",
    desc: "Administración de propietarios, inmuebles y unidades rentables desde un solo espacio operativo.",
    tags: ["Propietarios", "Propiedades", "Unidades"],
  },
  {
    name: "OwnTerra Construction",
    handle: "terra.construction",
    icon: "/icons/app-construction.png",
    glow: "rgba(232,189,63,.28)",
    status: "on",
    landing: "/construction.html",
    video: "/videos/own-terra-Constructions.mp4",
    poster: "/videos/own-terra-construction-poster.jpg",
    desc: "Seguimiento de obra para desarrollos habitacionales: avances, bitácora y proveedores.",
    tags: ["Bitácora de obra", "Avances", "Proveedores"],
  },
];

export default function Hub() {

  return (
    <div className="site hubLight">
      <header className="nav">
        <Brand />
        <a className="hubBack" href="/"><ArrowLeft /> Volver al sitio</a>
      </header>

      <main id="top" className="shell">
        <section className="hubHero">
          <div className="eyebrow"><span />Ecosistema Own Terra</div>
          <h1>Elige tu aplicación.</h1>
          <p>Cada módulo abre en su propio espacio, con su navegación y sus datos — este hub solo te lleva ahí. Un ecosistema, una cuenta.</p>
        </section>

        <section className="appGrid">
          {apps.map((app) => {
            const active = app.status === "on";
            return (
              <article key={app.name} className={`appCard${active ? "" : " isSoon"}`} style={{ "--glow": app.glow }}>
                <div className="appTop">
                  <span className={`appStatus ${active ? "on" : "soon"}`}>{active ? "Activo" : "Próximamente"}</span>
                </div>
                <a className={`appPreview${app.video ? " hasVideo" : ""}`} href={app.landing} aria-label={`Conocer ${app.name}`}>
                  {app.video ? (
                    <video autoPlay muted loop playsInline preload="metadata" poster={app.poster} aria-hidden="true">
                      <source src={app.video} type="video/mp4" />
                    </video>
                  ) : null}
                  <div className="appIconWrap"><div className="appIcon"><img src={app.icon} alt="" /></div></div>
                </a>
                <h3 className="appName">{app.name}</h3>
                <p className="appHandle">{app.handle}</p>
                <p className="appDesc">{app.desc}</p>
                <div className="appTags">{app.tags.map((t) => <span key={t}>{t}</span>)}</div>
                {active ? (
                  <a className="appCta" href={app.landing}>
                    Conocer el producto <ArrowRight />
                  </a>
                ) : (
                  <span className="appCta disabled">Próximamente</span>
                )}
              </article>
            );
          })}
        </section>

        <div className="hubFoot">
          <span>Own Terra · Ecosistema operativo para empresas inmobiliarias</span>
          <a href="mailto:safeports.contacto@gmail.com">¿Dudas? Escríbenos</a>
        </div>
      </main>
    </div>
  );
}
