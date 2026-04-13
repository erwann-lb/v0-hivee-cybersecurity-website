import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, Shield, Users, Zap, MessageSquare, Clock } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "À propos | Hivee - Qui sommes-nous",
  description: "Découvrez Hivee, cabinet boutique spécialisé en cybersécurité. Notre mission : accompagner les PME et équipes techniques avec rigueur, pragmatisme et transparence.",
}

const values = [
  {
    icon: Target,
    title: "Pragmatisme",
    description: "Pas de jargon inutile ni de slides génériques. Des recommandations concrètes, priorisées, que vous pouvez appliquer.",
  },
  {
    icon: Shield,
    title: "Rigueur",
    description: "Chaque analyse est menée avec méthode. Nous documentons nos constats et nos recommandations pour qu'ils soient actionnables.",
  },
  {
    icon: MessageSquare,
    title: "Transparence",
    description: "Nous vous disons ce que nous voyons, même si ce n'est pas ce que vous vouliez entendre. La sécurité ne tolère pas les angles morts.",
  },
  {
    icon: Users,
    title: "Accessibilité",
    description: "La cybersécurité ne doit pas être réservée aux grands groupes. Nous adaptons notre accompagnement à votre contexte et vos moyens.",
  },
]

const workingStyle = [
  {
    icon: Users,
    title: "Interlocuteur unique",
    description: "Vous travaillez directement avec les fondateurs, pas des consultants juniors en rotation. Continuité et expertise garanties.",
  },
  {
    icon: Clock,
    title: "Réactivité",
    description: "Format boutique = pas de bureaucratie. Questions traitées rapidement, échanges fluides, décisions qui avancent.",
  },
  {
    icon: Zap,
    title: "Efficacité",
    description: "On va à l'essentiel. Pas de réunions inutiles, pas de livrables qui dorment dans un tiroir. Du concret, vite.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <Section className="bg-gradient-to-b from-card/50 to-background">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-6">
              À propos
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Un partenaire cybersécurité à taille humaine
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Hivee est un cabinet boutique fondé par des praticiens de la sécurité applicative. Notre mission : rendre la cybersécurité accessible et actionnable pour les structures qui veulent avancer concrètement.
            </p>
          </div>
        </Section>

        {/* Mission */}
        <Section>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <SectionHeader
                badge="Notre mission"
                title="Aider les organisations à structurer leur sécurité, sans usine à gaz"
                description=""
                centered={false}
              />
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Trop souvent, la cybersécurité est perçue comme un domaine complexe, coûteux, réservé aux grandes entreprises. Les PME, agences et éditeurs se retrouvent avec des audits génériques, des rapports incompréhensibles, ou pas d&apos;accompagnement du tout.
                </p>
                <p>
                  Nous avons créé Hivee pour changer ça. Notre approche est directe : comprendre votre contexte, identifier vos vrais risques, et vous aider à mettre en place des mesures adaptées à vos moyens.
                </p>
                <p>
                  Pas de buzzwords, pas de peur marketing, pas de solutions démesurées. Juste un accompagnement technique et humain, pensé pour des organisations qui veulent avancer.
                </p>
              </div>
            </div>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Ce qui nous anime
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">1</span>
                    <span className="text-muted-foreground">Rendre la sécurité compréhensible et actionnable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">2</span>
                    <span className="text-muted-foreground">Accompagner avec rigueur, sans complexité inutile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">3</span>
                    <span className="text-muted-foreground">Créer de la valeur durable, pas des livrables jetables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">4</span>
                    <span className="text-muted-foreground">Traiter chaque client comme un partenaire, pas un ticket</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Values */}
        <Section className="bg-card/30">
          <SectionHeader
            badge="Nos valeurs"
            title="Ce en quoi nous croyons"
            description="Des principes simples qui guident notre travail au quotidien."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Working style */}
        <Section>
          <SectionHeader
            badge="Notre façon de travailler"
            title="Pourquoi nos clients travaillent avec nous"
            description="Format boutique, relation directe, résultats concrets."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {workingStyle.map((item) => (
              <Card key={item.title} className="bg-card border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Founders section */}
        <Section className="bg-card/30">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-6">
              L&apos;équipe
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Des fondateurs engagés
            </h2>
            <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed text-left">
              <p>
                Hivee a été fondé par des praticiens issus du monde du développement et de la sécurité applicative. Avant de créer Hivee, nous avons travaillé sur des audits techniques, des projets de conformité et des accompagnements pour des organisations de toutes tailles.
              </p>
              <p>
                Ce que nous avons constaté : beaucoup de structures ont besoin d&apos;un accompagnement de qualité, mais pas forcément des ressources ou du budget pour faire appel aux grands cabinets. Et les offres &quot;standardisées&quot; ne répondent pas à leurs vrais besoins.
              </p>
              <p>
                C&apos;est pour combler ce vide que nous avons créé Hivee : un cabinet qui combine rigueur technique et relation de proximité. Quand vous travaillez avec nous, vous travaillez avec les fondateurs — pas des consultants de passage.
              </p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section className="bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Envie d&apos;échanger ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Prenons le temps de discuter de vos enjeux. Premier échange sans engagement pour comprendre votre contexte et voir comment nous pouvons vous aider.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild className="gap-2">
                <Link href="/contact">
                  Demander un échange
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
