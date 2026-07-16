import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import aboutImg from "@/assets/about-blueprint.jpg";
import { PageHeader } from "@/components/page-header";

// Importação da logo utilizando o caminho relativo do projeto
import logoImg from "@/assets/melmesquita.png";

// Rota adicionada explicitamente para resolver o erro do TS
export const Route = createFileRoute()({
  head: () => ({
    meta: [
      { title: "Equipe — Mel Mesquita" },
      {
        name: "description",
        content:
          "Conheça a equipe que transforma celebrações em experiências únicas, com excelência, sofisticação e atenção a cada detalhe.",
      },
      {
        property: "og:title",
        content: "Equipe — Mel Mesquita | Festas e Eventos de Luxo",
      },
      {
        property: "og:description",
        content:
          "Uma equipe apaixonada por criar eventos exclusivos, elegantes e memoráveis, cuidando de cada detalhe para tornar cada celebração inesquecível.",
      },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 w-full overflow-x-hidden">
      {/* Barra superior de ações (Voltar + Logo) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-100 dark:border-zinc-900 pb-6">
          {/* Botão Voltar para Tela Inicial */}
          <Link
            to="/"
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
        eyebrow="— 01 / Sobre"
        title="Celebrações exclusivas, criadas para marcar histórias."
        intro="Com mais de 15 anos de experiência no mercado de festas e eventos, a Mel Mesquita transforma ideias em experiências sofisticadas e memoráveis. Cada projeto é desenvolvido com planejamento personalizado, excelência na execução e um olhar atento aos mínimos detalhes, tornando cada ocasião verdadeiramente única."
      />
      {/* Seção com suporte completo a cores adaptáveis */}
      <section className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12 sm:py-20 lg:py-28 transition-colors duration-300">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 sm:gap-10 px-4 sm:px-6 lg:px-8">
          {/* Bloco da Imagem - Responsivo para Mobile, Tablet e Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-12 lg:col-span-6 w-full"
          >
            <img
              src={aboutImg}
              alt="Equipe MEL MESQUITArevisando projetos"
              loading="lazy"
              className="aspect-4/3 w-full object-cover rounded-sm shadow-sm dark:opacity-90"
            />
          </motion.div>

          {/* Bloco de Conteúdo de Texto */}
          <div className="col-span-12 space-y-6 lg:col-span-6 flex flex-col justify-center">
            <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-lg">
              A{" "}
              <strong className="text-zinc-900 font-semibold dark:text-zinc-50">
                Mel Mesquita
              </strong>{" "}
              nasceu com um propósito simples: transformar sonhos em celebrações
              inesquecíveis. Há mais de 15 anos, criamos eventos que unem
              elegância, criatividade e emoção, construindo relações de
              confiança e realizando momentos que permanecem na memória de cada
              cliente e de seus convidados.
            </p>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium dark:font-normal">
              Nossa equipe acompanha cada etapa da organização do evento — do
              planejamento inicial à execução de cada detalhe — com dedicação,
              profissionalismo e um atendimento personalizado. Cada celebração é
              desenvolvida de forma exclusiva, garantindo uma experiência
              sofisticada, harmoniosa e verdadeiramente memorável.
            </p>

            {/* Grid de Benefícios/Tags */}
            <ul className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2 target-list">
              {[
                "CNPJ 00.000.000/0000-00",
                "Sede em Coronel Fabriciano/MG",
                "Mais de 15 anos criando experiências memoráveis",
                "Equipe especializada em eventos de alto padrão",
                "Planejamento, produção e cerimonial completos",
                "Atendimento em Minas Gerais, em todo o Brasil e internacionalmente",
                "Centenas de celebrações realizadas com excelência",
              ].map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300 font-medium wrap-break-word"
                >
                  {/* Ícone de check usando a cor terracota/laranja consistente com as outras páginas */}
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-700 dark:text-orange-500" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
