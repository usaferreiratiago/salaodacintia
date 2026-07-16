import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Quote, ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/page-header";

// Importação da logo utilizando o caminho relativo do projeto
import logoImg from "@/assets/melmesquita.png";

export const Route = createFileRoute()({
  head: () => ({
    meta: [
      { title: "Clientes — Mel Mesquita" },
      {
        name: "description",
        content: "Depoimentos de Clientes atendidos pela Mel Mesquita.",
      },
      { property: "og:title", content: "Clientes — Mel Mesquita" },
      {
        property: "og:description",
        content: "O que dizem sobre o atendimento da Mel Mesquita.",
      },
    ],
  }),
  component: Clientes,
});

const testimonials = [
  {
    q: "A Mel Mesquita superou todas as nossas expectativas. Cada detalhe foi cuidadosamente planejado e nosso casamento ficou exatamente como sempre sonhamos.",
    a: "Marcos Souza",
    r: "Noivo · Belo Horizonte/MG",
  },
  {
    q: "Desde o primeiro contato sentimos segurança e profissionalismo. A organização foi impecável e pudemos aproveitar nossa festa sem nos preocupar com nada.",
    a: "Ana Costa Assis",
    r: "Aniversário de 15 anos · Santa Luzia/MG",
  },
  {
    q: "Criatividade, bom gosto e atenção aos mínimos detalhes. Recebemos inúmeros elogios dos convidados e viveríamos tudo novamente.",
    a: "Carlos Augusto Pereira",
    r: "Evento Corporativo · Belo Horizonte/MG",
  },
  {
    q: "A equipe cuidou de toda a produção com muita dedicação. O resultado foi uma celebração sofisticada, emocionante e inesquecível para nossa família.",
    a: "Márcia Loureiro",
    r: "Casamento · Estados Unidos",
  },
  {
    q: "Organização impecável, fornecedores de qualidade e um atendimento extremamente atencioso. Foi muito além do que imaginávamos.",
    a: "Sara Medeiros",
    r: "Evento Particular · Portugal",
  },
  {
    q: "Cada detalhe refletia nosso estilo e personalidade. A Mel Mesquita transformou nossas ideias em um evento elegante e memorável.",
    a: "Guilherme Andrade",
    r: "Formatura · Espanha",
  },
];

function Clientes() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 w-full overflow-x-hidden">
      {/* Barra superior de ações (Voltar + Logo) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-100 dark:border-zinc-900 pb-6">
          {/* Botão Voltar para Tela Inicial */}
          <Link
            to=".."
            className="group inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors py-2 sm:py-0"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Voltar para o início
          </Link>

          {/* Logo fixa colorida */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center sm:justify-start"
          >
            {/* <img
              src={logoImg}
              alt="Mel Mesquita Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 dark:brightness-110 dark:contrast-105"
            /> */}
          </motion.div>
        </div>
      </div>

      <PageHeader
        eyebrow="— 04 / Clientes"
        title="Momentos inesquecíveis contados por quem viveu essa experiência."
        intro="Conheça os relatos de clientes que confiaram à Mel Mesquita a missão de transformar seus sonhos em celebrações únicas, elegantes e memoráveis."
      />

      <section className="bg-zinc-50 dark:bg-zinc-900/40 py-12 sm:py-16 lg:py-28 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px bg-zinc-200 dark:bg-zinc-800 md:grid-cols-3 rounded-sm overflow-hidden">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.a}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col justify-between bg-white dark:bg-zinc-900 p-6 sm:p-8 lg:p-10 transition-colors duration-300 min-w-0"
              >
                <div>
                  {/* Ícone de aspas usando a cor terracota/laranja consistente com a Home */}
                  <Quote
                    className="h-8 w-8 text-orange-700 dark:text-orange-500 shrink-0"
                    strokeWidth={1.2}
                  />

                  <blockquote className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 wrap-break-word">
                    "{t.q}"
                  </blockquote>
                </div>

                <figcaption className="mt-8 sm:mt-10 border-t border-zinc-100 dark:border-zinc-800 pt-5">
                  <div className="font-heading text-base font-medium text-zinc-900 dark:text-zinc-50 truncate">
                    {t.a}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 wrap-break-word">
                    {t.r}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
