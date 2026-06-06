import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  Check,
  CircleDot,
  Hammer,
  Home,
  Map,
  Megaphone,
  Network,
  Users,
} from "lucide-react";
import { loginUrl, quickBenefits, trustSignals } from "../data/content.js";

const orbitApps = [
  { label: "Construcción",    icon: Hammer,         position: "left-[18%]  top-[5%]  w-[220px]" },
  { label: "Marketing",       icon: Megaphone,      position: "right-[16%] top-[5%]  w-[210px]" },
  { label: "Own Terra Lands", icon: Map,            position: "left-[0%]   top-[26%] w-[230px]" },
  { label: "Neighborhoods",   icon: Building2,      position: "right-[0%]  top-[26%] w-[235px]" },
  { label: "CRM",             icon: Users,          position: "right-[5%]  top-[57%] w-[180px]" },
  { label: "Homes",           icon: Home,           position: "left-[4%]   top-[59%] w-[180px]" },
  { label: "Finanzas",        icon: BadgeDollarSign, position: "left-[28%] top-[61%] w-[190px]" },
];

function IconTile({ children, className = "" }) {
  return (
    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-terra-50 text-terra-700 ${className}`}>
      {children}
    </span>
  );
}

function EcosystemVisual() {
  return (
    <div className="relative mx-auto mt-12 min-h-[700px] w-full max-w-[780px] lg:mt-0">
      <div className="absolute inset-0 rounded-[2rem] bg-grid-soft bg-[size:30px_30px] opacity-70" />
      <div className="absolute inset-5 rounded-[2rem] border border-terra-200/70 bg-white/65 shadow-panel backdrop-blur-2xl" />
      <div className="absolute inset-0 bg-radial-mint" />

      <div className="absolute left-1/2 top-1/2 h-[1px] w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-terra-300 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-[72%] w-[1px] -translate-y-1/2 bg-gradient-to-b from-transparent via-terra-300 to-transparent" />
      <div className="absolute left-[16%] top-[16%] h-[68%] w-[68%] rounded-full border border-dashed border-terra-300/70" />
      <div className="absolute left-[29%] top-[28%] h-[42%] w-[42%] rounded-full border border-terra-200" />

      <div className="absolute left-1/2 top-[43%] z-10 w-[278px] -translate-x-1/2 -translate-y-1/2 rounded-[1.75rem] border border-terra-200 bg-terra-950 p-5 text-white shadow-glow sm:w-[315px] sm:p-6">
        <div className="flex items-start gap-4">
          <IconTile className="bg-white text-terra-950">
            <Network size={24} strokeWidth={1.9} />
          </IconTile>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terra-200">Core</p>
            <h3 className="mt-1 text-2xl font-semibold leading-tight">Own Terra Ecosystem</h3>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2.5">
          {["Ventas", "Obra", "Pagos", "Docs", "CRM", "BI"].map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.08] px-2 py-2 text-center text-xs font-medium text-white/[0.78]">
              {item}
            </span>
          ))}
        </div>
      </div>

      {orbitApps.map((app, index) => {
        const Icon = app.icon;
        return (
          <div
            key={app.label}
            className={`absolute z-20 hidden rounded-[1.45rem] border border-white bg-white/[0.9] p-3 shadow-soft-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-terra-200 md:block ${app.position}`}
            style={{
              animation: `float ${5 + index * 0.35}s ease-in-out infinite`,
              animationDelay: `${index * 0.12}s`,
            }}
          >
            <div className="flex items-center gap-3">
              <IconTile>
                <Icon size={21} strokeWidth={1.9} />
              </IconTile>
              <span className="min-w-0 whitespace-nowrap text-[15px] font-semibold text-graphite-900">{app.label}</span>
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-6 left-6 right-6 z-30 rounded-3xl border border-white/70 bg-white/[0.92] p-4 shadow-soft-xl backdrop-blur-xl sm:left-auto sm:right-6 sm:w-[302px]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-graphite-950">Actividad del ecosistema</span>
          <CircleDot className="text-terra-500" size={17} />
        </div>
        <div className="mt-4 space-y-3">
          {["Contrato enviado", "Pago conciliado", "Lead asignado"].map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-terra-50 text-terra-700">
                <Check size={14} />
              </span>
              <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-graphite-100">
                <div className="h-full rounded-full bg-terra-500" style={{ width: `${88 - index * 18}%` }} />
              </div>
              <span className="w-[104px] text-xs font-medium text-graphite-500">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_8%,rgba(61,147,99,0.16),transparent_30%),linear-gradient(180deg,#f7fbf8_0%,#ffffff_45%,#ffffff_100%)]" />
      <div className="section-shell grid items-center gap-12 pb-20 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-terra-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-terra-700 shadow-sm">
            Plataforma todo en uno
          </div>

          <h1 className="mt-7 text-balance text-4xl font-semibold tracking-[-0.045em] text-graphite-950 sm:text-6xl lg:text-7xl">
            Construye, administra y escala todo tu negocio inmobiliario desde un solo ecosistema.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite-600 sm:text-xl">
            Own Terra conecta lotes, propiedades, construcción, clientes, contratos,
            finanzas y marketing en una sola plataforma empresarial.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={loginUrl} className="login-button min-h-12 px-6">
              Ingresar al Sistema
              <ArrowRight size={18} />
            </a>
            <a href="#contacto" className="secondary-button min-h-12 px-6">
              Solicitar Demo
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {quickBenefits.map((benefit) => (
              <span key={benefit} className="inline-flex items-center gap-2 rounded-full border border-graphite-200 bg-white px-3 py-2 text-sm font-medium text-graphite-700 shadow-sm">
                <Check size={15} className="text-terra-600" />
                {benefit}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div key={signal.label} className="flex items-center gap-3 rounded-2xl border border-graphite-200 bg-white px-4 py-3 shadow-sm">
                  <Icon size={18} className="text-terra-600" />
                  <span className="text-sm font-semibold text-graphite-700">{signal.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <EcosystemVisual />
      </div>
    </section>
  );
}
