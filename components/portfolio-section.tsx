"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
// Importamos Particles en lugar de Plasma
import Particles from "@/components/ui/particles"

const projects = [
  {
    id: 1,
    title: "Sistema de Inventario SaaS",
    category: "Desarrollo Web • Dashboard",
    description: "Plataforma integral para gestión de stock en tiempo real con alertas automatizadas.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
    tags: ["Next.js", "Python", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Next Clinic",
    category: "Sistema Web • dashboard",
    description: "Gestiona pacientes, citas y caja desde cualquier dispositivo.",
    image: "/nextclinic.png",
    tags: ["Vite", "PHP", "MariaDB", "Nginx"],
  },
  {
    id: 3,
    title: "App Móvil Fintech",
    category: "App Móvil • iOS & Android",
    description: "Billetera digital segura con integración de pagos QR y transferencias inmediatas.",
    image: "/fintech.png",
    tags: ["React Native", "Node.js", "AWS"],
  },
  {
    id: 4,
    title: "Visualizador de Audio 3D",
    category: "Experiencia Interactiva • OpenGL",
    description: "Renderizado de audio en tiempo real con efectos de partículas y shaders personalizados.",
    image: "/visualizer.jpeg", 
    tags: ["Python", "OpenGL", "C++"],
  },
  {
    id: 5,
    title: "Corporate Landing Page",
    category: "Diseño Web • Branding",
    description: "Sitio web de alto impacto para una firma de abogados internacional.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
]

export function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="portafolio" className="py-24 px-4 bg-black relative min-h-screen overflow-hidden">
      
      {/* --- FONDO DE PARTÍCULAS (Adaptado para Portafolio) --- */}
      <div className="absolute inset-0 z-0">
          <Particles
            particleCount={400}        // Cantidad media de partículas
            particleSpread={10}
            speed={0.3}                // Velocidad más lenta y elegante
            particleColors={['#ffffff', '#857F7E']} 
            moveParticlesOnHover={true} 
            particleHoverFactor={1.5}
            alphaParticles={false}
            particleBaseSize={300}    
            sizeRandomness={1}
            cameraDistance={20}
            disableRotation={false}
            className="h-full w-full opacity-70" // Transparencia 
          />
          
          {/* Degradado sutil superior e inferior para suavizar cortes */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* ENCABEZADO CENTRADO */}
        <div className="mb-16 flex flex-col items-center text-center">
          
          <div className="relative w-fit">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-2"
            >
              Proyectos Destacados
            </motion.h2>
            
            <motion.div 
              className="absolute -bottom-4 left-0 h-1 w-24 bg-primary rounded-full"
              animate={{ left: "calc(100% - 6rem)" }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-gray-400 max-w-2xl mt-8" 
          >
            Una selección de nuestros trabajos más recientes donde la ingeniería se encuentra con el diseño.
          </motion.p>
        </div>

        {/* GRID DE PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              tabIndex={0}
              className="group relative h-[400px] w-full overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 cursor-pointer focus:outline-none tap-highlight-transparent"
            >
              <div 
                className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-105 group-focus:scale-105"
              >
                <div className="absolute inset-0 bg-neutral-900 z-0" />
                
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-focus:opacity-100 group-focus:grayscale-0 relative z-10"
                />
                
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 group-focus:opacity-60 transition-opacity duration-500 z-20" />
              </div>

              {/* CONTENIDO (Texto) */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-30">
                
                {/* Movimiento del texto hacia arriba */}
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2 group-focus:-translate-y-2">
                  <span className="text-primary font-mono text-xs tracking-widest uppercase mb-2 block">
                    {project.category}
                  </span>
                  
                  <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm max-w-md line-clamp-2 mb-4 group-hover:text-white group-focus:text-white transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botón "Ver Proyecto" - Se despliega en Hover y Focus */}
                <div className="overflow-hidden h-0 group-hover:h-12 group-focus:h-12 transition-all duration-300 ease-in-out">
                    <div className="transform translate-y-10 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500 delay-75">
                         <span className="inline-flex items-center text-white font-semibold border-b border-primary pb-1">
                            Ver Proyecto
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                         </span>
                    </div>
                </div>

              </div>

              {/* Borde neón */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 group-focus:border-primary/50 rounded-2xl transition-colors duration-300 pointer-events-none z-40" />
              
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-xl text-lg">
                Ver Todos los Proyectos
            </Button>
        </div>

      </div>
    </section>
  )
}