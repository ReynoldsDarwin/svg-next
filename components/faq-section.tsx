"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Particles from "@/components/ui/particles" // Importamos las partículas

const faqs = [
  {
    question: "¿Necesito saber de tecnología para trabajar con ustedes?",
    answer:
      "En absoluto. Ese es nuestro trabajo. Tú eres el experto en tu negocio, nosotros nos encargamos de traducir tus necesidades a código. Hablamos tu idioma, no 'lenguaje robot'.",
  },
  {
    question: "¿Es muy costoso desarrollar software a medida?",
    answer:
      "Piénsalo así: ¿Cuánto te cuesta hoy seguir cometiendo errores manuales o perder horas en Excel? Nuestras soluciones se pagan solas al recuperar ese tiempo. Además, diseñamos presupuestos escalables según tu etapa actual.",
  },
  {
    question: "¿Cuánto tiempo tarda en estar listo mi sistema?",
    answer:
      "No creemos en proyectos eternos de 1 año. Trabajamos con entregas ágiles: en las primeras 4-6 semanas ya tendrás una versión funcional (MVP) que empezará a resolver problemas reales mientras seguimos mejorando el resto.",
  },
  {
    question: "¿Qué pasa si mi negocio crece o cambia?",
    answer:
      "Nuestros sistemas nacen escalables. A diferencia del software enlatado, lo que construimos hoy está preparado para soportar el doble o triple de usuarios mañana sin romperse ni volverse lento.",
  },
  {
    question: "¿Me dejan solo después de la entrega?",
    answer:
      "Jamás. Buscamos relaciones a largo plazo. Ofrecemos planes de soporte y mantenimiento para asegurar que tu sistema siga volando, actualizándose y seguro mes a mes.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 px-4 bg-black relative min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* --- FONDO DE PARTÍCULAS SUTIL --- */}
      <div className="absolute inset-0 z-0">
          <Particles
            particleCount={300}        
            particleSpread={10}
            speed={0.2}                
            particleColors={['#ffffff', '#06b6d4']} 
            moveParticlesOnHover={false} 
            particleHoverFactor={1}
            alphaParticles={false}
            particleBaseSize={100}      
            sizeRandomness={1}
            cameraDistance={20}
            disableRotation={false}
            className="h-full w-full opacity-90" 
          />
          {/* Degradado para que el texto sea legible siempre */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* --- ENCABEZADO CON ESTILO --- */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Preguntas <br className="md:hidden" />
            {/* Degradado en el texto */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-gray-500">
              Frecuentes
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Todo lo que necesitas saber sobre cómo trabajamos. ¿No encuentras lo que buscas? Contáctanos directamente.
          </motion.p>
        </div>

        {/* --- ACORDEÓN (Estilo LeLo adaptado) --- */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`border rounded-xl backdrop-blur-md transition-all duration-300 ${
                  openIndex === index 
                  ? "bg-zinc-900/80 border-primary/50 shadow-[0_0_15px_-5px_rgba(var(--primary-rgb),0.15)]" 
                  : "bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60 hover:border-white/10"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between transition-colors rounded-xl focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-lg md:text-xl font-semibold pr-8 transition-colors ${openIndex === index ? "text-white" : "text-gray-300"}`}>
                    {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-400 leading-relaxed text-base md:text-lg border-t border-white/5 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}