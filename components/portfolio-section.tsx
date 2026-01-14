"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

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
    title: "App Móvil Fintech",
    category: "App Móvil • iOS & Android",
    description: "Billetera digital segura con integración de pagos QR y transferencias inmediatas.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
    tags: ["React Native", "Node.js", "AWS"],
  },
  {
    id: 3,
    title: "Visualizador de Audio 3D",
    category: "Experiencia Interactiva • OpenGL",
    description: "Renderizado de audio en tiempo real con efectos de partículas y shaders personalizados.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
    tags: ["Python", "OpenGL", "C++"],
  },
  {
    id: 4,
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
    <section id="portafolio" className="py-24 px-4 bg-black relative">
      
      {/* Fondo grid sutil */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
             backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* ENCABEZADO CENTRADO */}
        {/* Usamos flex-col y items-center para asegurar que todo esté alineado al centro */}
        <div className="mb-16 flex flex-col items-center text-center">
          
          {/* CONTENEDOR TÍTULO + LÍNEA */}
          {/* 'w-fit' hace que esta caja mida EXACTAMENTE lo que mide el texto */}
          <div className="relative w-fit">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-2" // mb-2 para dar espacio a la línea
            >
              Proyectos Destacados
            </motion.h2>
            
            {/* LÍNEA ANIMADA */}
            {/* absolute: para que flote sobre el contenedor del título */}
            {/* bottom-0: pegado abajo */}
            {/* animate={{ left: ... }}: Mueve la línea de 0 a (100% ancho - ancho línea) */}
            <motion.div 
              className="absolute -bottom-4 left-0 h-1 w-24 bg-primary rounded-full"
              animate={{ left: "calc(100% - 6rem)" }} // 6rem es el ancho de w-24
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
              className="group relative h-[400px] w-full overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 cursor-pointer"
            >
              <div 
                className="absolute inset-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              >
                <div className="absolute inset-0 bg-neutral-900 z-0" />
                
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`
                    w-full h-full object-cover transition-opacity duration-500
                    ${hoveredIndex === index ? "opacity-100" : "opacity-40 grayscale"} 
                  `}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="text-primary font-mono text-xs tracking-widest uppercase mb-2 block">
                    {project.category}
                  </span>
                  
                  <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm max-w-md line-clamp-2 mb-4 group-hover:text-white transition-colors duration-300">
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

                <div className="overflow-hidden h-0 group-hover:h-12 transition-all duration-300 ease-in-out">
                    <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                         <span className="inline-flex items-center text-white font-semibold border-b border-primary pb-1">
                            Ver Caso de Estudio
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                         </span>
                    </div>
                </div>

              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
              
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