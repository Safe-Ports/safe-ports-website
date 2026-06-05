import { useState } from "react";
import { dashboardTabs } from "../data/content.js";

function DashboardMockup({ active }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-graphite-950 p-3 shadow-panel">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(95,174,127,0.24),transparent_28%)]" />
      <div className="relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-white">
        <div className="flex items-center justify-between border-b border-graphite-100 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-300" />
            <span className="h-3 w-3 rounded-full bg-yellow-300" />
            <span className="h-3 w-3 rounded-full bg-terra-400" />
          </div>
          <div className="hidden items-center gap-2 rounded-full bg-graphite-100 px-3 py-1 text-xs font-semibold text-graphite-500 sm:flex">
            {active.label}
          </div>
        </div>

        <div className="relative bg-graphite-100">
          <img
            key={active.image}
            src={active.image}
            alt={active.imageAlt}
            className="aspect-video w-full object-cover object-top"
            loading="lazy"
          />

          <div className="absolute inset-x-4 bottom-4 hidden rounded-3xl border border-white/70 bg-white/[0.88] p-4 shadow-soft-xl backdrop-blur-xl lg:block">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terra-700">{active.label}</p>
                <h3 className="mt-1 text-xl font-semibold tracking-[-0.02em] text-graphite-950">{active.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-graphite-600">{active.description}</p>
              </div>
              <div className="shrink-0 rounded-2xl border border-terra-100 bg-terra-50 px-4 py-3 text-right">
                <span className="block text-2xl font-semibold tracking-[-0.04em] text-terra-800">{active.metric}</span>
                <span className="text-xs font-medium text-terra-700">señal activa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardShowcase() {
  const [active, setActive] = useState(dashboardTabs[0]);

  return (
    <section className="relative overflow-hidden bg-graphite-950 py-20 text-white sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(95,174,127,0.20),transparent_34%)]" />
      <div className="section-shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow text-terra-300">Dashboard showcase</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
            El control ejecutivo de toda la operación, sin cambiar de sistema.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/[0.64] sm:text-lg">
            Mockups de producto diseñados para mostrar cómo conviven dirección,
            lotes, contratos, clientes y finanzas dentro de Own Terra.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex max-w-full gap-3 overflow-x-auto px-1 pb-3">
            {dashboardTabs.map((tab) => {
              const Icon = tab.icon;
              const selected = active.label === tab.label;
              return (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActive(tab)}
                  className={`inline-flex min-w-max items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    selected
                      ? "border-terra-300 bg-terra-400 text-terra-950"
                      : "border-white/10 bg-white/5 text-white/[0.72] hover:bg-white/10"
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6">
          <DashboardMockup active={active} />
        </div>
      </div>
    </section>
  );
}
