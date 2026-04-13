import { Shield, Lock, Eye, Award } from "lucide-react"
import { Section } from "@/components/ui/section"

const trustItems = [
  {
    icon: Shield,
    title: "Expertise technique",
    description: "Fondateurs issus du monde du développement et de la sécurité applicative.",
  },
  {
    icon: Lock,
    title: "Confidentialité",
    description: "Vos données et votre code sont traités avec la plus grande discrétion.",
  },
  {
    icon: Eye,
    title: "Transparence",
    description: "Méthodologie claire, livrables détaillés, pas de surprise.",
  },
  {
    icon: Award,
    title: "Engagement qualité",
    description: "Chaque mission est traitée avec rigueur et professionnalisme.",
  },
]

export function Trust() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl text-balance">
          Un partenaire de confiance pour votre sécurité
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => (
          <div key={item.title} className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-card border border-border">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
