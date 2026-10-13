import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-burger.jpg";
import pizza from "@/assets/pizza.jpg";
import brunch from "@/assets/brunch.jpg";
import pet from "@/assets/pet.jpg";
import prego from "@/assets/prego.jpg";
import hotcake from "@/assets/hotcake.jpg";
import porcoes from "@/assets/porcoes.jpg";
import ambiente from "@/assets/local-fachada.jpg";
import { findItem, info } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lazy Park Oficial | Um lugar para comer e relaxar" },
      { name: "description", content: "Restaurante no Belenzinho, São Paulo, com burgers, pizzas de forno a lenha e brunch aos fins de semana. Ambiente pet friendly." },
      { property: "og:title", content: "Lazy Park Oficial | Um lugar para comer e relaxar" },
      { property: "og:description", content: "Hambúrgueres, pizzas de forno a lenha, brunch e bons momentos no Belenzinho." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://design-perfecter.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://design-perfecter.lovable.app/" }],
  }),
  component: Home,
});

const categories = [
  { title: "Burgers", img: hero, hash: "lazy-burgers", text: "Burgers clássicos e criações especiais, incluindo hambúrgueres de costela e combinações marcantes." },
  { title: "Forneria", img: pizza, hash: "forneria", text: "Pizzas preparadas com molho de tomate caseiro e assadas no forno a lenha." },
  { title: "Brunch", img: brunch, hash: "brunch", text: "Panquecas, ovos, croissants, sanduíches e opções para começar o dia sem pressa." },
  { title: "Porções e sobremesas", img: porcoes, hash: "porcoes", text: "Opções para compartilhar, sobremesas quentes, brownies e combinações deliciosas." },
];

const specials = [
  { name: "Lazy Burger", img: hero },
  { name: "Prego", img: prego },
  { name: "Marguerita Original", img: pizza },
  { name: "Hot Cake", img: hotcake },
];

