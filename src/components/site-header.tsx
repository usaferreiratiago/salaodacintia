import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/clientes", label: "pacientes" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="/"
          className="flex items-baseline gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            MEL MESQUITA
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-stone">
            Mel Mesquita
          </span>
        </a>
        <nav className="hidden items-center gap-10 text-sm text-foreground/70 md:flex">
          {links.map((l) => (
            <a key={l.to} href={l.to} className="transition hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/contato"
            className="group hidden items-center gap-2 rounded-sm bg-ink px-4 py-2 text-sm text-primary-foreground transition hover:bg-terracotta md:inline-flex"
          >
            Contato
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-ink md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4 lg:px-10">
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/contato"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-4 py-3 text-sm text-primary-foreground"
            >
              Contato <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
