import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"

export function CTABanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F293710_1px,transparent_1px),linear-gradient(to_bottom,#1F293710_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Radial amber glow — center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, color-mix(in srgb, #F59E0B 8%, transparent) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Top border accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in srgb, #F59E0B 50%, transparent), transparent)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="up">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Prêt à structurer{" "}
              <span className="text-primary">votre sécurité ?</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
              Prenons le temps d&apos;échanger sur vos enjeux. Premier échange sans engagement pour
              comprendre votre contexte et identifier les priorités.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              asChild
              className="gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
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
              className="hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border-border/60 hover:border-primary/40 hover:bg-primary/5"
            >
              <Link href="/a-propos">En savoir plus sur Hivee</Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
