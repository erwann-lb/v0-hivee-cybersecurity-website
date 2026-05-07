import Link from "next/link"
import { ArrowRight, Shield, FileCheck, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-background" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F293712_1px,transparent_1px),linear-gradient(to_bottom,#1F293712_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Amber radial glow — main focal point */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in srgb, #F59E0B 12%, transparent) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Secondary accent glow — bottom left */}
      <div
        className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in srgb, #22C55E 30%, transparent) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40 flex-1 flex items-center">
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <div
            className="mb-8 flex items-center justify-center animate-hero"
            style={{ animationDelay: "0ms" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-dot-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <Shield className="h-3.5 w-3.5" />
              Cybersécurité & Conformité
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl text-balance animate-hero"
            style={{ animationDelay: "80ms" }}
          >
            Audit technique et accompagnement cybersécurité{" "}
            <span className="relative inline-block">
              <span className="text-primary">pour structures qui veulent du concret</span>
              {/* Underline accent */}
              <span
                className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                aria-hidden
              />
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed sm:text-xl text-pretty animate-hero"
            style={{ animationDelay: "160ms" }}
          >
            Identifiez vos risques, structurez vos actions, préparez-vous sérieusement.
            De l&apos;analyse technique à la documentation, Hivee vous aide à avancer sans usine à gaz.
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-hero"
            style={{ animationDelay: "240ms" }}
          >
            <Button
              size="lg"
              asChild
              className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Link href="/contact">
                Demander un échange
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border-border/60 hover:border-primary/40 hover:bg-primary/5"
            >
              <Link href="/services">
                <FileCheck className="h-4 w-4" />
                Découvrir nos services
              </Link>
            </Button>
          </div>

          {/* Audience row */}
          <div
            className="mt-16 flex flex-col items-center gap-3 animate-hero"
            style={{ animationDelay: "320ms" }}
          >
            <p className="text-xs font-medium text-muted-foreground/70 uppercase tracking-widest">
              Accompagnement sur mesure pour
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {["PME & ETI", "Agences web", "Éditeurs logiciels", "Équipes techniques"].map(
                (label, i) => (
                  <span key={label} className="flex items-center gap-3">
                    {i > 0 && (
                      <span className="h-3.5 w-px bg-border/60" aria-hidden />
                    )}
                    <span className="text-sm font-medium text-foreground/70">{label}</span>
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="relative pb-10 flex flex-col items-center gap-2 animate-fade"
        style={{ animationDelay: "600ms" }}
        aria-hidden
      >
        <span className="text-xs text-muted-foreground/50 font-medium tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 text-muted-foreground/50 animate-bounce-down" />
      </div>
    </section>
  )
}
