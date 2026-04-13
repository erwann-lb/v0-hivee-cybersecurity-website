import { Search, Target, Rocket } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnostic",
    description: "Nous analysons votre contexte, vos systèmes et vos enjeux pour comprendre précisément vos besoins et définir le périmètre d'intervention.",
  },
  {
    number: "02",
    icon: Target,
    title: "Analyse & Recommandations",
    description: "Nous réalisons l'audit ou l'analyse demandée, puis vous restituons des constats clairs et des recommandations concrètes, priorisées selon vos risques.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Accompagnement",
    description: "Nous restons à vos côtés pour la mise en œuvre : remédiation technique, structuration documentaire ou préparation à la conformité.",
  },
]

export function Methodology() {
  return (
    <Section className="bg-card/50">
      <SectionHeader
        badge="Méthodologie"
        title="Une approche structurée et pragmatique"
        description="Pas de jargon inutile, pas de slides génériques. Nous vous accompagnons de A à Z avec des livrables actionnables."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            {/* Connector line for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-border to-transparent -translate-x-6" />
            )}
            
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Step number with icon */}
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
  )
}
