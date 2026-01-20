"use client"

import { useState, useEffect } from "react"

function FloatingPaths({ position }: { position: number }) {
  const [paths, setPaths] = useState<any[]>([])

  useEffect(() => {
    const newPaths = Array.from({ length: 32 }, (_, i) => {
      const randomDashLength = 120 + Math.random() * 180
      const randomGap = 80 + Math.random() * 60
      const randomDuration = 2 + Math.random() * 3
      const randomDelay = Math.random() * 4

      return {
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.6 + i * 0.025,
        dashLength: randomDashLength,
        dashGap: randomGap,
        duration: randomDuration,
        delay: randomDelay,
      }
    })
    setPaths(newPaths)
  }, [position])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* PALETA "PLATINUM FLOW" */}
          <linearGradient id={`grad-${position}`} x1="0%" y1="0%" x2="100%" y2="0%">
            {/* Inicio transparente */}
            <stop offset="0%" style={{ stopColor: 'rgb(255, 255, 255)', stopOpacity: 0 }} />
            
            {/* Plata suave (Slate-400) */}
            <stop offset="30%" style={{ stopColor: 'rgb(148, 163, 184)', stopOpacity: 0.4 }} />
            
            {/* BLANCO BRILLANTE (El núcleo de energía) */}
            <stop offset="50%" style={{ stopColor: 'rgb(255, 255, 255)', stopOpacity: 1 }} />
            
            {/* Plata suave de salida */}
            <stop offset="70%" style={{ stopColor: 'rgb(148, 163, 184)', stopOpacity: 0.4 }} />
            
            {/* Final transparente */}
            <stop offset="100%" style={{ stopColor: 'rgb(255, 255, 255)', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            stroke={`url(#grad-${position})`}
            strokeWidth={path.width}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${path.dashLength} ${path.dashGap}`}
            // Opacidad general ajustada para que el blanco brille pero no mate el texto
            opacity={0.4 + path.id * 0.015}
            style={{
              animation: `flow${position}-${path.id} ${path.duration}s linear infinite`,
              animationDelay: `${path.delay}s`,
            }}
          />
        ))}
      </svg>

      <style>{`
        ${paths.map((path) => `
          @keyframes flow${position}-${path.id} {
            0% { stroke-dashoffset: ${path.dashLength + path.dashGap}; }
            100% { stroke-dashoffset: ${-(path.dashLength + path.dashGap) * 2}; }
          }
        `).join('')}
      `}</style>
    </div>
  )
}

function FlippedFloatingPaths({ position }: { position: number }) {
  const [paths, setPaths] = useState<any[]>([])

  useEffect(() => {
    const newPaths = Array.from({ length: 32 }, (_, i) => {
      const randomDashLength = 120 + Math.random() * 180
      const randomGap = 80 + Math.random() * 60
      const randomDuration = 2 + Math.random() * 3
      const randomDelay = Math.random() * 4

      return {
        id: i,
        d: `M${696 + 380 - i * 5 * position} ${-189 - i * 6}C${696 + 380 - i * 5 * position} ${-189 - i * 6} ${696 + 312 - i * 5 * position} ${216 - i * 6} ${696 - 152 + i * 5 * position} ${343 - i * 6}C${696 - 616 + i * 5 * position} ${470 - i * 6} ${696 - 684 + i * 5 * position} ${875 - i * 6} ${696 - 684 + i * 5 * position} ${875 - i * 6}`,
        width: 0.6 + i * 0.025,
        dashLength: randomDashLength,
        dashGap: randomGap,
        duration: randomDuration,
        delay: randomDelay,
      }
    })
    setPaths(newPaths)
  }, [position])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Mismo gradiente Platino/Blanco para la versión invertida */}
          <linearGradient id={`grad-flip-${position}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'rgb(255, 255, 255)', stopOpacity: 0 }} />
            <stop offset="30%" style={{ stopColor: 'rgb(148, 163, 184)', stopOpacity: 0.4 }} />
            <stop offset="50%" style={{ stopColor: 'rgb(255, 255, 255)', stopOpacity: 1 }} />
            <stop offset="70%" style={{ stopColor: 'rgb(148, 163, 184)', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(255, 255, 255)', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        {paths.map((path) => (
          <path
            key={`flip-${path.id}`}
            d={path.d}
            stroke={`url(#grad-flip-${position})`}
            strokeWidth={path.width}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${path.dashLength} ${path.dashGap}`}
            opacity={0.4 + path.id * 0.015}
            style={{
              animation: `flowFlip${position}-${path.id} ${path.duration}s linear infinite`,
              animationDelay: `${path.delay}s`,
            }}
          />
        ))}
      </svg>

      <style>{`
        ${paths.map((path) => `
          @keyframes flowFlip${position}-${path.id} {
            0% { stroke-dashoffset: ${path.dashLength + path.dashGap}; }
            100% { stroke-dashoffset: ${-(path.dashLength + path.dashGap) * 2}; }
          }
        `).join('')}
      `}</style>
    </div>
  )
}

export function BackgroundPaths() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
      <FlippedFloatingPaths position={1} />
      <FlippedFloatingPaths position={-1} />
    </div>
  )
}