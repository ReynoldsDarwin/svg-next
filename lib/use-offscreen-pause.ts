"use client"

import { useEffect, type RefObject } from "react"

/**
 * Marca el elemento con data-offscreen="true" mientras no está visible.
 * globals.css pausa todas las animaciones CSS dentro de él, sin re-renderizar React.
 */
export function useOffscreenPause(ref: RefObject<HTMLElement | null>, rootMargin = "100px") {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        el.dataset.offscreen = entry.isIntersecting ? "false" : "true"
      },
      { rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, rootMargin])
}
