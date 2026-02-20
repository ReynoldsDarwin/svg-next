"use client"

import React, { useRef, useEffect, useState, useCallback } from 'react'
import { motion } from "framer-motion"
import { gsap } from 'gsap'
import { Code2, Smartphone, Palette, CloudFog, Cpu, ArrowUpRight } from "lucide-react"
import Particles from "@/components/ui/particles"

// --- CONFIGURACIÓN GLOBAL ---
const ADSA_GLOW_COLOR = '6, 182, 212' // Cyan (#06b6d4)
const MOBILE_BREAKPOINT = 768

// --- DATOS ---
const servicesData = [
  {
    colSpan: "md:col-span-2",
    icon: <Code2 className="w-5 h-5" />,
    label: "Desarrollo Web & Sistemas",
    title: "Arquitectura Digital",
    description: "Plataformas robustas y escalables utilizando Next.js, React y arquitecturas modernas."
  },
  {
    colSpan: "md:col-span-1",
    icon: <Smartphone className="w-5 h-5" />,
    label: "iOS & Android",
    title: "Experiencia Móvil",
    description: "Apps nativas que tus usuarios amarán."
  },
  {
    colSpan: "md:col-span-1",
    icon: <Palette className="w-5 h-5" />,
    label: "UI/UX Design",
    title: "Diseño de Producto",
    description: "Interfaces intuitivas centradas en conversión."
  },
  {
    colSpan: "md:col-span-2",
    icon: <CloudFog className="w-5 h-5" />,
    label: "Cloud & DevOps",
    title: "Infraestructura",
    description: "Implementación en AWS/Azure y seguridad de grado bancario para escalar sin miedo."
  },
  {
    colSpan: "md:col-span-3",
    icon: <Cpu className="w-5 h-5" />,
    label: "Transformación Digital",
    title: "Transformación & IA",
    description: "Analizamos tus procesos y diseñamos soluciones tecnológicas con Inteligencia Artificial que optimizan costos y maximizan ingresos."
  }
]

// --- UTILIDADES GSAP ---
const createParticleElement = (x: number, y: number, color: string): HTMLDivElement => {
  const el = document.createElement('div')
  el.className = 'particle'
  el.style.cssText = `
    position: absolute;
    width: 4px; height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 8px rgba(${color}, 0.8);
    pointer-events: none;
    z-index: 100;
    left: ${x}px; top: ${y}px;
  `
  return el
}

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
  const rect = card.getBoundingClientRect()
  const relativeX = ((mouseX - rect.left) / rect.width) * 100
  const relativeY = ((mouseY - rect.top) / rect.height) * 100
  card.style.setProperty('--glow-x', `${relativeX}%`)
  card.style.setProperty('--glow-y', `${relativeY}%`)
  card.style.setProperty('--glow-intensity', glow.toString())
  card.style.setProperty('--glow-radius', `${radius}px`)
}

