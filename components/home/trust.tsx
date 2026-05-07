import { Shield, Lock, Eye, Award } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Reveal } from "@/components/ui/reveal"

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
      <Reveal className="text-center mb-12">
        <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl text-balance">
          Un partenaire de confiance pour votre sécurité
        </h2>
        <p className="mt-3 text-muted-foreground text-base max-w-xl mx-auto">
          Des fondateurs techniques qui vous parlent directement, sans intermédiaire.
        </p>
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 80} direction="up">
            <div className="group text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-card border border-border transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/5 group-hover:scale-110">
                <item.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
