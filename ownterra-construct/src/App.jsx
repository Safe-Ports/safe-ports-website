import { useState } from "react";
import { ArrowRight, Check, Ruler, Landmark, Database, Zap, FileBarChart2, LogIn, Menu, ShieldCheck, X } from "lucide-react";
import logo from "./assets/logo-mark.png";

const nav = ["Módulos", "Cómo funciona", "Principios", "Acceso clientes"];
const navHrefs = ["#modulos", "#como-funciona", "#principios", "#client-access"];

const services = [
  ["Cuantificación de obra", "Números generadores con hasta 8 columnas, deducciones automáticas y validación por unidad — cero cálculos a mano.", Ruler],
  ["Presupuesto híbrido", "Cada concepto elige su estrategia de cobro: APU, precio alzado o paramétrico. No todo el presupuesto tiene que ser igual.", Landmark],
  ["Catálogo maestro de insumos", "Insumos, básicos y conceptos maestro con rendimientos reutilizables en toda la obra.", Database],
  ["Motor de costos real", "Cascada FASAR → costo horario → costo directo → pie de precios, calculada en vivo, sin montos de vitrina.", Zap],
  ["Reportes de cierre", "Anexo A, Anexo B y carátula general listos para imprimir y firmar al cerrar cada etapa.", FileBarChart2],
];

const bullets = [
  "Árbol de obra en 3 niveles: Proyecto, Fase y Partida",
  "Presupuesto por concepto: APU, precio alzado o paramétrico",
  "Catálogo de insumos con rendimientos y básicos reutilizables",
  "Reportes imprimibles para el cierre de cada etapa",
];

const cases = [
  ["Números generadores", "Cada medición queda registrada con su fórmula, lista para auditar."],
  ["Bypass marcado con ⚡", "Distingue de un vistazo lo que entró directo de lo que viene de un generador."],
  ["Un solo motor de costos", "FASAR, costo horario y pie de precios calculados igual en toda la obra."],
];

const principles = [
  ["01", "Flexibilidad por diseño", "Cada concepto elige su estrategia de cobro: APU, alzado o paramétrico — no todo el presupuesto se fuerza al mismo molde."],
  ["02", "Motor de costos real", "FASAR, costo horario y pie de precios calculados en vivo, no montos de vitrina."],
  ["03", "Trazabilidad total", "Todo número generador queda registrado con su fórmula; lo que entra por bypass directo se marca con ⚡."],
  ["04", "Hecho para la obra real", "Proyecto → Fase → Partida: la jerarquía que de verdad usa una constructora, sin árboles infinitos que nadie llena."],
];

const budgetRows = [
  ["1.01", "Excavación y plantilla", "Cimentación", "312.40 m³", "$487.20", "$152,161"],
  ["1.02", "Zapatas y dados de cimentación", "Cimentación", "86.10 m³", "$3,940.00", "$339,234"],
  ["2.03", "Losa de entrepiso, e=12cm", "Estructura", "540.00 m²", "$812.50", "$438,750"],
  ["3.01", "Muro de block hueco 15cm", "Albañilería", "1,240.00 m²", "$395.00", "$489,800"],
];

const Brand = () => (
  <a className="brand" href="#top">
    <span className="mark"><img src={logo} alt="Ownterra Construct" /></span>
    <b>OWNTERRA CONSTRUCT</b>
  </a>
);

