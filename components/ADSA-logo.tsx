export function ADSA_Logo({ className = "" }: { className?: string }) {
  const perimeter = 92;

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      
      {/* --- ICONO SVG ANIMADO DX --- */}
      <div className="relative h-10 w-10 flex items-center justify-center">
        
        {/* Definición de la animación (Scoped) */}
        <style>{`
          @keyframes travelPath {
            0% { stroke-dashoffset: ${perimeter}; }
            100% { stroke-dashoffset: -${perimeter}; }
          }
        `}</style>

        <svg 
          viewBox="0 0 32 32" 
          className="h-full w-full overflow-visible"
        >
          {/* 1. Montaña BACK (Sombra) */}
          <polygon 
            points="17,3 31,30 3,30" 
            className="fill-primary/30 transform translate-x-0.5 translate-y-0.5 blur-[0.5px]" 
          />

          {/* 2. Montaña FRONT (Base) */}
          <polygon 
            points="16,2 30,30 2,30" 
            fill="none" 
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary drop-shadow-[0_0_3px_rgba(255,255,255,0.1)]"
          />

          {/* 3. El GUION ANIMADO DENTRO DEL TRINGULO XD */}
          <polygon
            points="16,2 30,30 2,30"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              strokeDasharray: `25 ${perimeter}`, 
              animation: "travelPath 3s linear infinite",
              filter: "drop-shadow(0 0 4px rgba(255,255,255,0.8))" 
            }}
          />

          {/* 4. EL ROMBO INTERNO*/}
          <rect
            x="8"
            y="8"    
            width="8" 
            height="8"
            fill="white"
            className="animate-pulse origin-center transform rotate-45 drop-shadow-[0_0_5px_rgba(255,255,255,1)]"
          />

        </svg>
      </div>

      {/* --- TEXTO --- */}
      <div className="flex flex-col leading-none justify-center">
        <span className="text-[1.35rem] font-black text-foreground tracking-tight leading-[0.9]">
          ADSA
        </span>
        <span className="text-[0.6rem] font-bold text-primary/80 uppercase tracking-[0.2em] mt-1">
          Software Agency
        </span>
      </div>
    </div>
  )
}