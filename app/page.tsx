import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { Trust } from "@/components/home/trust"
import { ServicesOverview } from "@/components/home/services-overview"
import { Methodology } from "@/components/home/methodology"
import { Audience } from "@/components/home/audience"
import { Benefits } from "@/components/home/benefits"
import { FAQ } from "@/components/home/faq"
import { CTABanner } from "@/components/home/cta-banner"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Trust />
        <ServicesOverview />
        <Methodology />
        <Audience />
        <Benefits />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
