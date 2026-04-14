import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { getSupabaseServer } from "@/lib/supabase"
import { sendContactEmail } from "@/lib/email"

const contactSchema = z.object({
  firstName: z.string().min(1, "Le prénom est requis").max(100),
  lastName: z.string().min(1, "Le nom est requis").max(100),
  email: z.string().email("Adresse email invalide").max(255),
  company: z.string().max(200).optional().nullable(),
  subject: z.enum(["audit", "securite", "documentation", "nis2", "autre"], {
    errorMap: () => ({ message: "Sujet invalide" }),
  }),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères").max(5000),
})

const subjectLabels: Record<string, string> = {
  audit: "Audit technique",
  securite: "Analyse de sécurité",
  documentation: "Accompagnement documentaire",
  nis2: "Préparation NIS2",
  autre: "Autre demande",
}

export async function POST(req: NextRequest) {
  let body: unknown

  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { success: false, message: "Corps de la requête invalide." },
      { status: 400 }
    )
  }

  const parsed = contactSchema.safeParse(body)

  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Données invalides."
    return NextResponse.json(
      { success: false, message: firstError },
      { status: 422 }
    )
  }

  const { firstName, lastName, email, company, subject, message } = parsed.data
  const name = `${firstName.trim()} ${lastName.trim()}`

  const { error: dbError } = await getSupabaseServer().from("contact_submissions").insert({
    name,
    email: email.trim(),
    company: company?.trim() || null,
    subject,
    message: message.trim(),
    status: "new",
  })

  if (dbError) {
    console.error("[api/contact] Erreur Supabase :", dbError.message)
    return NextResponse.json(
      { success: false, message: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    )
  }

  // Envoi d'email — stub pour l'instant, ne bloque pas le succès
  await sendContactEmail({
    name,
    email,
    company: company?.trim() || null,
    subject: subjectLabels[subject] ?? subject,
    message: message.trim(),
  }).catch((err) => {
    console.error("[api/contact] Erreur envoi email (non bloquant) :", err)
  })

  return NextResponse.json(
    { success: true, message: "Votre demande a bien été enregistrée." },
    { status: 200 }
  )
}

export async function GET() {
  return NextResponse.json({ success: false, message: "Méthode non autorisée." }, { status: 405 })
}
