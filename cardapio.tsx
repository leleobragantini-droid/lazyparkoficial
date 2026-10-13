import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { menu } from "@/data/menu";

export const Route = createFileRoute("/cardapio")({
  head: () => ({
    meta: [
      { title: "Cardápio | Lazy Park Oficial" },
      { name: "description", content: "Cardápio completo do Lazy Park: brunch, burgers, pizzas de forno a lenha, porções, sobremesas, cervejas e drinks." },
      { property: "og:title", content: "Cardápio | Lazy Park Oficial" },
      { property: "og:description", content: "Burgers, pizzas de forno a lenha, brunch, sobremesas e drinks no Belenzinho." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:url", content: "https://design-perfecter.lovable.app/cardapio" },
    ],
    links: [{ rel: "canonical", href: "https://design-perfecter.lovable.app/cardapio" }],
  }),
  component: Cardapio,
});

const norm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function Cardapio() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const n = norm(q.trim());
    if (!n) return menu;
    return menu
      .map((c) => ({ ...c, items: c.items.filter((i) => norm(i.name + " " + (i.description ?? "")).includes(n)) }))
      .filter((c) => c.items.length);
  }, [q]);

  return (
    <div className="pt-16">
      <header className="mx-auto max-w-7xl px-6 pb-12 pt-20 md:px-10 md:pt-28">
        <p className="eyebrow text-olive">Lazy Park Oficial</p>
        <h1 className="mt-6 text-6xl leading-none md:text-8xl">Cardápio</h1>
        <p className="mt-6 max-w-lg text-muted-foreground">
          Faça seu pedido no caixa, encontre seu lugar e aguarde a chamada da sua senha.
        </p>
      </header>

      <div className="sticky top-16 z-30 border-y border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 md:flex-row md:items-center md:px-10">
          <label className="sr-only" htmlFor="busca">Buscar no cardápio</label>
          <input
            id="busca"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar prato ou ingrediente…"
            className="w-full border-b border-input bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground md:w-64"
          />
          <nav aria-label="Categorias" className="-mx-6 flex gap-5 overflow-x-auto px-6 md:mx-0 md:px-0">
            {filtered.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="eyebrow shrink-0 whitespace-nowrap py-2 text-muted-foreground hover:text-foreground">
                {c.title.split(/ — | \(/)[0] ?? c.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        {filtered.length === 0 && (
          <p className="py-20 text-center text-muted-foreground">Nenhum item encontrado para “{q}”.</p>
        )}
        {filtered.map((c) => (
          <section key={c.id} id={c.id} className="scroll-mt-40 border-b border-border py-14 md:grid md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4">
              <h2 className="text-4xl leading-tight md:sticky md:top-44">{c.title}</h2>
              {c.note && <p className="mt-4 max-w-xs text-sm text-muted-foreground">{c.note}</p>}
            </div>
            <div className="mt-8 md:col-span-8 md:mt-0">
              <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {c.items.map((i) => (
                  <li key={i.name}>
                    <div className="flex items-baseline gap-3">
                      <h3 className="min-w-0 font-sans text-sm font-semibold uppercase tracking-wider">{i.name}</h3>
                      <span className="flex-1 translate-y-[-3px] border-b border-dotted border-foreground/30" />
                      <span className="shrink-0 whitespace-nowrap tabular-nums text-sm">{i.price.startsWith("+") ? `+ R$ ${i.price.slice(1)}` : `R$ ${i.price}`}</span>
                    </div>
                    {i.description && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.description}</p>}
                  </li>
                ))}
              </ul>
              {c.footnotes?.map((f) => (
                <p key={f} className="mt-10 bg-sand px-5 py-4 text-sm leading-relaxed">{f}</p>
              ))}
            </div>
          </section>
        ))}
        <p className="mt-12 text-sm text-muted-foreground">
          Preços em reais. Valores com “+” são adicionais e não pratos independentes.
        </p>
      </div>
    </div>
  );
}
