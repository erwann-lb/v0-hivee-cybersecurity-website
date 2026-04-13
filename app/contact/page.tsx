import type { Metadata } from "next"
import { Mail, Clock, Calendar, MessageSquare, Shield, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact | Hivee - Demander un échange",
  description: "Contactez Hivee pour discuter de vos besoins en cybersécurité. Premier échange sans engagement pour comprendre votre contexte et identifier vos priorités.",
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@hivee.fr",
    description: "Pour toute demande d'information",
  },
  {
    icon: Clock,
    title: "Temps de réponse",
    value: "Sous 24-48h",
    description: "Jours ouvrés",
  },
  {
    icon: Calendar,
    title: "Premier échange",
    value: "30 minutes",
    description: "Gratuit, sans engagement",
  },
]

const reassurances = [
  "Échange confidentiel, aucune donnée partagée",
  "Pas de démarchage commercial agressif",
  "Réponse personnalisée, pas de template",
  "Disponibilité pour vos questions",
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <Section className="bg-gradient-to-b from-card/50 to-background">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-6">
              Contact
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Parlons de vos enjeux
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Premier échange sans engagement pour comprendre votre contexte, évaluer vos besoins et identifier les prochaines étapes possibles.
            </p>
          </div>
        </Section>

        {/* Main content */}
        <Section className="py-12">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
                      Demander un échange
                    </h2>
                    <p className="text-muted-foreground">
                      Remplissez ce formulaire et nous vous recontactons rapidement pour planifier un premier échange.
                    </p>
                  </div>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact info */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-6">Informations de contact</h3>
                  <div className="space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.title}</p>
                          <p className="font-medium text-foreground">{item.value}</p>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Booking card */}
              <Card className="bg-card border-border border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Réserver un créneau</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Préférez-vous choisir directement un créneau pour notre premier échange ?
                  </p>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Voir les disponibilités
                  </a>
                </CardContent>
              </Card>

              {/* Reassurances */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold text-foreground">Notre engagement</h3>
                  </div>
                  <ul className="space-y-3">
                    {reassurances.map((text) => (
                      <li key={text} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* Response time section */}
        <Section className="bg-card/30">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                Comment ça se passe ?
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">1. Vous nous contactez</strong> — via ce formulaire ou par email. Décrivez brièvement votre contexte et vos enjeux.
              </p>
              <p>
                <strong className="text-foreground">2. Nous vous recontactons</strong> — sous 24-48h ouvrées pour comprendre votre besoin et vérifier que nous sommes le bon interlocuteur.
              </p>
              <p>
                <strong className="text-foreground">3. Premier échange</strong> — 30 minutes en visio pour approfondir, répondre à vos questions et identifier les prochaines étapes.
              </p>
              <p>
                <strong className="text-foreground">4. Proposition</strong> — si nous pouvons vous aider, nous vous envoyons une proposition adaptée à votre contexte. Sinon, nous vous orientons.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
