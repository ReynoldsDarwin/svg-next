"use client"

import { ADSA_Logo } from "./ADSA-logo"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/10 py-6 md:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 mb-4 md:mb-8">
          
          {/* Marca y Tagline */}
          <div className="max-w-sm">
            <div className="mb-2">
               <ADSA_Logo className="h-5 w-auto md:h-8" />
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Software a medida que transforma negocios. <br className="hidden md:block" />
              Ingeniería estratégica para el mundo real.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="flex flex-wrap gap-8 md:gap-12 w-full md:w-auto mt-2 md:mt-0">
            <div className="flex flex-col gap-1 md:gap-2">
                <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-wide opacity-70">Explorar</h4>
                <a href="#servicios" className="text-xs md:text-sm text-gray-500 hover:text-primary transition-colors">Servicios</a>
                <a href="#portafolio" className="text-xs md:text-sm text-gray-500 hover:text-primary transition-colors">Portafolio</a>
                <a href="#blog" className="text-xs md:text-sm text-gray-500 hover:text-primary transition-colors">Recursos</a>
            </div>
            
            <div className="flex flex-col gap-1 md:gap-2">
                <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-wide opacity-70">Contacto</h4>
                <a href="mailto:contacto@adsa.dev" className="text-xs md:text-sm text-gray-500 hover:text-primary transition-colors">contacto@adsa.dev</a>
                <a href="https://wa.me/123456789" className="text-xs md:text-sm text-gray-500 hover:text-primary transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-white/5 my-4 md:my-8" />
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          
          <p className="text-[10px] md:text-xs text-gray-600 italic">
            &copy; {currentYear} Agencia de Desarrollo de Software del Altiplano - ADSA | Todos los derechos reservados.
          </p>

          <div className="flex gap-3 md:gap-4">
            <SocialIcon icon={<Linkedin className="w-3 h-3 md:w-4 md:h-4" />} href="#" />
            <SocialIcon icon={<Github className="w-3 h-3 md:w-4 md:h-4" />} href="#" />
            <SocialIcon icon={<Twitter className="w-3 h-3 md:w-4 md:h-4" />} href="#" />
            <SocialIcon icon={<Mail className="w-3 h-3 md:w-4 md:h-4" />} href="mailto:contacto@adsa.dev" />
          </div>

        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a 
      href={href} 
      className="h-8 w-8 flex items-center justify-center rounded-full bg-zinc-900 border border-white/5 text-gray-400 hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
    >
      {icon}
    </a>
  )
}