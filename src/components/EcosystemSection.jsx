import { useState } from "react";
import { ChevronDown, Clock, Rocket } from "lucide-react";
import { ecosystemApps } from "../data/content.js";

const VISIBLE_DEFAULT = 4;

export default function EcosystemSection() {
  const [expanded, setExpanded] = useState(false);
  const visibleApps = expanded ? ecosystemApps : ecosystemApps.slice(0, VISIBLE_DEFAULT);

  return (
    <section id="ecosistema" className="border-y border-graphite-200/70 bg-graphite-50/70 py-20 sm:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Ecosistema</p>
          <h2 className="section-title">Un ecosistema, múltiples soluciones.</h2>
          <p className="section-copy mx-auto">
            Own Terra no opera como una inmobiliaria. Es una plataforma modular para
            que empresas inmobiliarias conecten operación, comercialización, finanzas
            y analítica desde una sola arquitectura.
          </p>
        </div>

        <div id="soluciones" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleApps.map((app) => {
            const Icon = app.icon;
            return (
              <article key={app.name} className={`surface-card group min-h-[260px] p-6 ${app.comingSoon ? "opacity-75" : ""}`}>
                <div className="flex items-start justify-between gap-4">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl transition duration-300 ${app.comingSoon ? "bg-graphite-100 text-graphite-400" : "bg-terra-50 text-terra-700 group-hover:bg-terra-950 group-hover:text-white"}`}>
                    <Icon size={22} />
                  </span>
                  {app.finalStage ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-terra-200 bg-terra-50 px-3 py-1 text-xs font-semibold text-terra-700">
                      <Rocket size={11} />
                      Lanzamiento próximo
                    </span>
                  ) : app.comingSoon ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-graphite-200 bg-graphite-50 px-3 py-1 text-xs font-semibold text-graphite-500">
                      <Clock size={11} />
                      Próximamente
                    </span>
                  ) : (
                    <span className="rounded-full border border-graphite-200 px-3 py-1 text-xs font-semibold text-graphite-500">
                      {app.category}
                    </span>
                  )}
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-[-0.01em] text-graphite-950">{app.name}</h3>
                <p className="mt-3 text-sm leading-7 text-graphite-600">{app.description}</p>

                {!app.comingSoon && (
                  <div className="mt-7 h-[1px] w-full overflow-hidden bg-graphite-100">
                    <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-terra-500 to-transparent opacity-0 transition duration-300 group-hover:animate-scan group-hover:opacity-100" />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {!expanded && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-2 rounded-full border border-graphite-200 bg-white px-5 py-2.5 text-sm font-semibold text-graphite-700 shadow-sm transition hover:border-terra-300 hover:text-terra-700"
            >
              Ver todo el ecosistema
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
