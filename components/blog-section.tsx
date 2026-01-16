"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react"
import Image from "next/image"
import Particles from "./ui/particles" // Asegúrate de que la ruta coincida con donde guardaste el archivo

// --- DATOS: ARTÍCULOS ---
const posts = [
  {
    id: 1,
    title: "¿Tu empresa es esclava del Excel?",
    excerpt: "Descubre cómo las hojas de cálculo manuales están frenando tu crecimiento y por qué un software a medida es la llave para escalar.",
    category: "Optimización",
    date: "15 Ene, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", 
  },
  {
    id: 2,
    title: "La verdad sobre la Automatización",
    excerpt: "No se trata de reemplazar humanos por robots, sino de eliminar las tareas repetitivas para que tu equipo se enfoque en vender más.",
    category: "Estrategia",
    date: "10 Ene, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop", 
  },
  {
    id: 3,
    title: "¿Gasto o Inversión?",
    excerpt: "Análisis financiero real: Cuánto dinero pierde tu negocio por errores humanos y cómo la tecnología se paga sola en menos de 6 meses.",
    category: "Rentabilidad",
    date: "05 Ene, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", 
  }
]

export function BlogSection() {
  return (
    <section id="blog" className="relative pt-20 pb-32 px-4 bg-black overflow-hidden min-h-screen">
      
      {/* --- FONDO DE PARTÍCULAS (AJUSTADO) --- */}
      <div className="absolute inset-0 z-0">
          <Particles
            particleCount={500}
            particleSpread={10}
            speed={0.4}                // Mantiene el movimiento automático fluido
            particleColors={['#ffffff', '#06b6d4']} 
            moveParticlesOnHover={false} // CAMBIO: El mouse ya no afecta a las partículas
            particleHoverFactor={1}
            alphaParticles={false}
            particleBaseSize={150}     // CAMBIO: Reducido de 250 a 150 (40% menos)
            sizeRandomness={1}
            cameraDistance={20}
            disableRotation={false}
            className="h-full w-full"
          />
          
          {/* Degradado para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- ENCABEZADO --- */}
        <div className="text-center mb-12">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
            >
                Conocimiento Estratégico
            </motion.h2>
            
            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-white mb-6"
            >
                Recursos para Subir <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-blue-400">
                    de Nivel tu Negocio
                </span>
            </motion.h3>
            
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 max-w-xl mx-auto text-lg"
            >
                No guardamos secretos. Aquí compartimos cómo la tecnología está resolviendo problemas reales en empresas como la tuya.
            </motion.p>
        </div>

        {/* --- GRID DE ARTÍCULOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
                <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative flex flex-col h-full bg-zinc-900/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-zinc-900/60 hover:-translate-y-2 cursor-pointer"
                >
                    {/* IMAGEN DEL POST */}
                    <div className="relative h-48 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60 z-10" />
                        
                        <Image 
                            src={post.image} 
                            alt={post.title}
                            fill
                            className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                        />
                        
                        {/* BADGE DE CATEGORÍA */}
                        <div className="absolute top-4 left-4 z-20">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/20 text-xs font-mono text-primary backdrop-blur-md uppercase tracking-wide">
                                <Tag className="w-3 h-3" />
                                {post.category}
                            </span>
                        </div>
                    </div>

                    {/* CONTENIDO DEL POST */}
                    <div className="flex flex-col flex-grow p-6">
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-mono">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                            </span>
                        </div>

                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                        </h4>
                        
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center text-sm font-bold text-white group-hover:text-primary transition-colors mt-auto">
                            Leer Artículo
                            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </motion.article>
            ))}
        </div>

      </div>
    </section>
  )
}