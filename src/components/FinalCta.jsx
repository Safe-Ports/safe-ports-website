import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { loginUrl } from "../data/content.js";

export default function FinalCta() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 mx-auto h-40 max-w-5xl bg-[radial-gradient(circle_at_center,rgba(61,147,99,0.18),transparent_70%)]" />
      <div className="section-shell relative">
        <div className="overflow-hidden rounded-[2rem] bg-terra-950 p-6 text-white shadow-panel sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terra-300">Own Terra Ecosystems</p>
              <h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Comienza a administrar todo tu ecosistema desde hoy.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.68]">
                Centraliza operaciones, automatiza procesos y toma mejores decisiones
                con Own Terra.
              </p>
            </div>

            <div className="grid gap-3">
              <a href={loginUrl} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-terra-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-terra-100">
                Ingresar al Sistema
                <ArrowRight size={18} />
              </a>
              <a href="mailto:contacto@ownterra.com" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15">
                <Mail size={18} />
                Solicitar Demo
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
            {["Implementación modular", "Arquitectura escalable", "Datos y operación protegidos"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
                <ShieldCheck size={18} className="text-terra-300" />
                <span className="text-sm font-medium text-white/[0.78]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
