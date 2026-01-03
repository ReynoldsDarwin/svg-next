import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Darwin Reynolds - ADSA",
  description: "Diseño e implementación de sistemas de software con enfoque en calidad, rendimiento y escalabilidad",
  generator: "Next.js - Darwin Reynolds",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
