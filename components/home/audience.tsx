import { Building2, Code, Users, Briefcase } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"

const audiences = [
  {
    icon: Building2,
    title: "PME & ETI",
    description:
      "Vous souhaitez structurer votre sécurité sans recruter un RSSI à temps plein. Nous apportons l'expertise technique et méthodologique dont vous avez besoin.",
    features: ["Audit sur mesure", "Documentation adaptée", "Accompagnement progressif"],
  },
  {
    icon: Code,
    title: "Agences web & ESN",
    description:
      "Vos clients vous demandent des garanties de sécurité. Nous vous aidons à intégrer les bonnes pratiques et à répondre aux exigences de vos donneurs d'ordre.",
    features: ["Revue de code", "Sécurité by design", "Formation équipes"],
  },
  {
    icon: Users,
    title: "Éditeurs logiciels",
    description:
      "Votre produit doit être irréprochable. Nous auditons votre code, vos processus et vous aidons à structurer une démarche sécurité pérenne.",
    features: ["Audit applicatif", "Gestion des vulnérabilités", "Documentation produit"],
  },
  {
    icon: Briefcase,
    title: "Directions & Compliance",
    description:
      "Vous devez préparer NIS2 ou répondre à des exigences réglementaires. Nous structurons votre conformité de manière pragmatique et actionnable.",
    features: ["Gap analysis", "Préparation NIS2", "Gouvernance cyber"],
  },
]

export function Audience() {
  return (
    <Section>
      <Reveal>
        <SectionHeader
          badge="Pour qui"
          title="Un accompagnement adapté à votre contexte"
          description="Que vous soyez une PME, une agence, un éditeur ou une direction métier, nous adaptons notre intervention à vos enjeux."
        />
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {audiences.map((audience, index) => (
          <Reveal
            key={audience.title}
            delay={index * 80}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <div className="group h-full bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-105">
                  <audience.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {audience.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {audience.features.map((feature) => (
                      <li
                        key={feature}
                        className="inline-flex items-center px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full border border-accent/20"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
