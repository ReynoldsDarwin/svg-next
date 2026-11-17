"use client"

import { useState, useEffect } from "react"
import { ADSA_Logo } from "./ADSA-logo"
import { Button } from "./ui/button"

const NAV_ITEMS = ["Servicios", "Portafolio", "Nosotros", "Blog"]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Un solo listener durante toda la vida del componente; la última posición vive fuera del estado de React.
    let lastScrollY = window.scrollY
    let ticking = false

    const update = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)
      setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 100))
      lastScrollY = currentScrollY
      ticking = false
    }

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
    >
      <div
        className={`
          flex items-center justify-center gap-6 px-6 py-3 rounded-2xl border transition-all duration-300
          ${
            isScrolled
              ? "bg-background/90 backdrop-blur-xl border-border/40 shadow-2xl"
              : "bg-background/95 backdrop-blur-lg border-border/30 shadow-lg"
          }
        `}
      >
        {/* LOGO */}
        <div className="transform transition-transform duration-200 hover:scale-105 cursor-pointer">
          <a href="#">
            <ADSA_Logo />
          </a>
        </div>

        {/* MENÚ DE NAVEGACIÓN */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group px-3 py-1 text-foreground/80 hover:text-gray-100 transition-colors duration-300 font-medium hover:[-webkit-text-stroke:0.2px_black] hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
            >
              <span className="relative">
                {item}
                {/* LÍNEA EXPANSIVA */}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full transform -translate-x-1/2 shadow-[0_0_8px_currentColor]"></span>
              </span>
            </a>
          ))}
        </nav>

        {/* BOTONES DE ACCIÓN */}
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground transform transition-all duration-200 hover:scale-105 hover:shadow-lg rounded-xl font-semibold"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </header>
  )
}
