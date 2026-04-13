import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Code2, ShieldCheck, FileText, Scale, CheckCircle2, AlertTriangle, FileSearch, Users } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Services | Hivee - Audit & Accompagnement Cybersécurité",
  description: "Audit technique, analyse de sécurité applicative, accompagnement documentaire et préparation NIS2. Découvrez nos services cybersécurité pour PME et équipes techniques.",
}

const services = [
  {
    id: "audit",
    icon: Code2,
    title: "Audit technique de code et d'application",
    description: "Une analyse approfondie de votre code source, de votre architecture et de vos pratiques de développement pour identifier les failles de sécurité avant qu'elles ne deviennent des problèmes.",
    deliverables: [
      "Rapport d'audit complet avec niveau de criticité",
      "Analyse des vulnérabilités identifiées",
      "Recommandations techniques priorisées",
      "Plan de remédiation actionnable",
      "Session de restitution avec vos équipes",
    ],
    outcomes: [
      "Vision claire de vos risques techniques",
      "Feuille de route de remédiation",
      "Renforcement de votre posture sécurité",
    ],
  },
  {
    id: "securite",
    icon: ShieldCheck,
    title: "Analyse des risques et restitution claire",
    description: "Évaluation de votre exposition aux risques cyber avec une approche pragmatique. Nous identifions les menaces pertinentes pour votre contexte et vous aidons à prioriser vos actions.",
    deliverables: [
      "Cartographie des risques cyber",
      "Analyse des scénarios de menaces",
      "Évaluation de l'impact business",
      "Matrice de priorisation",
      "Recommandations de traitement",
    ],
    outcomes: [
      "Compréhension de votre exposition réelle",
      "Arbitrage éclairé de vos investissements sécurité",
      "Communication facilitée avec la direction",
    ],
  },
  {
    id: "remediation",
    icon: AlertTriangle,
    title: "Accompagnement à la remédiation",
    description: "Nous ne vous laissons pas seuls avec un rapport. Nous vous accompagnons dans la mise en œuvre des correctifs, le suivi des actions et la validation des remédiations.",
    deliverables: [
      "Plan de remédiation détaillé",
      "Support technique à l'implémentation",
      "Revue des correctifs appliqués",
      "Tests de validation",
      "Documentation des changements",
    ],
    outcomes: [
      "Vulnérabilités effectivement corrigées",
      "Équipes montées en compétence",
      "Amélioration mesurable de votre sécurité",
    ],
  },
  {
    id: "documentation",
    icon: FileText,
    title: "Documentation cybersécurité",
    description: "Structuration et rédaction de votre documentation sécurité : politiques, procédures, processus. Des documents clairs, utilisables et adaptés à votre organisation.",
    deliverables: [
      "Politique de sécurité des systèmes d'information (PSSI)",
      "Procédures opérationnelles",
      "Plans de réponse aux incidents",
      "Chartes et guides utilisateurs",
      "Registre des traitements (si applicable)",
    ],
    outcomes: [
      "Gouvernance sécurité formalisée",
      "Conformité réglementaire facilitée",
      "Cadre de référence pour vos équipes",
    ],
  },
  {
    id: "nis2",
    icon: Scale,
    title: "Préparation NIS2 et conformité",
    description: "Accompagnement à la mise en conformité avec la directive NIS2. Nous vous aidons à identifier les écarts, structurer vos preuves et préparer votre organisation.",
    deliverables: [
      "Analyse d'écart NIS2",
      "Plan de mise en conformité",
      "Structuration des preuves",
      "Accompagnement à la documentation",
      "Suivi de la mise en œuvre",
    ],
    outcomes: [
      "Éligibilité NIS2 clarifiée",
      "Roadmap de conformité réaliste",
      "Organisation préparée aux exigences",
    ],
    link: "/nis2",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <Section className="bg-gradient-to-b from-card/50 to-background">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-6">
              Services
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Du code à la conformité
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Une offre complète pour sécuriser vos applications, structurer votre documentation et préparer votre conformité. Chaque intervention est adaptée à votre contexte et vos enjeux.
            </p>
          </div>
        </Section>

        {/* Quick navigation */}
        <Section className="py-12">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground bg-card border border-border rounded-full hover:border-primary/50 hover:text-foreground transition-colors"
              >
                <service.icon className="h-4 w-4" />
                {service.title.split(" ")[0]}
              </a>
            ))}
          </div>
        </Section>

        {/* Services detail */}
        {services.map((service, index) => (
          <Section
            key={service.id}
            id={service.id}
            className={index % 2 === 0 ? "bg-card/30" : ""}
          >
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                  <service.icon className="h-7 w-7" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                {service.link ? (
                  <Button asChild className="gap-2">
                    <Link href={service.link}>
                      En savoir plus sur NIS2
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button asChild className="gap-2">
                    <Link href="/contact">
                      Discuter de votre projet
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>

              {/* Cards */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FileSearch className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Livrables</h3>
                    </div>
                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Résultats attendus</h3>
                    </div>
                    <ul className="space-y-3">
                      {service.outcomes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Section>
        ))}

        {/* CTA */}
        <Section className="bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Un besoin spécifique ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Chaque organisation est différente. Prenons le temps d&apos;échanger pour définir l&apos;accompagnement qui correspond vraiment à vos enjeux.
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