const brunchItems = ["Brunch Tradicional", "Brunch Croissant", "Croque Madame", "Pancake (servido durante o brunch)", "Parfait"];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal text-cream">
        <img src={hero} alt="Burger com crosta de pimenta, gorgonzola e cebola caramelizada (imagem ilustrativa)" width={1600} height={907} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent md:bg-gradient-to-r md:from-charcoal/90 md:via-charcoal/30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:px-10 md:pb-24">
          <p className="eyebrow reveal opacity-80">Lazy Park Oficial</p>
          <h1 className="reveal mt-6 max-w-3xl text-6xl leading-[0.95] md:text-8xl lg:text-[8.5rem]">
            Um lugar para comer <em className="italic">e relaxar.</em>
          </h1>
          <p className="reveal mt-8 max-w-md text-base opacity-85 md:text-lg">
            Hambúrgueres, pizzas de forno a lenha, brunch e bons momentos na Mooca.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-3">
            <Link to="/cardapio" className="btn btn-light">Explorar cardápio</Link>
            <a href={info.maps} target="_blank" rel="noreferrer" className="btn btn-ghost">Como chegar</a>
          </div>
          <p className="eyebrow mt-14 opacity-60">Mooca · São Paulo</p>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-36">
        <div className="md:col-span-6">
          <img src={ambiente} alt="Fachada do Lazy Park com o mural do bicho-preguiça astronauta e o pátio iluminado" width={1024} height={1024} loading="lazy" className="aspect-[4/5] w-full object-cover md:aspect-[4/5]" />
        </div>
        <div className="flex flex-col justify-center md:col-span-5 md:col-start-8">
          <p className="eyebrow text-olive">A experiência</p>
          <h2 className="mt-6 text-5xl leading-tight md:text-6xl">Boa comida. Seu tempo. Seu lugar.</h2>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            No Lazy Park, a ideia é simples: você faz seu pedido no caixa, encontra seu lugar, relaxa e aguarda a chamada da sua senha. Um jeito descontraído de aproveitar boa comida e bons momentos, sem pressa.
          </p>
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {["Gastronomia variada", "Experiência descontraída", "Ambiente pet friendly"].map((t, i) => (
              <li key={t} className="flex items-baseline gap-6 py-5">
                <span className="font-display text-sm text-olive">0{i + 1}</span>
                <span className="font-display text-2xl">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="bg-sand py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-xl text-5xl leading-tight md:text-7xl">Um cardápio para aproveitar.</h2>
            <Link to="/cardapio" className="link-underline eyebrow self-start md:self-end">Ver todas as categorias →</Link>
          </div>
          <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
            {categories.map((c, i) => (
              <Link key={c.title} to="/cardapio" hash={c.hash} className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}>
                <div className="overflow-hidden">
                  <img src={c.img} alt={`${c.title} (imagem ilustrativa)`} loading="lazy" className="img-zoom aspect-[4/5] w-full object-cover group-hover:scale-105" />
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-6 border-b border-foreground/20 pb-4">
                  <h3 className="text-3xl md:text-4xl">{c.title}</h3>
                  <span className="eyebrow transition-transform group-hover:translate-x-1">Ver →</span>
                </div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="bg-charcoal py-24 text-cream md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="eyebrow opacity-60">Especialidades da casa</p>
          <h2 className="mt-6 max-w-2xl text-5xl leading-tight md:text-6xl">Os pratos que contam quem somos.</h2>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {specials.map((s) => {
              const item = findItem(s.name);
              return (
                <article key={s.name} className="group">
                  <div className="overflow-hidden">
                    <img src={s.img} alt={`Imagem ilustrativa: ${s.name}`} loading="lazy" className="img-zoom aspect-[4/5] w-full object-cover group-hover:scale-105" />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl">{item.name}</h3>
                    <span className="text-sm tabular-nums opacity-80">R$ {item.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed opacity-60">{item.description}</p>
                </article>
              );
            })}
          </div>
          <Link to="/cardapio" className="btn btn-ghost mt-16">Ver cardápio completo</Link>
        </div>
      </section>

      {/* BRUNCH */}
      <section id="brunch" className="py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-7">
            <img src={brunch} alt="Panquecas, croissant, ovos mexidos e café (imagem ilustrativa)" width={1400} height={1050} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <p className="eyebrow text-olive">Quando</p>
                <p className="mt-2 font-display text-2xl">Sábados, domingos e feriados</p>
              </div>
              <div>
                <p className="eyebrow text-olive">Horário</p>
                <p className="mt-2 font-display text-2xl">Das 10h às 14h</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="eyebrow text-olive">Brunch</p>
            <h2 className="mt-6 text-5xl leading-tight md:text-6xl">Comece o dia sem pressa.</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Um momento para aproveitar bons cafés, panquecas, ovos, croissants e combinações especiais em um brunch feito para curtir o fim de semana.
            </p>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {brunchItems.map((n) => {
                const it = findItem(n);
                return (
                  <li key={n} className="py-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-display text-xl">{it.name}</span>
                      <span className="text-sm tabular-nums">R$ {it.price}</span>
                    </div>
                    {it.description && <p className="mt-1 text-sm text-muted-foreground">{it.description}</p>}
                  </li>
                );
              })}
            </ul>
            <Link to="/cardapio" hash="brunch" className="btn btn-outline mt-10">Explorar brunch</Link>
          </div>
        </div>
      </section>

      {/* PET */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-7xl items-center md:grid-cols-2">
          <img src={pet} alt="Cliente com seu cachorro à mesa (imagem ilustrativa)" width={1408} height={1008} loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
          <div className="px-6 py-20 md:px-16">
            <p className="eyebrow text-olive">Pet friendly</p>
            <h2 className="mt-6 text-4xl leading-tight md:text-5xl">Seu melhor amigo também é bem-vindo.</h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Boa comida, bons momentos e a companhia de quem faz parte da família. O Lazy Park é pet friendly.
            </p>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section aria-label="Galeria" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
          <img src={pizza} alt="Pizza de forno a lenha" loading="lazy" className="col-span-2 row-span-2 h-full w-full object-cover" />
          <img src={hotcake} alt="Hot Cake com sorvete" loading="lazy" className="aspect-square h-full w-full object-cover" />
          <img src={prego} alt="Burger Prego" loading="lazy" className="aspect-square h-full w-full object-cover" />
          <img src={porcoes} alt="Fritas e iscas de frango" loading="lazy" className="aspect-square h-full w-full object-cover" />
          <img src={brunch} alt="Mesa de brunch" loading="lazy" className="aspect-square h-full w-full object-cover" />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Imagens meramente ilustrativas.</p>
      </section>

      {/* VISITA */}
      <section id="visita" className="border-t border-border py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-3 md:px-10">
          <div>
            <p className="eyebrow text-olive">Planeje sua visita</p>
            <h2 className="mt-6 text-4xl leading-tight md:text-5xl">Lazy Park &amp; Food</h2>
            <a href={info.maps} target="_blank" rel="noreferrer" className="link-underline mt-6 inline-block leading-relaxed">
              {info.address}<br />{info.city}
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={info.maps} target="_blank" rel="noreferrer" className="btn btn-solid">Abrir no Google Maps</a>
            </div>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Funcionamento</p>
            <dl className="mt-6 divide-y divide-border border-y border-border">
              {info.hours.map(([d, h]) => (
                <div key={d} className="flex justify-between gap-4 py-4">
                  <dt>{d}</dt><dd className="tabular-nums text-muted-foreground">{h}</dd>
                </div>
              ))}
            </dl>
            <p className="eyebrow mt-10 text-muted-foreground">Brunch</p>
            <p className="mt-3">{info.brunch}</p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Contato</p>
            <a href={info.tel} className="mt-6 block font-display text-3xl link-underline self-start">{info.phone}</a>
            <div className="mt-8 flex flex-col items-start gap-3">
              <a href={info.tel} className="btn btn-outline">Ligar agora</a>
              <Link to="/cardapio" className="btn btn-outline">Cardápio online</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-28 text-center text-cream md:py-40">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-5xl leading-tight md:text-8xl">Um lugar para comer <em className="italic">e relaxar.</em></h2>
          <p className="mx-auto mt-8 max-w-lg opacity-70">Escolha o que vai pedir, chame quem você gosta e venha aproveitar o Lazy Park.</p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link to="/cardapio" className="btn btn-light">Ver cardápio</Link>
            <a href={info.maps} target="_blank" rel="noreferrer" className="btn btn-ghost">Como chegar</a>
          </div>
        </div>
      </section>
    </>
  );
}
