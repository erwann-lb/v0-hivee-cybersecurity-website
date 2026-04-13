"use client"

import { useState } from "react"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const subjects = [
  { value: "audit", label: "Audit technique" },
  { value: "securite", label: "Analyse de sécurité" },
  { value: "documentation", label: "Accompagnement documentaire" },
  { value: "nis2", label: "Préparation NIS2" },
  { value: "autre", label: "Autre demande" },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Send className="h-8 w-8" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
          Message envoyé
        </h3>
        <p className="text-muted-foreground">
          Merci pour votre message. Nous vous recontactons sous 24-48h ouvrées.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">Prénom *</Label>
          <Input
            id="firstName"
            name="firstName"
            required
            placeholder="Jean"
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Nom *</Label>
          <Input
            id="lastName"
            name="lastName"
            required
            placeholder="Dupont"
            className="bg-background"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email professionnel *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jean.dupont@entreprise.fr"
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Organisation</Label>
        <Input
          id="company"
          name="company"
          placeholder="Nom de votre entreprise"
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Sujet *</Label>
        <Select name="subject" required>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Sélectionnez un sujet" />
          </SelectTrigger>
          <SelectContent>
            {subjects.map((subject) => (
              <SelectItem key={subject.value} value={subject.value}>
                {subject.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Votre message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez brièvement votre contexte et vos besoins..."
          className="bg-background resize-none"
        />
        <p className="text-xs text-muted-foreground">
          Plus vous êtes précis, mieux nous pourrons préparer notre échange.
        </p>
      </div>

      <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Envoyer ma demande
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        En soumettant ce formulaire, vous acceptez notre{" "}
        <a href="/legal#confidentialite" className="text-primary hover:underline">
          politique de confidentialité
        </a>
        .
      </p>
    </form>
  )
}
