"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { BackgroundPaths } from "@/components/ui/floating-paths"
import { useOffscreenPause } from "@/lib/use-offscreen-pause"

export function AnimatedCTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  // 128 trazos SVG animados: se pausan mientras la sección está fuera de pantalla.
  useOffscreenPause(sectionRef)

  return (
    // Móvil: al menos 60% de la pantalla y contenido centrado; escritorio: altura natural.
    <section
      ref={sectionRef}
      className="relative min-h-[60dvh] md:min-h-0 flex flex-col justify-center py-12 md:py-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <BackgroundPaths />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 70%)" }}
      />

      <div className="relative z-10 container mx-auto">
        <div className="rounded-2xl p-6 md:p-12 text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in-up leading-tight"
            style={{ fontFamily: "var(--font-playfair)", animationDelay: "0.5s" }}
          >
            ¿Listo para Transformar tu Negocio?
          </h2>

          <p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            Únete a las empresas que ya han modernizado sus operaciones y potenciado su productividad con las soluciones de ADSA.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <Button size="lg" className="bg-white text-black hover:bg-white/90 group w-full sm:w-auto h-12 text-base">
              Agendar Consultoría
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent w-full sm:w-auto h-12 text-base">
              Hablemos por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
