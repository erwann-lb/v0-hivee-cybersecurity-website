import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTABanner() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F293710_1px,transparent_1px),linear-gradient(to_bottom,#1F293710_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Prêt à structurer votre sécurité ?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Prenons le temps d&apos;échanger sur vos enjeux. Premier échange sans engagement pour comprendre votre contexte et identifier les priorités.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild className="gap-2">
              <Link href="/contact">
                Demander un échange
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/a-propos">
                En savoir plus sur Hivee
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
