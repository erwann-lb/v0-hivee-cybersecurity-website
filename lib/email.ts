/**
 * Utilitaire d'envoi d'email — à brancher sur un provider (ex: Resend).
 *
 * Pour activer l'envoi réel :
 * 1. Installer le SDK du provider : `pnpm add resend`
 * 2. Ajouter la variable d'environnement : RESEND_API_KEY
 * 3. Remplacer le corps de `sendContactEmail` ci-dessous par l'appel API correspondant.
 */

export interface ContactEmailPayload {
  name: string
  email: string
  company?: string | null
  subject: string
  message: string
}

/**
 * Envoie un email de notification suite à une soumission de formulaire contact.
 *
 * @TODO Brancher un provider d'email (ex: Resend, SendGrid, Nodemailer).
 * En attendant, cette fonction ne fait rien et ne lève pas d'erreur
 * pour ne pas bloquer l'enregistrement en base.
 */
export async function sendContactEmail(payload: ContactEmailPayload): Promise<void> {
  // @TODO Implémenter l'envoi réel, par exemple avec Resend :
  //
  // import { Resend } from "resend"
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: "Hivee <noreply@hivee.fr>",
  //   to: "contact@hivee.fr",
  //   subject: `Nouvelle demande de contact — ${payload.subject}`,
  //   text: `Nom : ${payload.name}\nEmail : ${payload.email}\nEntreprise : ${payload.company ?? "—"}\n\n${payload.message}`,
  // })

  // Stub : log serveur uniquement en développement
  if (process.env.NODE_ENV === "development") {
    console.log("[sendContactEmail] Email non branché — payload reçu :", payload)
  }
}
