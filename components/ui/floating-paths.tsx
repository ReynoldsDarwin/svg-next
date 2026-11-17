"use client"

import { useEffect, useState, type CSSProperties } from "react"

const PATH_COUNT = 32
const VIEW_WIDTH = 696

type FlowPath = {
  id: number
  d: string
  width: number
  dashLength: number
  dashGap: number
  duration: number
  delay: number
}

function buildPath(i: number, position: number, flipped: boolean) {
  const o = i * 5 * position
  if (flipped) {
    const w = VIEW_WIDTH
    return `M${w + 380 - o} ${-189 - i * 6}C${w + 380 - o} ${-189 - i * 6} ${w + 312 - o} ${216 - i * 6} ${w - 152 + o} ${343 - i * 6}C${w - 616 + o} ${470 - i * 6} ${w - 684 + o} ${875 - i * 6} ${w - 684 + o} ${875 - i * 6}`
  }
  return `M-${380 - o} -${189 + i * 6}C-${380 - o} -${189 + i * 6} -${312 - o} ${216 - i * 6} ${152 - o} ${343 - i * 6}C${616 - o} ${470 - i * 6} ${684 - o} ${875 - i * 6} ${684 - o} ${875 - i * 6}`
}

function FloatingPaths({ position, flipped = false }: { position: number; flipped?: boolean }) {
  // Los valores aleatorios se generan en el cliente para evitar desajustes de hidratación.
  const [paths, setPaths] = useState<FlowPath[]>([])

  useEffect(() => {
    setPaths(
      Array.from({ length: PATH_COUNT }, (_, i) => ({
        id: i,
        d: buildPath(i, position, flipped),
        width: 0.6 + i * 0.025,
        dashLength: 120 + Math.random() * 180,
        dashGap: 80 + Math.random() * 60,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 4,
      })),
    )
  }, [position, flipped])

  const gradientId = `grad-${flipped ? "flip-" : ""}${position}`

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Paleta "Platinum Flow": transparente → plata → blanco → plata → transparente */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(255, 255, 255)" stopOpacity={0} />
            <stop offset="30%" stopColor="rgb(148, 163, 184)" stopOpacity={0.4} />
            <stop offset="50%" stopColor="rgb(255, 255, 255)" stopOpacity={1} />
            <stop offset="70%" stopColor="rgb(148, 163, 184)" stopOpacity={0.4} />
            <stop offset="100%" stopColor="rgb(255, 255, 255)" stopOpacity={0} />
          </linearGradient>
        </defs>
        {paths.map((path) => {
          const cycle = path.dashLength + path.dashGap
          return (
            <path
              key={path.id}
              d={path.d}
              stroke={`url(#${gradientId})`}
              strokeWidth={path.width}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${path.dashLength} ${path.dashGap}`}
              opacity={0.4 + path.id * 0.015}
              style={
                {
                  "--flow-from": cycle,
                  "--flow-to": -cycle * 2,
                  animation: `path-flow ${path.duration}s linear ${path.delay}s infinite`,
                } as CSSProperties
              }
            />
          )
        })}
      </svg>
    </div>
  )
}

export function BackgroundPaths() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
      <FloatingPaths position={1} flipped />
      <FloatingPaths position={-1} flipped />
    </div>
  )
}
