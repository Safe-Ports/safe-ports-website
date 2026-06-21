import { ArrowUpRight } from "lucide-react";
import { benefits, loginUrl } from "../data/content.js";

export default function BenefitsSection() {
  return (
    <section id="caracteristicas" className="bg-white py-20 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="section-eyebrow">Características</p>
          <h2 className="section-title">Todo tu negocio inmobiliario en un solo lugar.</h2>
          <p className="section-copy">
            Diseñado para equipos que necesitan operar con control empresarial, reducir
            fricción interna y escalar sin perder visibilidad.
          </p>
          <a href={loginUrl} className="login-button mt-8">
            Ingresar al Sistema
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="grid gap-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="surface-card flex items-start gap-6 p-7"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-graphite-950 text-white">
                  <Icon size={24} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.01em] text-graphite-950">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-graphite-600">{benefit.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
