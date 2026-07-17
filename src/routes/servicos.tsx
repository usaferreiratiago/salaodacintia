import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  PartyPopper,
  Sparkles,
  Cake,
  Gift,
  Trophy,
  Star,
  Heart,
  Smile,
  ArrowLeft,
  Brush,
  Scissors,
  Crown,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";

// Importação da logo utilizando o caminho relativo do projeto
import logoImg from "@/assets/salaodacintia.png";

// Rota adicionada explicitamente para resolver o erro do TS
export const Route = createFileRoute()({
  head: () => ({
    meta: [
      { title: "Equipe — SALÃO CÍNTIA" },
      {
        name: "description",
        content:
          "Conheça a profissional dedicada a realçar a beleza e a autoestima de cada cliente, oferecendo atendimento personalizado, técnicas modernas e um cuidado especial em cada detalhe.",
      },
      {
        property: "og:title",
        content: "Equipe — SALÃO CÍNTIA | Beleza, Estilo e Autoestima",
      },
      {
        property: "og:description",
        content:
          "À frente do Salão Cíntia, uma empreendedora apaixonada por beleza transforma cada atendimento em uma experiência única, proporcionando cortes, colorações e tratamentos com excelência, carinho e profissionalismo.",
      },
    ],
  }),
  component: Servicos,
});

const services = [
    {
      icon: Scissors,
      title: "Cortes masculinos",
      desc: "Cortes modernos e personalizados, valorizando o estilo, o formato do rosto e a personalidade de cada cliente.",
    },
    {
      icon: Sparkles,
      title: "Barba e acabamento",
      desc: "Modelagem, alinhamento e acabamento da barba com técnicas precisas para um visual elegante e bem cuidado.",
    },
    {
      icon: Heart,
      title: "Tratamentos capilares",
      desc: "Protocolos de hidratação, fortalecimento e cuidados específicos para manter os cabelos saudáveis, fortes e com aparência natural.",
    },
    {
      icon: Brush,
      title: "Lavagem e finalização",
      desc: "Lavagem, secagem e finalização profissional para proporcionar praticidade, estilo e um acabamento impecável.",
    },
    {
      icon: Crown,
      title: "Tratamentos para barba",
      desc: "Cuidados completos para barba e bigode, incluindo hidratação, nutrição e produtos específicos para manter os fios saudáveis.",
    },
    {
      icon: Smile,
      title: "Atendimento personalizado",
      desc: "Consultoria para identificar o corte, o estilo de barba e os cuidados ideais para valorizar o visual e atender às necessidades de cada cliente.",
    },
  ];

function Servicos() {
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
              alt="SALAO CINTIA Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 dark:brightness-110 dark:contrast-105"
            /> */}
          </motion.div>
        </div>
      </div>

      <PageHeader
        eyebrow="— 02 / Serviços"
        title="Beleza, autoestima e cuidado em cada atendimento."
        intro="Cada cliente é único. Por isso, oferecemos atendimentos personalizados, técnicas atualizadas e um ambiente acolhedor para realçar sua beleza e fortalecer sua confiança em cada visita."
      />

      {/* Seção de serviços adaptável para Light e Dark Mode */}
      <section className="bg-zinc-50 dark:bg-zinc-900/40 py-12 sm:py-20 text-zinc-900 dark:text-zinc-50 lg:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Grid estruturado com cores de borda perfeitamente legíveis em ambos os modos */}
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-800 md:grid-cols-2 lg:grid-cols-3 rounded-sm">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-white dark:bg-zinc-900 p-6 sm:p-8 transition-all duration-300 hover:shadow-md dark:hover:shadow-zinc-950/50 hover:z-10 lg:p-10 flex flex-col justify-between"
              >
                <div>
                  {/* Ícone com destaque laranja/terracota coerente com a Home */}
                  <s.icon
                    className="h-8 w-8 text-orange-700 dark:text-orange-500 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.4}
                  />

                  {/* Título adaptável */}
                  <h3 className="mt-6 sm:mt-8 font-display text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {s.title}
                  </h3>

                  {/* Descrição adaptável */}
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium dark:font-normal">
                    {s.desc}
                  </p>
                </div>

                {/* Numeração em tom sutil */}
                <div className="mt-6 sm:mt-8 text-xs tabular-nums tracking-widest text-zinc-400 dark:text-zinc-500 font-mono font-semibold">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
