import { Link } from "@tanstack/react-router";
import { info } from "@/data/menu";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4 md:px-10">
        <div className="md:col-span-1">
          <p className="wordmark text-xl">Lazy Park Oficial</p>
          <p className="mt-4 font-display text-lg italic opacity-80">Um lugar para comer e relaxar.</p>
          <p className="mt-6 text-sm opacity-60">Ambiente pet friendly.</p>
        </div>
        <div className="text-sm leading-relaxed opacity-80">
          <p className="eyebrow mb-4 opacity-60">Endereço</p>
          <a href={info.maps} target="_blank" rel="noreferrer" className="link-underline">
            {info.address}<br />{info.city}
          </a>
          <p className="mt-4"><a href={info.tel} className="link-underline">{info.phone}</a></p>
        </div>
        <div className="text-sm leading-relaxed opacity-80">
          <p className="eyebrow mb-4 opacity-60">Horários</p>
          {info.hours.map(([d, h]) => <p key={d}>{d}: {h}</p>)}
          <p className="mt-4">Brunch: {info.brunch}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm opacity-80">
          <p className="eyebrow mb-2 opacity-60">Navegação</p>
          <Link to="/" className="link-underline self-start">Início</Link>
          <Link to="/cardapio" className="link-underline self-start">Cardápio</Link>
          <Link to="/" hash="brunch" className="link-underline self-start">Brunch</Link>
          <Link to="/" hash="visita" className="link-underline self-start">Localização</Link>
          <Link to="/cardapio" className="link-underline self-start">Cardápio online</Link>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs opacity-50 md:px-10">
          © {new Date().getFullYear()} Lazy Park Oficial · Imagens meramente ilustrativas.
        </p>
      </div>
    </footer>
  );
}
