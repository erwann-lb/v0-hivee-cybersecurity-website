import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Scale, FileSearch, FolderCheck, Users, AlertCircle, CheckCircle2, HelpCircle } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Préparation NIS2 | Hivee - Accompagnement Conformité",
  description: "Préparez votre conformité NIS2 avec Hivee. Gap analysis, structuration documentaire et accompagnement opérationnel pour les PME et organisations concernées.",
}

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Analyse d'écart",
    description: "Nous évaluons votre situation actuelle par rapport aux exigences NIS2 : gouvernance, gestion des risques, mesures techniques, processus de notification.",
  },
  {
    number: "02",
    icon: FolderCheck,
    title: "Structuration documentaire",
    description: "Nous vous aidons à formaliser les politiques, procédures et preuves nécessaires. Documentation claire, adaptée à votre taille et votre contexte.",
  },
  {
    number: "03",
    icon: Users,
    title: "Préparation opérationnelle",
    description: "Nous accompagnons la mise en place des processus : gestion des incidents, continuité d'activité, sensibilisation, relations avec les autorités.",
  },
]

const clarifications = [
  {
    title: "Ce que nous faisons",
    items: [
      "Évaluation de votre éligibilité NIS2",
      "Analyse d'écart par rapport aux exigences",
      "Structuration de votre documentation",
      "Accompagnement à la mise en place des processus",
      "Préparation de vos équipes",
    ],
    positive: true,
  },
  {
    title: "Ce que nous ne faisons pas",
    items: [
      "Certification ou attestation officielle",
      "Représentation juridique",
      "Audit de conformité formel",
      "Conseil juridique (nous collaborons avec des avocats si nécessaire)",
    ],
    positive: false,
  },
]

const faqs = [
  {
    question: "Mon organisation est-elle concernée par NIS2 ?",
    answer: "NIS2 concerne les entités essentielles et importantes dans des secteurs définis (énergie, transports, santé, infrastructures numériques, etc.). Les critères incluent la taille de l'organisation et son secteur d'activité. Nous pouvons vous aider à déterminer votre éligibilité lors d'un premier échange.",
  },
  {
    question: "Quelle est la différence entre préparation et certification NIS2 ?",
    answer: "La préparation consiste à mettre en place les mesures et documentation nécessaires pour répondre aux exigences. La certification ou conformité formelle sera évaluée par les autorités compétentes. Hivee vous accompagne dans la préparation, pas dans la certification officielle.",
  },
  {
    question: "Combien de temps faut-il pour se préparer à NIS2 ?",
    answer: "Cela dépend fortement de votre maturité actuelle. Pour une organisation déjà structurée, quelques mois peuvent suffire. Pour partir de zéro, comptez plutôt 6 à 12 mois. Nous définissons ensemble un planning réaliste lors du diagnostic initial.",
  },
  {
    question: "Par où commencer ?",
    answer: "Par une analyse d'écart : comprendre où vous en êtes et ce qu'il reste à faire. C'est la première étape de notre accompagnement, et elle vous donne une vision claire de votre feuille de route.",
  },
]

export default function NIS2Page() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <Section className="bg-gradient-to-b from-card/50 to-background">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-6">
              NIS2
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Préparez votre conformité NIS2 sereinement
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              La directive NIS2 impose de nouvelles exigences aux organisations. Nous vous accompagnons dans la préparation : analyse d&apos;écart, documentation, mise en place des processus.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild className="gap-2">
                <Link href="/contact">
                  Évaluer ma situation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Section>

        {/* What is NIS2 */}
        <Section>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <SectionHeader
                badge="Comprendre"
                title="NIS2, c'est quoi ?"
                description=""
                centered={false}
              />
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  La directive NIS2 (Network and Information Security) est le nouveau cadre européen de cybersécurité. Elle renforce les obligations des organisations dans les secteurs critiques et étend son périmètre à de nouvelles entités.
                </p>
                <p>
                  Concrètement, les organisations concernées doivent mettre en place une gouvernance cyber, gérer leurs risques, notifier les incidents significatifs et assurer la sécurité de leur chaîne d&apos;approvisionnement.
                </p>
                <p>
                  L&apos;objectif n&apos;est pas de cocher des cases, mais de réellement améliorer votre posture de sécurité. C&apos;est dans cet esprit que nous vous accompagnons.
                </p>
              </div>
            </div>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">Points clés NIS2</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Gouvernance et responsabilité de la direction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Analyse et gestion des risques cyber</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Mesures techniques et organisationnelles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Gestion et notification des incidents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Sécurité de la chaîne d&apos;approvisionnement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Continuité d&apos;activité et gestion de crise</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Our approach */}
        <Section className="bg-card/30">
          <SectionHeader
            badge="Notre approche"
            title="Comment nous vous accompagnons"
            description="Un parcours structuré, adapté à votre rythme et à vos moyens."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-border to-transparent -translate-x-6" />
                )}
                
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative mb-6">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-card border border-border">
                      <step.icon className="h-10 w-10 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* What we do / don't do */}
        <Section>
          <SectionHeader
            badge="En toute transparence"
            title="Ce que vous pouvez attendre de nous"
            description="Nous croyons à la clarté. Voici ce que nous faisons, et ce que nous ne faisons pas."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {clarifications.map((item) => (
              <Card key={item.title} className={`bg-card border-border ${item.positive ? "border-accent/30" : "border-destructive/30"}`}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    {item.positive ? (
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                    ) : (
                      <AlertCircle className="h-6 w-6 text-destructive" />
                    )}
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {item.items.map((text) => (
                      <li key={text} className="flex items-start gap-3">
                        <span className={`text-lg ${item.positive ? "text-accent" : "text-destructive"}`}>
                          {item.positive ? "+" : "−"}
                        </span>
                        <span className="text-muted-foreground">{text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section className="bg-card/30">
          <SectionHeader
            badge="FAQ"
            title="Questions fréquentes sur NIS2"
            description=""
          />

          <div className="mt-12 mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-4">
                    <span className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 pl-8 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>

        {/* CTA */}
        <Section className="bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Prêt à évaluer votre situation ?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Premier échange sans engagement pour comprendre votre contexte, évaluer votre éligibilité NIS2 et identifier vos prochaines étapes.
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
