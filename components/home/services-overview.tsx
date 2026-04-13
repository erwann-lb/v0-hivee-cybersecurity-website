import Link from "next/link"
import { Code2, ShieldCheck, FileText, Scale, ArrowRight } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Code2,
    title: "Audit technique",
    description: "Revue de code, analyse d'architecture et identification des vulnérabilités dans vos applications et systèmes.",
    href: "/services#audit",
  },
  {
    icon: ShieldCheck,
    title: "Analyse de sécurité applicative",
    description: "Évaluation approfondie de la sécurité de vos applications web, API et infrastructures critiques.",
    href: "/services#securite",
  },
  {
    icon: FileText,
    title: "Accompagnement documentaire",
    description: "Structuration et rédaction de votre documentation cybersécurité : politiques, procédures, plans d'action.",
    href: "/services#documentation",
  },
  {
    icon: Scale,
    title: "Préparation NIS2",
    description: "Accompagnement à la mise en conformité NIS2 : analyse d'écart, structuration des preuves, préparation opérationnelle.",
    href: "/nis2",
  },
]

export function ServicesOverview() {
  return (
    <Section>
      <SectionHeader
        badge="Services"
        title="Une approche complète de la cybersécurité"
        description="Du code à la conformité, nous intervenons là où vous en avez besoin."
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Link key={service.title} href={service.href} className="group">
            <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  )
}
