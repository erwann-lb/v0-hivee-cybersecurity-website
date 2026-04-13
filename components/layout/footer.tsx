import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"

const navigation = {
  services: [
    { name: "Audit technique", href: "/services#audit" },
    { name: "Sécurité applicative", href: "/services#securite" },
    { name: "Documentation", href: "/services#documentation" },
    { name: "Préparation NIS2", href: "/nis2" },
  ],
  company: [
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
    { name: "Mentions légales", href: "/legal" },
    { name: "Confidentialité", href: "/legal#confidentialite" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">H</span>
              </div>
              <span className="font-heading text-xl font-semibold text-foreground">Hivee</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Audit technique et accompagnement cybersécurité pour structures qui veulent du concret. 
              De l&apos;analyse technique à la documentation, Hivee vous aide à avancer sans usine à gaz.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="mailto:contact@hivee.fr"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Entreprise</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hivee. Tous droits réservés.
            </p>
            <p className="text-sm text-muted-foreground">
              contact@hivee.fr
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
