import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { ParticleTextEffect } from "./particle-text-effect"
import { InfiniteSlider } from "./ui/infinite-slider"
import { ProgressiveBlur } from "./ui/progressive-blur"

const HERO_WORDS = ["ADSA", "ADSA", "Agencia de", "Desarrollo", "de Software", "del Altiplano"]

const TECH_LOGOS: { name: string; src: string; className: string }[] = [
  { name: "GitHub", src: "https://www.svgrepo.com/show/475654/github-color.svg", className: "h-9" },
  { name: "python", src: "https://cdn.worldvectorlogo.com/logos/python-5.svg", className: "h-10" },
  { name: "JavaScript", src: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg", className: "h-9" },
  { name: "TypeScript", src: "https://cdn.worldvectorlogo.com/logos/typescript-2.svg", className: "h-9" },
  { name: "java", src: "https://cdn.worldvectorlogo.com/logos/java-14.svg", className: "h-10" },
  { name: "PHP", src: "https://www.svgrepo.com/show/373966/php.svg", className: "h-12" },
  { name: "HTML5", src: "https://cdn.worldvectorlogo.com/logos/html-1.svg", className: "h-10" },
  { name: "CSS3", src: "https://cdn.worldvectorlogo.com/logos/css-3.svg", className: "h-10" },
  { name: "Tailwind CSS", src: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg", className: "h-8" },
  { name: "React", src: "https://www.svgrepo.com/show/354259/react.svg", className: "h-10" },
  { name: "Next.js", src: "https://www.svgrepo.com/show/521299/next-16.svg", className: "h-8 invert" },
  { name: "Django", src: "https://cdn.worldvectorlogo.com/logos/django.svg", className: "h-9" },
  { name: "Laravel", src: "https://cdn.worldvectorlogo.com/logos/laravel-3.svg", className: "h-10" },
  { name: "Spring Boot", src: "https://cdn.worldvectorlogo.com/logos/spring-3.svg", className: "h-9" },
  { name: "Node.js", src: "https://cdn.worldvectorlogo.com/logos/nodejs.svg", className: "h-8" },
  { name: "MySQL", src: "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg", className: "h-10" },
  { name: "PostgreSQL", src: "https://www.svgrepo.com/show/303301/postgresql-logo.svg", className: "h-10" },
  { name: "Git", src: "https://www.svgrepo.com/show/452210/git.svg", className: "h-11" },
]

export function HeroSection() {
  return (
    <section className="py-10 md:py-20 px-4 bg-black relative overflow-hidden min-h-screen flex flex-col justify-between">
      <div className="flex-1 flex items-start justify-center pt-0 md:pt-20">
        <ParticleTextEffect words={HERO_WORDS} />
      </div>
      <div className="container mx-auto text-center relative z-10 pb-24 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-white/70 mb-6 text-balance">
            Donde la visión se convierte en software excepcional
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-12">
            <Button size="lg" className="bg-white hover:bg-gray-200 text-black group">
              Iniciar Proyecto
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
              Conócenos Más
            </Button>
          </div>

          <div className="mt-8 md:mt-16 mb-8">
            <div className="group relative m-auto max-w-6xl">
              <div className="flex flex-col items-center md:flex-row">
                <div className="md:max-w-44 md:border-r md:border-gray-600 md:pr-6 mb-4 md:mb-0">
                  <p className="text-end text-base font-semibold text-white/90">Trabajamos con software sólido y escalable</p>
                </div>
                <div className="relative py-6 md:w-[calc(100%-11rem)]">
                  <InfiniteSlider durationOnHover={20} duration={40} gap={112}>
                    {TECH_LOGOS.map((logo) => (
                      <div key={logo.name} className="flex">
                        <img
                          className={`mx-auto w-fit opacity-80 hover:opacity-100 transition-opacity ${logo.className}`}
                          src={logo.src}
                          alt={`${logo.name} Logo`}
                          decoding="async"
                        />
                      </div>
                    ))}
                  </InfiniteSlider>

                  <ProgressiveBlur
                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                    direction="left"
                    blurIntensity={1}
                  />
                  <ProgressiveBlur
                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                    direction="right"
                    blurIntensity={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
