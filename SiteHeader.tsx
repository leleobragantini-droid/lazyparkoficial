import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { label: "Início", to: "/", hash: "" },
  { label: "Cardápio", to: "/cardapio", hash: "" },
  { label: "Brunch", to: "/", hash: "brunch" },
  { label: "Sobre", to: "/", hash: "sobre" },
  { label: "Localização", to: "/", hash: "visita" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolledY, setScrolled] = useState(false);
  const isHome = useRouterState({ select: (s) => s.location.pathname }) === "/";
  const scrolled = scrolledY || !isHome;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10 ${
          scrolled || open ? "text-foreground" : "text-cream"
        }`}
      >
        <Link to="/" className="wordmark text-lg" onClick={() => setOpen(false)}>
          Lazy Park
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link key={n.label} to={n.to} {...(n.hash ? { hash: n.hash } : {})} className="link-underline text-sm">
              {n.label}
            </Link>
          ))}
          <Link to="/cardapio" className={`btn !py-2.5 ${scrolled ? "btn-solid" : "btn-ghost"}`}>
            Ver cardápio
          </Link>
        </nav>
        <button
          className="lg:hidden eyebrow"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Menu mobile"
          className="flex h-[calc(100dvh-4rem)] flex-col gap-6 bg-background px-6 pt-10 lg:hidden"
        >
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              {...(n.hash ? { hash: n.hash } : {})}
              onClick={() => setOpen(false)}
              className="font-display text-4xl"
            >
              {n.label}
            </Link>
          ))}
          <Link to="/cardapio" onClick={() => setOpen(false)} className="btn btn-solid mt-6 self-start">
            Ver cardápio
          </Link>
        </nav>
      )}
    </header>
  );
}
