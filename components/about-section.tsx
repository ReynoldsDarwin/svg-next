"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Blocks, Gauge, Server, ShieldCheck } from "lucide-react"
import Particles from "@/components/ui/particles" 

const features = [
  {
    icon: <Blocks />,
    title: "Arquitectura a Medida",
    description: "Diseñamos la estructura del software para que se adapte y potencie la forma exacta en que opera tu negocio."
  },
  {
    icon: <Gauge />,
    title: "Optimización de Procesos",
    description: "Implementamos algoritmos que automatizan tus flujos de trabajo. Eliminamos el error humano y reducimos drásticamente los tiempos operativos."
  },
  {
    icon: <Server />,
    title: "Escalabilidad Garantizada",
    description: "Infraestructura diseñada para la alta demanda. Tu sistema mantendrá su rendimiento y estabilidad crítica, sin importar cuánto crezcan tus usuarios."
  },
  {
    icon: <ShieldCheck />,
    title: "Estándares de Industria",
    description: "Código limpio, seguro y auditable. Utilizamos tecnologías modernas y protocolos internacionales para garantizar la longevidad de tu inversión."
  }
]

const stats = [
  { label: "Negocios Optimizados", value: "76+" },
  { label: "Horas Ahorradas", value: "Miles+" },
  { label: "Clientes Satisfechos", value: "98%" },
]

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <section id="nosotros" ref={containerRef} className="relative py-20 md:py-32 px-4 bg-black overflow-hidden min-h-[80vh] flex items-center">
      
      {/* --- FONDO DE PARTÍCULAS --- */}
      <div className="absolute inset-0 z-0">
        <Particles
            particleCount={500}
            particleSpread={5}
            speed={0.4}
            particleColors={['#ffffff', '#06b6d4']}
            moveParticlesOnHover={false}
            particleHoverFactor={1}
            alphaParticles={false}
            particleBaseSize={70}
            sizeRandomness={1}
            cameraDistance={20}
            disableRotation={false}
            className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* --- IZQUIERDA: Manifiesto --- */}
            <div className="relative">
                {/* Línea lateral decorativa */}
                <div className="absolute -left-6 md:-left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-blue-500/50 to-transparent opacity-50" />
                
                {/* BADGE CON LED INTERMITENTE */}
                <div className="mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary text-primary bg-black/50 font-mono text-xs md:text-sm tracking-[0.2em] uppercase backdrop-blur-md">
                        <span className="relative flex items-center justify-center h-2.5 w-2.5">
                            <motion.span 
                                animate={{ opacity: [0, 0.8, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inline-flex h-full w-full rounded-full bg-white blur-[2px]"
                            />
                            <motion.span 
                                animate={{ opacity: [0.1, 1, 0.1] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"
                            />
                        </span>
                        El Núcleo de ADSA
                    </span>
                </div>
                
                <h3 className="text-4xl md:text-6xl lg:text-6xl font-black text-white mb-8 leading-[1.1]">
                    Tú enfócate en tu negocio, nosotros <br className="hidden md:block"/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-blue-700">
                        nos encargamos de la Tecnología
                    </span>
                </h3>
                
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mb-12 drop-shadow-md">
                    Sabemos que lidiar con sistemas lentos o procesos manuales es agotador. En ADSA analizamos dónde pierde tiempo tu empresa y creamos la herramienta exacta para solucionarlo. Sin complicaciones, solo resultados que te dan tranquilidad.
                </p>
                
                {/* Estadísticas */}
                <div className="flex gap-8 mt-8 pt-8">
                    {stats.map((s,i) => (
                        <div key={i}>
                            <p className="text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</p>
                            <p className="text-[10px] md:text-xs text-primary font-mono uppercase tracking-widest">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- DERECHA: Tarjetas --- */}
            <div className="grid grid-cols-1 gap-4">
                {features.map((feature, i) => (
                    <motion.div 
                        key={i}
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="flex items-start p-6 border-r-2 border-white/10 bg-black/40 backdrop-blur-sm rounded-l-xl cursor-default group transition-all duration-300 ease-out hover:border-primary hover:bg-blue-800 hover:-translate-x-2"
                    >
                        <div className="mr-6 mt-1 text-gray-500 group-hover:text-primary transition-colors transform group-hover:scale-110 duration-300">
                            {feature.icon}
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg flex items-center gap-2 mb-2">
                                {feature.title} 
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
      </div>
    </section>
  )
}