"use client"

import type React from "react"
import { motion } from "framer-motion"
// Asegúrate de que esta ruta sea correcta en tu proyecto (la vi en tu código anterior)
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg"

// --- INTERFAZ EXPORTABLE ---
export interface BentoCardProps {
  title: string
  value: string | number
  subtitle?: string
  colors: string[]
  delay: number
  colSpan?: string
}

// --- COMPONENTE BENTO CARD (EXPORTABLE) ---
export const BentoCard: React.FC<BentoCardProps> = ({ title, value, subtitle, colors, delay, colSpan }) => {
  return (
    <motion.div
      // Estructura base
      className={`relative overflow-hidden h-full bg-black rounded-xl group transition-colors duration-500 ${colSpan}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      // Aplica el filtro de ruido definido en el componente padre
      style={{ filter: "url(#noise)" }}
    >
      {/* 1. FONDO GRADIENTE */}
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />

      {/* 2. TEXTURA DE RUIDO */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "256px 256px",
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* 3. PATRÓN DE PUNTOS */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px),
                              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "32px 32px, 48px 48px",
            backgroundPosition: "0 0, 16px 16px",
          }}
        />
      </div>

      {/* 4. EFECTO SHINE */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"
          style={{ 
            animation: 'shine-glass 4s infinite ease-in-out',
            left: '-200%',
            mixBlendMode: 'overlay'
          }}
        />
      </div>

      {/* 5. BORDE ANIMADO (Traveling Stroke) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Rectángulo Base */}
          <rect
            x="1" y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="12" ry="12"
            fill="none"
            stroke="white"
            strokeWidth="1"
            className="opacity-[0.05]"
          />
          {/* Rectángulo Animado */}
          <rect
            x="1" y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="12" ry="12"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-40 group-hover:opacity-80 transition-opacity duration-500"
            style={{
              strokeDasharray: "200 600",
              animation: "border-travel 5s linear infinite"
            }}
          />
        </svg>
      </div>

      {/* 6. CONTENIDO */}
      <div className="relative z-30 p-5 h-full flex flex-col justify-end min-h-[160px]">
        <h3 className="text-xs font-bold uppercase tracking-widest text-primary/90 mb-1.5 drop-shadow-md">
          {title}
        </h3>
        <p className="text-2xl md:text-3xl font-semibold mb-3 text-white leading-tight drop-shadow-lg">
          {value}
        </p>
        {subtitle && (
          <p className="text-sm text-gray-300 leading-relaxed max-w-sm drop-shadow-sm">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  )
}

// --- COMPONENTE PRINCIPAL (EXPORT DEFAULT O NAMED EXPORT) ---
export function ServiceSection() {
  return (
    <section id="servicios" className="py-20 px-4 bg-black relative overflow-hidden">
      
      {/* Definición de Filtros SVG globales */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence baseFrequency="0.4" numOctaves="2" result="noise" seed="2" type="fractalNoise" />
            <feColorMatrix in="noise" type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0.02 0.04 0.06" />
            </feComponentTransfer>
            <feComposite operator="over" in2="SourceGraphic" />
          </filter>
        </defs>
      </svg>

      {/* Estilos de Animación */}
      <style>{`
        @keyframes shine-glass {
          0% { transform: translateX(0) skewX(-20deg); opacity: 0; }
          10% { opacity: 1; }
          40% { transform: translateX(200%) skewX(-20deg); opacity: 1; }
          41% { opacity: 0; }
          100% { opacity: 0; }
        }

        @keyframes border-travel {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -800; }
        }
      `}</style>

      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Nuestras Soluciones
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Ingeniería de software de clase mundial para escalar tu visión.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
          
          <BentoCard
            colSpan="md:col-span-2"
            title="Arquitectura Digital"
            value="Desarrollo Web & Sistemas"
            subtitle="Plataformas robustas y escalables utilizando Next.js, React y arquitecturas modernas."
            colors={["#000000", "#1a1a1a", "#0a0a0a"]} 
            delay={0.1}
          />

          <BentoCard
            colSpan="md:col-span-1"
            title="Experiencia Móvil"
            value="iOS & Android"
            subtitle="Apps nativas que tus usuarios amarán."
            colors={["#050505", "#151515", "#0a0a0a"]}
            delay={0.2}
          />

          <BentoCard
            colSpan="md:col-span-1"
            title="Diseño de Producto"
            value="UI/UX Design"
            subtitle="Interfaces intuitivas centradas en conversión."
            colors={["#0a0a0a", "#1a1a1a", "#050505"]}
            delay={0.3}
          />

          <BentoCard
            colSpan="md:col-span-2"
            title="Infraestructura"
            value="Cloud & DevOps"
            subtitle="Implementación en AWS/Azure y seguridad de grado bancario para escalar sin miedo."
            colors={["#080808", "#181818", "#101010"]}
            delay={0.4}
          />

          <BentoCard
            colSpan="md:col-span-3"
            title="Estrategia"
            value="Transformación Digital"
            subtitle="Analizamos tus procesos y diseñamos soluciones tecnológicas que optimizan costos y maximizan ingresos."
            colors={["#000000", "#111111", "#050505"]}
            delay={0.5}
          />
        </div>
      </div>
    </section>
  )
}