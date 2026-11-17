import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "ADSA - Agencia de Desarrollo de Software del Altiplano",
  description: "Diseño e implementación de sistemas de software con enfoque en calidad, rendimiento y escalabilidad",
  generator: "Next.js - Darwin Reynolds",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={playfair.variable}>{children}</body>
    </html>
  )
}
