/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // --- AGREGAR ESTO PARA OCULTAR LA "N" ---
  devIndicators: {
    buildActivity: false, // Oculta el indicador de actividad de compilación
    appIsrStatus: false,  // Oculta el indicador de estado estático/dinámico
  },
}

export default nextConfig