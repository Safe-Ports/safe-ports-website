import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { loginUrl, navItems } from "../data/content.js";
import Logo from "./Logo.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        solid || open
          ? "border-graphite-200/80 bg-white/[0.86] shadow-sm backdrop-blur-xl"
          : "border-transparent bg-white/55 backdrop-blur-md"
      }`}
    >
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-7 text-sm font-medium text-graphite-600 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-terra-700">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contacto" className="secondary-button min-h-10 px-4">
            Solicitar Demo
          </a>
          <a href={loginUrl} className="login-button min-h-10 px-4">
            Ingresar al Sistema
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-graphite-200 bg-white text-graphite-900 shadow-sm lg:hidden"
          aria-label={open ? "Cerrar navegación" : "Abrir navegación"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-graphite-200 bg-white px-5 pb-5 lg:hidden">
          <nav className="grid gap-1 py-4 text-sm font-medium text-graphite-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-3 transition hover:bg-terra-50 hover:text-terra-800"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="grid gap-3">
            <a href={loginUrl} className="login-button w-full">
              Ingresar al Sistema
            </a>
            <a href="#contacto" className="secondary-button w-full" onClick={() => setOpen(false)}>
              Solicitar Demo
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
