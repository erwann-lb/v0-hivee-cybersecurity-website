import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Mentions légales & Confidentialité | Hivee",
  description: "Mentions légales et politique de confidentialité de Hivee, cabinet de conseil en cybersécurité.",
}

export default function LegalPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <Section className="bg-gradient-to-b from-card/50 to-background py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Mentions légales & Confidentialité
            </h1>
            <p className="mt-4 text-muted-foreground">
              Dernière mise à jour : Avril 2026
            </p>
          </div>
        </Section>

        {/* Content */}
        <Section className="py-12">
          <div className="mx-auto max-w-3xl">
            {/* Mentions légales */}
            <div className="prose prose-invert max-w-none">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6" id="mentions-legales">
                Mentions légales
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Éditeur du site</h3>
                  <p>
                    Hivee SAS<br />
                    [Adresse à compléter]<br />
                    SIRET : [À compléter]<br />
                    RCS : [À compléter]<br />
                    Capital social : [À compléter]
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Directeur de la publication</h3>
                  <p>[Nom du directeur de publication à compléter]</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Hébergement</h3>
                  <p>
                    Ce site est hébergé par Vercel Inc.<br />
                    440 N Barranca Ave #4133<br />
                    Covina, CA 91723<br />
                    États-Unis
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Contact</h3>
                  <p>
                    Email : contact@hivee.fr<br />
                    Pour toute question relative à ce site ou à nos services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Propriété intellectuelle</h3>
                  <p>
                    L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Hivee SAS, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l&apos;accord écrit de Hivee SAS.
                  </p>
                </div>
              </div>

              {/* Politique de confidentialité */}
              <h2 className="font-heading text-2xl font-bold text-foreground mt-16 mb-6" id="confidentialite">
                Politique de confidentialité
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Responsable du traitement</h3>
                  <p>
                    Hivee SAS est responsable du traitement des données personnelles collectées sur ce site.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Données collectées</h3>
                  <p>
                    Nous collectons uniquement les données que vous nous transmettez volontairement via notre formulaire de contact :
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Nom et prénom</li>
                    <li>Adresse email professionnelle</li>
                    <li>Nom de l&apos;organisation (optionnel)</li>
                    <li>Contenu de votre message</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Finalités du traitement</h3>
                  <p>
                    Les données collectées sont utilisées exclusivement pour :
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Répondre à vos demandes de contact</li>
                    <li>Vous recontacter dans le cadre d&apos;une demande d&apos;information ou de devis</li>
                    <li>Assurer le suivi de notre relation commerciale</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Base légale</h3>
                  <p>
                    Le traitement de vos données est fondé sur votre consentement (formulaire de contact) et sur l&apos;exécution de mesures précontractuelles (demande de devis, échange commercial).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Durée de conservation</h3>
                  <p>
                    Vos données sont conservées pendant une durée de 3 ans à compter de notre dernier contact, sauf si une relation contractuelle est établie (auquel cas les durées légales de conservation s&apos;appliquent).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Destinataires des données</h3>
                  <p>
                    Vos données ne sont pas partagées avec des tiers. Elles sont uniquement accessibles aux personnes habilitées au sein de Hivee SAS dans le cadre de leurs fonctions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Vos droits</h3>
                  <p>
                    Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Droit d&apos;accès à vos données</li>
                    <li>Droit de rectification</li>
                    <li>Droit à l&apos;effacement</li>
                    <li>Droit à la limitation du traitement</li>
                    <li>Droit à la portabilité</li>
                    <li>Droit d&apos;opposition</li>
                  </ul>
                  <p className="mt-2">
                    Pour exercer ces droits, contactez-nous à : contact@hivee.fr
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cookies</h3>
                  <p>
                    Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement. Aucun cookie de tracking ou publicitaire n&apos;est utilisé. Des cookies d&apos;analyse anonymisés peuvent être utilisés pour améliorer l&apos;expérience utilisateur (Vercel Analytics).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Réclamation</h3>
                  <p>
                    Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) : www.cnil.fr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
