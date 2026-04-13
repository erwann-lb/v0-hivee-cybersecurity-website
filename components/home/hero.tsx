import Link from "next/link"
import { ArrowRight, Shield, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F293710_1px,transparent_1px),linear-gradient(to_bottom,#1F293710_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
              <Shield className="h-4 w-4" />
              Cybersécurité & Conformité
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
            Audit technique et accompagnement cybersécurité{" "}
            <span className="text-primary">pour structures qui veulent du concret</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed sm:text-xl text-pretty">
            Identifiez vos risques, structurez vos actions, préparez-vous sérieusement. 
            De l&apos;analyse technique à la documentation, Hivee vous aide à avancer sans usine à gaz.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild className="gap-2">
              <Link href="/contact">
                Demander un échange
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <Link href="/services">
                <FileCheck className="h-4 w-4" />
                Découvrir nos services
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">Accompagnement sur mesure pour</p>
            <div className="flex flex-wrap justify-center gap-6">
              <span className="text-sm font-medium text-foreground/80">PME</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm font-medium text-foreground/80">Agences web</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm font-medium text-foreground/80">Éditeurs logiciels</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm font-medium text-foreground/80">Équipes techniques</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
