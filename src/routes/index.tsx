import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/salaodacintia.jpg";

// Rota adicionada explicitamente para resolver o erro do TS
export const Route = createFileRoute()({
  head: () => ({
    meta: [
      { title: "SALAO CINTIA — +15 anos de atendimento" },
      {
        name: "description",
        content:
          "Psicologia em MG, Vale do Aço e em todo o Brasil, Estados Unidos e Europa. CNPJ 00.000.000/0000-00..",
      },
      {
        property: "og:title",
        content: "SALAO CINTIA — Projetos e Construções",
      },
      {
        property: "og:description",
        content:
          "+15 anos de atendimento em MG, Vale do Aço e em todo o Brasil, Estados Unidos e Europa.",
      },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "SALAO CINTIA Projetos Construções LTDA - ME",
          taxID: "20.853.842/0001-01",
          foundingDate: "2011",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Coronel Fabriciano",
            addressRegion: "MG",
            addressCountry: "BR",
          },
          areaServed: "Vale do Aço, Minas Gerais",
        }),
      },
    ],
  }),
  component: Home,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Home() {
  return (
    <>
      {/* Seção Hero */}
      <section className="relative min-h-screen overflow-hidden pt-16 text-zinc-900">
        <div className="absolute inset-0 bg-white" />
        <div className="pointer-events-none absolute inset-0 hidden bg-zinc-950" />
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="SALAO CINTIA"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          {/* Gradiente ajustado para dar contraste ao texto tanto no light quanto no dark */}
          <div className="absolute inset-0 bg-linear-to-b from-white/60 via-white/40 dark:to-zinc-950" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-12 gap-6 px-6 pb-16 pt-24 lg:px-10">
          <div className="col-span-12 flex flex-col justify-end lg:col-span-9">
            <motion.div
              {...fadeUp}
              className="mb-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-600 font-semibold"
            >
              <span className="h-px w-10 bg-orange-700" />
              CINTIA
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{
                duration: 0.9,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(2.75rem,8vw,7rem)] font-medium leading-[0.95] text-zinc-900 tracking-tight"
            >
              Estilo
              <br />
              <span className="italic font-light text-orange-600">
                Confiança
              </span>{" "}
              <br />
              &amp; Elegância
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 max-w-xl text-base leading-relaxed text-zinc-700 md:text-lg font-medium"
            >
              Há mais de 15 anos transformando autoestima e realçando a beleza
              de cada cliente. Empreendedora apaixonada pelo universo da beleza,
              dedica-se a oferecer um atendimento personalizado, unindo técnica,
              cuidado e as principais tendências em cortes, coloração,
              tratamentos capilares e penteados. Cada atendimento é realizado
              com atenção aos mínimos detalhes, proporcionando uma experiência
              acolhedora, resultados de excelência e a confiança que cada pessoa
              merece para se sentir ainda mais bonita.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/contato"
                className="group inline-flex items-center gap-3 rounded-sm bg-orange-700 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-orange-800 dark:hover:bg-orange-500 shadow-md"
              >
                Solicitar Orçamento
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 rounded-sm border dark:border-zinc-50/20 px-6 py-3.5 text-sm font-medium text-zinc-900 transition hover:border-zinc-900 dark:hover:border-zinc-50 hover:bg-zinc-900/5 dark:hover:bg-zinc-50/5"
              >
                Ver Portfólio
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Grid de Métricas */}
        <div className="relative border-t dark:border-zinc-800 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-zinc-200 md:grid-cols-4">
            {[
              { k: "+15", l: "anos de atendimento" },
              { k: "+5500", l: "Transformações realizadas" },
              {
                k: "MG",
                l: "MG, em todo o Brasil, Estados Unidos e Europa.",
              },
              { k: "100%", l: "100% Excelência" },
            ].map((s) => (
              <div key={s.l} className="px-6 py-8 lg:px-10">
                <div className="font-display text-3xl font-medium dark:text-zinc-50 md:text-4xl">
                  {s.k}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Navegação Interna */}
      <section className="bg-white text-zinc-900 border-b border-zinc-200 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:px-10">
          {[
            {
              to: "/sobre",
              n: "01",
              t: "Sobre",
              d: "Mais de 15 anos dedicados à beleza, autoestima e transformação de mulheres através de um atendimento acolhedor e personalizado.",
            },
            {
              to: "/servicos",
              n: "02",
              t: "Serviços",
              d: "Cortes, coloração, tratamentos capilares, escovas e cuidados especiais para realçar a sua beleza em cada detalhe.",
            },
            {
              to: "/portfolio",
              n: "03",
              t: "Portfólio",
              d: "Confira algumas das transformações, estilos e resultados que marcaram a história do nosso salão.",
            },
            {
              to: "/clientes",
              n: "04",
              t: "Clientes",
              d: "Veja o que nossas clientes dizem sobre suas experiências, confiança e satisfação com nossos serviços.",
            },
            {
              to: "/funcionarios",
              n: "05",
              t: "Equipe",
              d: "Conheça os profissionais apaixonados por beleza que fazem cada atendimento ser único e especial.",
            },
            {
              to: "/contato",
              n: "06",
              t: "Contato",
              d: "Agende seu horário, solicite informações e venha viver uma experiência de cuidado e autoestima.",
            },
            {
              to: "/videos",
              n: "07",
              t: "Vídeos",
              d: "Acompanhe transformações, dicas de beleza, bastidores do salão e momentos especiais do nosso dia a dia.",
            },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group flex items-start justify-between gap-6 border-t border-zinc-200 pt-8 transition hover:border-zinc-900 dark:hover:border-zinc-50"
            >
              <div>
                <div className="text-xs tabular-nums tracking-widest text-zinc-500">
                  — {c.n}
                </div>

                <h2 className="mt-3 font-display text-3xl font-medium text-zinc-900">
                  {c.t}
                </h2>

                <p className="mt-2 max-w-md text-sm text-zinc-600">{c.d}</p>
              </div>

              <ArrowUpRight className="h-6 w-6 shrink-0 text-zinc-900 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange-700 dark:group-hover:text-orange-500" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
