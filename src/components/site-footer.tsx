export function SiteFooter() {
  return (
    <footer className="bg-background py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-3">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-lg font-semibold text-ink">
                MEL MESQUITA
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-stone">
                Festas e Eventos · Desde 2011
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-foreground/60">
              Festas e Eventos é uma empresa especializada em criar experiências
              memoráveis para seus clientes. Com mais de uma década de
              experiência, oferecemos serviços personalizados para tornar cada
              evento único e inesquecível.
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm text-foreground/70">
            <a href="/sobre" className="hover:text-ink">
              Sobre
            </a>
            <a href="/servicos" className="hover:text-ink">
              Serviços
            </a>
            <a href="/portfolio" className="hover:text-ink">
              portfolio
            </a>
            <a href="/clientes" className="hover:text-ink">
              pacientes
            </a>
            <a href="/contato" className="hover:text-ink">
              Contato
            </a>
          </nav>
          <div className="text-sm text-foreground/70">
            <div>contato@melmesquita.com.br</div>
            <div className="mt-1">(31) 0000-0000</div>
            <div className="mt-3 text-xs text-stone">
              CNPJ 00.000.000/0000-00
            </div>
          </div>
        </div>
        <div className="mt-10 text-xs text-stone">
          © {new Date().getFullYear()} Mel Mesquita.
        </div>
      </div>
    </footer>
  );
}
