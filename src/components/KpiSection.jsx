import { kpis } from "../data/content.js";
import { useCountUp } from "../lib/useCountUp.js";

function KpiCard({ kpi }) {
  const decimals = Number.isInteger(kpi.value) ? 0 : 1;
  const { ref, value } = useCountUp(kpi.value, { decimals });
  const formatted = decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString("en-US");

  return (
    <article ref={ref} className="rounded-3xl border border-graphite-200 bg-white p-6 shadow-soft-xl">
      <span className="block text-4xl font-semibold tracking-[-0.04em] text-graphite-950 sm:text-5xl">
        {kpi.prefix}
        {formatted}
        {kpi.suffix}
      </span>
      <p className="mt-3 text-sm font-medium leading-6 text-graphite-600">{kpi.label}</p>
    </article>
  );
}

export default function KpiSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="section-eyebrow">KPIs</p>
            <h2 className="section-title">Métricas pensadas para escala empresarial.</h2>
          </div>
          <p className="section-copy mt-0">
            Own Terra está diseñado para organizaciones que necesitan controlar
            grandes volúmenes de propiedades, clientes, contratos y procesos sin
            perder velocidad operativa.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.label} kpi={kpi} />
          ))}
        </div>
      </div>
    </section>
  );
}