// --- COMPONENTES INTERNOS ---
const GlobalSpotlight: React.FC<{ gridRef: React.RefObject<HTMLDivElement | null>; disableAnimations: boolean }> = ({ gridRef, disableAnimations }) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null)
  
  useEffect(() => {
    if (disableAnimations || !gridRef?.current) return
    const spotlightRadius = 400
    const proximity = spotlightRadius * 0.5
    const fadeDistance = spotlightRadius * 0.75

    const spotlight = document.createElement('div')
    spotlight.style.cssText = `
      position: fixed; width: 800px; height: 800px; border-radius: 50%; pointer-events: none;
      background: radial-gradient(circle, rgba(${ADSA_GLOW_COLOR}, 0.15) 0%, rgba(${ADSA_GLOW_COLOR}, 0.05) 25%, transparent 60%);
      z-index: 200; opacity: 0; transform: translate(-50%, -50%); mix-blend-mode: screen;
    `
    document.body.appendChild(spotlight)
    spotlightRef.current = spotlight

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return
      const rect = gridRef.current.getBoundingClientRect()
      const mouseInside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom
      const cards = gridRef.current.querySelectorAll('.card')

      if (!mouseInside) {
        gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3 })
        cards.forEach(c => (c as HTMLElement).style.setProperty('--glow-intensity', '0'))
        return
      }

      let minDistance = Infinity
      cards.forEach(card => {
        const cardElement = card as HTMLElement
        const cardRect = cardElement.getBoundingClientRect()
        const centerX = cardRect.left + cardRect.width / 2
        const centerY = cardRect.top + cardRect.height / 2
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2
        const effectiveDistance = Math.max(0, distance)
        minDistance = Math.min(minDistance, effectiveDistance)

        let glowIntensity = 0
        if (effectiveDistance <= proximity) glowIntensity = 1
        else if (effectiveDistance <= fadeDistance) glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity)
        updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius)
      })

      gsap.to(spotlightRef.current, { left: e.clientX, top: e.clientY, duration: 0.1 })
      const targetOpacity = minDistance <= proximity ? 0.8 : minDistance <= fadeDistance ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8 : 0
      gsap.to(spotlightRef.current, { opacity: targetOpacity, duration: targetOpacity > 0 ? 0.2 : 0.5 })
    }

    const handleMouseLeave = () => {
      gridRef.current?.querySelectorAll('.card').forEach(c => (c as HTMLElement).style.setProperty('--glow-intensity', '0'))
      if (spotlightRef.current) gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3 })
    }

    document.addEventListener('mousemove', handleMouseMove)
    gridRef.current.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      gridRef.current?.removeEventListener('mouseleave', handleMouseLeave)
      spotlightRef.current?.remove()
    }
  }, [gridRef, disableAnimations])
  return null
}

const MagicCard: React.FC<{ children: React.ReactNode; className: string; disableAnimations: boolean }> = ({ children, className, disableAnimations }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement[]>([])
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])
  const isHoveredRef = useRef(false)
  const memoizedParticles = useRef<HTMLDivElement[]>([])

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
    particlesRef.current.forEach(p => {
      gsap.to(p, { scale: 0, opacity: 0, duration: 0.3, onComplete: () => p.remove() })
    })
    particlesRef.current = []
  }, [])

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return
    const el = cardRef.current

    const handleMouseEnter = () => {
      isHoveredRef.current = true
      
      if (memoizedParticles.current.length === 0) {
        const { width, height } = el.getBoundingClientRect()
        // 10 partículas es el equilibrio visual perfecto
        memoizedParticles.current = Array.from({ length: 10 }, () => createParticleElement(Math.random() * width, Math.random() * height, ADSA_GLOW_COLOR))
      }

      memoizedParticles.current.forEach((particle, index) => {
        const tId = setTimeout(() => {
          if (!isHoveredRef.current || !cardRef.current) return
          const clone = particle.cloneNode(true) as HTMLDivElement
          cardRef.current.appendChild(clone)
          particlesRef.current.push(clone)
          gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' })
          gsap.to(clone, { x: (Math.random() - 0.5) * 90, y: (Math.random() - 0.5) * 90, rotation: 360, duration: 2 + Math.random() * 2, repeat: -1, yoyo: true, ease: 'none' })
          gsap.to(clone, { opacity: 0.3, duration: 1.5, repeat: -1, yoyo: true, ease: 'power2.inOut' })
        }, index * 80)
        timeoutsRef.current.push(tId)
      })
    }

    const handleMouseLeave = () => {
      isHoveredRef.current = false
      clearAllParticles()
    }

    const handleClick = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const maxDistance = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height))
      
      const ripple = document.createElement('div')
      ripple.style.cssText = `position: absolute; width: ${maxDistance * 2}px; height: ${maxDistance * 2}px; border-radius: 50%; background: radial-gradient(circle, rgba(${ADSA_GLOW_COLOR}, 0.4) 0%, transparent 70%); left: ${x - maxDistance}px; top: ${y - maxDistance}px; pointer-events: none; z-index: 1000;`
      el.appendChild(ripple)
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.8, ease: 'power2.out', onComplete: () => ripple.remove() })
    }

    el.addEventListener('mouseenter', handleMouseEnter)
    el.addEventListener('mouseleave', handleMouseLeave)
    el.addEventListener('click', handleClick)
    
    return () => {
      el.removeEventListener('mouseenter', handleMouseEnter)
      el.removeEventListener('mouseleave', handleMouseLeave)
      el.removeEventListener('click', handleClick)
      clearAllParticles()
    }
  }, [disableAnimations, clearAllParticles])

  return (
    <div ref={cardRef} className={`card ${className}`}>
      {/* LÍNEA DE NEÓN VIAJERA - Ajustada a rounded-2xl */}
      <div className="absolute inset-0 z-0 pointer-events-none rounded-2xl">
        <svg className="w-full h-full absolute inset-0" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="1" y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="15" ry="15"
            fill="none"
            stroke="currentColor"
            className="text-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{
              strokeDasharray: "150 600",
              animation: "border-travel 5s linear infinite"
            }}
          />
        </svg>
      </div>
      {children}
    </div>
  )
}

