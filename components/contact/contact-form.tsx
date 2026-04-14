"use client"

import { useState } from "react"
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
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

type SubmitState = "idle" | "loading" | "success" | "error"

interface FormFields {
  firstName: string
  lastName: string
  email: string
  company: string
  subject: string
  message: string
}

const initialFields: FormFields = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  subject: "",
  message: "",
}

function validateFields(fields: FormFields): string | null {
  if (!fields.firstName.trim()) return "Le prénom est requis."
  if (!fields.lastName.trim()) return "Le nom est requis."
  if (!fields.email.trim()) return "L'adresse email est requise."
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    return "L'adresse email n'est pas valide."
  }
  if (!fields.subject) return "Veuillez sélectionner un sujet."
  if (!fields.message.trim()) return "Le message ne peut pas être vide."
  if (fields.message.trim().length < 10) return "Le message doit contenir au moins 10 caractères."
  return null
}

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(initialFields)
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubjectChange(value: string) {
    setFields((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationError = validateFields(fields)
    if (validationError) {
      setErrorMessage(validationError)
      setSubmitState("error")
      return
    }

    setSubmitState("loading")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setSubmitState("success")
      } else {
        setErrorMessage(data.message ?? "Une erreur est survenue. Veuillez réessayer.")
        setSubmitState("error")
      }
    } catch {
      setErrorMessage("Impossible de contacter le serveur. Vérifiez votre connexion.")
      setSubmitState("error")
    }
  }

  if (submitState === "success") {
    return (
      <div className="text-center py-12">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
          <CheckCircle2 className="h-8 w-8" />
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
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">Prénom *</Label>
          <Input
            id="firstName"
            name="firstName"
            value={fields.firstName}
            onChange={handleChange}
            placeholder="Jean"
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Nom *</Label>
          <Input
            id="lastName"
            name="lastName"
            value={fields.lastName}
            onChange={handleChange}
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
          value={fields.email}
          onChange={handleChange}
          placeholder="jean.dupont@entreprise.fr"
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Organisation</Label>
        <Input
          id="company"
          name="company"
          value={fields.company}
          onChange={handleChange}
          placeholder="Nom de votre entreprise"
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Sujet *</Label>
        <Select value={fields.subject} onValueChange={handleSubjectChange}>
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
          value={fields.message}
          onChange={handleChange}
          rows={5}
          placeholder="Décrivez brièvement votre contexte et vos besoins..."
          className="bg-background resize-none"
        />
        <p className="text-xs text-muted-foreground">
          Plus vous êtes précis, mieux nous pourrons préparer notre échange.
        </p>
      </div>

      {submitState === "error" && errorMessage && (
        <div className="flex items-start gap-2 rounded-lg border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full gap-2"
        disabled={submitState === "loading"}
      >
        {submitState === "loading" ? (
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
