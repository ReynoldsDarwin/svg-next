"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServiceSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { FAQSection } from "@/components/faq-section"
import { AnimatedCTASection } from "@/components/animated-cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ServiceSection />
        <PortfolioSection />
        <FAQSection />
        <AnimatedCTASection />
      </main>
      <Footer />
    </div>
  )
}