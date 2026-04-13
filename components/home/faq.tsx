"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quelle est la différence entre un audit technique et une analyse de sécurité applicative ?",
    answer: "L'audit technique est une revue approfondie de votre code source et de votre architecture. L'analyse de sécurité applicative se concentre sur l'identification des vulnérabilités exploitables dans vos applications en production. Les deux sont complémentaires et peuvent être combinés selon vos besoins.",
  },
  {
    question: "Combien de temps dure un audit ?",
    answer: "La durée dépend du périmètre. Un audit ciblé peut prendre quelques jours, un audit complet plusieurs semaines. Nous définissons ensemble le périmètre lors du diagnostic initial, et vous recevez un planning précis avant de démarrer.",
  },
  {
    question: "Êtes-vous en mesure de certifier notre conformité NIS2 ?",
    answer: "Non, nous ne sommes pas un organisme de certification. En revanche, nous vous accompagnons dans la préparation : identification des écarts, structuration de la documentation, mise en place des processus. Vous serez prêts quand viendra le moment de la conformité formelle.",
  },
  {
    question: "Comment se passe la restitution des audits ?",
    answer: "Vous recevez un rapport structuré avec des constats clairs, des niveaux de criticité et des recommandations priorisées. Nous prévoyons systématiquement un temps d'échange pour vous présenter les résultats et répondre à vos questions.",
  },
  {
    question: "Travaillez-vous uniquement en France ?",
    answer: "Nous intervenons principalement en France, mais nous pouvons accompagner des structures francophones ou anglophones ailleurs. Les audits peuvent se faire à distance pour la plupart des périmètres.",
  },
  {
    question: "Pouvez-vous former nos équipes ?",
    answer: "Oui, nous proposons des sessions de sensibilisation et de formation technique adaptées à vos équipes : développeurs, ops, management. Le format est défini sur mesure selon vos besoins.",
  },
]

export function FAQ() {
  return (
    <Section>
      <SectionHeader
        badge="FAQ"
        title="Questions fréquentes"
        description="Les réponses aux questions que vous vous posez sur notre accompagnement."
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
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