export default function App() {
  const [menu, setMenu] = useState(false);
  const portalUrl = import.meta.env.VITE_OWN_TERRA_URL?.trim() || "https://dev.own-terra.com/construccion";

  function submit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Contacto Ownterra Construct · ${data.get("company") || data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n${data.get("name")}\n${data.get("company") || ""}\n${data.get("email")}`);
    window.location.href = `mailto:safeports.contacto@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="site">
      <header className="nav">
        <Brand />
        <button className="menu" onClick={() => setMenu(!menu)} aria-label="Menú" aria-expanded={menu}>
          {menu ? <X /> : <Menu />}
        </button>
        <nav className={menu ? "links open" : "links"}>
          {nav.map((label, i) => (
            <a key={label} href={navHrefs[i]} onClick={() => setMenu(false)}>{label}</a>
          ))}
          <a className="navCta" href="#contacto">Contacto</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="eyebrow"><span />Con base en México · ERP para constructoras</div>
          <h1>Cuantifica y presupuesta obra con<br /><em>precisión, sin hojas de cálculo.</em></h1>
          <p>
            Ownterra Construct convierte números generadores, presupuesto híbrido y catálogo de insumos en un
            solo sistema, trazable de principio a fin — de la primera medición al cierre de obra.
          </p>
          <div className="actions">
            <a className="button primary" href="#como-funciona">Ver cómo funciona<ArrowRight /></a>
            <a className="button ghost" href="#contacto">Hablemos</a>
          </div>
          <div className="trust">
            <small>Hecho para</small>
            {["Cuantificación de obra", "Presupuesto por concepto", "Catálogo de insumos", "Constructoras y residentes"].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </section>

        <section className="section shell" id="modulos">
          <header>
            <small>Lo que hace</small>
            <h2>Un módulo por cada paso de la obra.</h2>
            <p>De la primera medición al reporte de cierre, sin salir del sistema.</p>
          </header>
          <div className="serviceGrid">
            {services.map(([title, body, Icon]) => (
              <article key={title}>
                <div className="icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell work" id="como-funciona">
          <div className="workCopy">
            <small>Producto insignia</small>
            <h2>Ownterra Construct: un ERP para cuantificar y presupuestar obra.</h2>
            <p>
              Une números generadores, presupuesto híbrido y catálogo maestro de insumos en un solo sistema —
              con la jerarquía real de una constructora: Proyecto → Fase → Partida.
            </p>
            <ul>
              {bullets.map((x) => <li key={x}><Check />{x}</li>)}
            </ul>
            <a className="button outline" href="#contacto">Construye con nosotros<ArrowRight /></a>
          </div>
          <div className="window">
            <div className="bar"><i /><i /><i /><span>ownterra-construct · presupuesto</span></div>
            <div className="product">
              <div><b>PRESUPUESTO · Torre Alameda</b><span>APU</span></div>
              <div className="mockCrumbs">
                <span className="active">Torre Alameda</span>
                <span>Fase 1 · Obra negra</span>
                <span>Cimentación</span>
              </div>
              <table className="mockBudget">
                <thead>
                  <tr><th>Partida</th><th>Fase</th><th>Cantidad</th><th>P.U.</th><th>Importe</th></tr>
                </thead>
                <tbody>
                  {budgetRows.map(([code, name, phase, qty, pu, total]) => (
                    <tr key={code}>
                      <td>{name}<small>{code}</small></td>
                      <td>{phase}</td>
                      <td>{qty}</td>
                      <td>{pu}</td>
                      <td>{total}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr><td colSpan={4}>Presupuesto ejercido</td><td>$1,419,945</td></tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="caseGrid">
            {cases.map(([title, body]) => (
              <article key={title}>
                <span>OWNTERRA CONSTRUCT</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell demoSection">
          <header>
            <small>Ownterra Construct en acción</small>
            <h2>De la medición al presupuesto, sin fricción.</h2>
            <p>Mira cómo Ownterra Construct convierte números generadores y catálogo de insumos en un presupuesto de obra trazable, concepto por concepto.</p>
          </header>
          <div className="demoFrame">
            <div className="demoBar"><span>OWNTERRA CONSTRUCT · PRODUCT FILM</span><i>00:12</i></div>
            <video
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/videos/ownterra-construct-demo-poster.jpg"
              aria-label="Video de demostración de Ownterra Construct"
            >
              <source src="/videos/ownterra-construct-demo.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="demoHint">Activa el sonido para escuchar la presentación</p>
        </section>

        <section className="section shell ownTerraGateway">
          <div>
            <small>Parte del ecosistema</small>
            <h2>Ownterra Construct vive dentro del ecosistema Own Terra.</h2>
            <p>Ventas, CRM, contratos, cobranza y construcción, conectados en una misma plataforma.</p>
          </div>
          <a className="button primary" href="https://dev.own-terra.com/ecosistema" target="_blank" rel="noreferrer">
            Conoce el ecosistema Own Terra<ArrowRight />
          </a>
        </section>

        <section className="section shell clientAccess" id="client-access">
          <div className="accessVisual">
            <div className="accessShield"><ShieldCheck /></div>
            <span>OWNTERRA CONSTRUCT</span>
            <div className="progressMock">
              <div className="progressTop">
                <span>Torre Alameda · Fase 1</span>
                <div>
                  <strong>Avance de obra</strong>
                  <b>62%</b>
                </div>
              </div>
              <div className="progressTrack"><i /></div>
              <div className="progressKpis">
                <div><span>Partidas cerradas</span><strong>34</strong></div>
                <div><span>Presup. ejercido</span><strong>$1.4M</strong></div>
                <div><span>Alertas activas</span><strong>2</strong></div>
              </div>
            </div>
          </div>
          <div className="accessCopy">
            <small>Portal de clientes</small>
            <h2>Tu obra, cuantificada y presupuestada en un solo lugar.</h2>
            <p>Si tu constructora ya usa Ownterra Construct, ingresa desde este portal seguro para gestionar proyectos, presupuesto, catálogo y reportes.</p>
            <div className="secureNote"><ShieldCheck />Acceso seguro y exclusivo para organizaciones registradas</div>
            <a className="button primary accessButton" href={portalUrl} target="_blank" rel="noreferrer">
              Ingresar a Ownterra Construct<LogIn />
            </a>
            <a className="accessHelp" href="mailto:safeports.contacto@gmail.com">¿Necesitas ayuda para entrar? <ArrowRight /></a>
          </div>
        </section>

        <section className="section shell" id="principios">
          <div className="principle">
            <header>
              <small>Por qué Ownterra Construct</small>
              <h2>Precisión y trazabilidad — en cada partida.</h2>
            </header>
            <div className="principleGrid">
              {principles.map(([n, title, body]) => (
                <article key={n}>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell contact" id="contacto">
          <div>
            <small>Contacto</small>
            <h2>Presupuestemos tu próxima obra.</h2>
            <p>Cuéntanos cuántos proyectos manejas y qué estás cuantificando hoy con hojas de cálculo. Respondemos en menos de un día hábil.</p>
            <a href="mailto:safeports.contacto@gmail.com">safeports.contacto@gmail.com</a>
            <span>México</span>
          </div>
          <form onSubmit={submit}>
            <div className="fieldRow">
              <label>Nombre<input required name="name" autoComplete="name" /></label>
              <label>Constructora<input name="company" autoComplete="organization" /></label>
            </div>
            <label>Correo<input required type="email" name="email" autoComplete="email" /></label>
            <label>Mensaje<textarea required name="message" rows="5" /></label>
            <button className="button primary">Enviar mensaje<ArrowRight /></button>
          </form>
        </section>
      </main>

      <footer>
        <Brand />
        <span>© 2026</span>
        <p>Ownterra Construct · Cuantificación y presupuesto de obra · México</p>
      </footer>
    </div>
  );
}
