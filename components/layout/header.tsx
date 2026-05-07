"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "NIS2", href: "/nis2" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/70 shadow-sm shadow-black/20"
          : "bg-background/60 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200",
              "bg-primary group-hover:bg-primary/90 group-hover:scale-105"
            )}
          >
            <span className="text-primary-foreground font-bold text-sm">H</span>
          </div>
          <span className="font-heading text-xl font-semibold text-foreground">Hivee</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-150",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary rounded-full" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Button
            asChild
            className="transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Link href="/contact">Demander un échange</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={cn(
            "lg:hidden p-2 rounded-lg transition-colors duration-150",
            "text-muted-foreground hover:text-foreground hover:bg-secondary"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileMenuOpen}
        >
          <Menu
            className={cn(
              "h-6 w-6 absolute transition-all duration-200",
              mobileMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            )}
          />
          <X
            className={cn(
              "h-6 w-6 transition-all duration-200",
              mobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
            )}
          />
        </button>
      </nav>

      {/* Mobile menu — CSS transition */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-background/98 backdrop-blur-md border-b border-border px-6 py-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2.5 rounded-lg text-base font-medium transition-colors duration-150",
                  isActive
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {item.name}
                {isActive && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                )}
              </Link>
            )
          })}
          <div className="pt-3 border-t border-border mt-2">
            <Button asChild className="w-full">
              <Link href="/contact">Demander un échange</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