// --- SECCIÓN PRINCIPAL EXPORTADA ---
export function ServiceSection() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="servicios" className="py-16 md:py-20 px-4 bg-black relative overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* FONDO GLOBAL DE ADSA */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleCount={300}
          particleSpread={10}
          speed={0.3}
          particleColors={['#ffffff', '#06b6d4']}
          moveParticlesOnHover={false}
          className="h-full w-full opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* ESTILOS CSS DEL BENTO MÁGICO */}
      <style>{`
        .bento-section {
          --glow-x: 50%; --glow-y: 50%; --glow-intensity: 0; --glow-radius: 200px;
        }
        .card--border-glow::after {
          content: ''; position: absolute; inset: 0; padding: 2px;
          background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y), rgba(${ADSA_GLOW_COLOR}, calc(var(--glow-intensity) * 0.8)) 0%, transparent 60%);
          border-radius: inherit;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          pointer-events: none; opacity: 1; transition: opacity 0.3s ease; z-index: 1;
        }
        .card--border-glow:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), 0 0 30px rgba(${ADSA_GLOW_COLOR}, 0.15);
        }
        .particle::before {
          content: ''; position: absolute; inset: -2px; background: rgba(${ADSA_GLOW_COLOR}, 0.2); border-radius: 50%; z-index: -1;
        }
        @keyframes border-travel {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -750; }
        }
      `}</style>

      {/* max-w-5xl mantiene el bloque centralizado y evita que crezca demasiado en pantallas ultra anchas */}
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-3xl md:text-4xl font-bold text-white mb-3"
          >
            Nuestras Soluciones
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }} 
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Ingeniería de software de clase mundial para escalar tu visión.
          </motion.p>
        </div>

        <GlobalSpotlight gridRef={gridRef} disableAnimations={isMobile} />

        {/* BENTO GRID INTERMEDIO PERFECTO (160px base) */}
        <div ref={gridRef} className="bento-section grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[minmax(160px,auto)]">
          {servicesData.map((service, idx) => (
            <MagicCard 
              key={idx} 
              disableAnimations={isMobile}
              className={`relative overflow-hidden group flex flex-col justify-between p-5 rounded-2xl border border-white/5 bg-[#050505]/80 backdrop-blur-md transition-colors duration-300 card--border-glow ${service.colSpan}`}
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                
                {/* Header: Icon & Label */}
                <div className="flex justify-between items-start mb-4">
                  {/* w-11 h-11 es el tamaño intermedio perfecto */}
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300 shadow-md">
                    {service.icon}
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono text-cyan-500/70 uppercase tracking-wider bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    {service.label}
                  </span>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-[1.15rem] font-bold text-white mb-1.5 group-hover:text-cyan-100 transition-colors flex items-center gap-2">
                    {service.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-500"/>
                  </h3>
                  <p className="text-sm text-gray-400 leading-snug group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>

              </div>
            </MagicCard>
          ))}
        </div>

      </div>
    </section>
  )
}