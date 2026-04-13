import { Check, Clock, Users, FileCheck, Shield, Zap } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"

const benefits = [
  {
    icon: Check,
    title: "Expertise concrète",
    description: "Pas de théorie abstraite : des analyses précises et des recommandations actionnables.",
  },
  {
    icon: Clock,
    title: "Réactivité",
    description: "Interlocuteur unique, réponses rapides, pas de bureaucratie. Vous avancez vite.",
  },
  {
    icon: Users,
    title: "Accompagnement fondateurs",
    description: "Vous travaillez directement avec les fondateurs, pas des juniors en rotation.",
  },
  {
    icon: FileCheck,
    title: "Livrables clairs",
    description: "Rapports structurés, priorisés, pensés pour être utilisés — pas classés sans suite.",
  },
  {
    icon: Shield,
    title: "Vision long terme",
    description: "Nous construisons avec vous une posture sécurité durable, pas un audit one-shot.",
  },
  {
    icon: Zap,
    title: "Efficacité",
    description: "Format boutique : on va à l'essentiel, on évite les usines à gaz.",
  },
]

export function Benefits() {
  return (
    <Section className="bg-card/50">
      <SectionHeader
        badge="Pourquoi Hivee"
        title="Ce qui nous différencie"
        description="Une approche directe, technique et humaine de la cybersécurité."
      />

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <benefit.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
