import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { ParticleTextEffect } from "./particle-text-effect"
import { InfiniteSlider } from "./ui/infinite-slider"
import { ProgressiveBlur } from "./ui/progressive-blur"

export function HeroSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen flex flex-col justify-between">
      <div className="flex-1 flex items-start justify-center pt-20">
        <ParticleTextEffect words={["ADSA", "ADSA", "Agencia de", "Desarrollo de Software", "del Altiplano"]} />
      </div>

      <div className="container mx-auto text-center relative z-10 pb-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white/70 mb-6 text-balance">
            Donde la visión se convierte en software excepcional
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white hover:bg-gray-200 text-black group">
              Iniciar Proyecto
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
              Stack Tecnológico
            </Button>
          </div>

          <div className="mt-16 mb-8">
            <div className="group relative m-auto max-w-6xl">
              <div className="flex flex-col items-center md:flex-row">
                <div className="md:max-w-44 md:border-r md:border-gray-600 md:pr-6 mb-4 md:mb-0">
                  <p className="text-end text-base font-semibold text-white/90">Trabajamos con software sólido y escalable</p>
                </div>
                <div className="relative py-6 md:w-[calc(100%-11rem)]">
                  <InfiniteSlider durationOnHover={20} duration={40} gap={112}>

                    <div className="flex">
                      <img
                        className="mx-auto h-9 w-fit opacity-80 hover:opacity-100 transition-opacity"
                        src="https://www.svgrepo.com/show/475654/github-color.svg"
                        alt="GitHub Logo"
                        height="36"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-10 w-fit opacity-80 hover:opacity-100 transition-opacity"
                        src="https://cdn.worldvectorlogo.com/logos/python-5.svg"
                        alt="python Logo"
                        height="40"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-9 w-fit opacity-80 hover:opacity-100 transition-opacity"
                        src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                        alt="JavaScript Logo"
                        height="40"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-9 w-fit opacity-80 hover:opacity-100 transition-opacity"
                        src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
                        alt="TypeScript Logo"
                        height="36"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-10 w-fit opacity-80 hover:opacity-100 transition-opacity"
                        src="https://cdn.worldvectorlogo.com/logos/java-14.svg"
                        alt="java Logo"
                        height="40"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-12 w-fit opacity-80 hover:opacity-100 transition-opacity"
                        src="https://www.svgrepo.com/show/373966/php.svg"
                        alt="PHP Logo"
                        height="48"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-10 w-fit opacity-80 hover:opacity-100 transition-opacity"
                        src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                        alt="HTML5 Logo"
                        height="40"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-10 w-fit opacity-80 hover:opacity-100 transition-opacity"
                        src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                        alt="CSS3 Logo"
                        height="40"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-8 w-fit opacity-80 hover:opacity-100 transition-opacity"
                        src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
                        alt="Tailwind CSS Logo"
                        height="32"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-10 w-fit opacity-80 hover:opacity-100 transition-opacity"
                        src="https://www.svgrepo.com/show/354259/react.svg"
                        alt="React Logo"
                        height="40"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-8 w-fit invert opacity-80 hover:opacity-100 transition-opacity"
                        src="https://www.svgrepo.com/show/521299/next-16.svg"
                        alt="Next.js Logo"
                        height="32"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-9 w-fit opacity-80 hover:opacity-100 transition-opacity"
                        src="https://cdn.worldvectorlogo.com/logos/django.svg"
                        alt="Django Logo"
                        height="36"
                        width="auto"
                      />
                    </div>
                    
                    <div className="flex">
                      <img
                        className="mx-auto h-10 w-fit opacity-80 hover:opacity-100 transition-opacity"
                        src="https://cdn.worldvectorlogo.com/logos/laravel-3.svg"
                        alt="Laravel Logo"
                        height="40"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-9 w-fit opacity-80 hover:opacity-100 transition-opacity"
                        src="https://cdn.worldvectorlogo.com/logos/spring-3.svg"
                        alt="Spring Boot Logo"
                        height="36"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-8 w-fit opacity-80 hover:opacity-100 transition-opacity"
                        src="https://cdn.worldvectorlogo.com/logos/nodejs.svg"
                        alt="Node.js Logo"
                        height="32"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-10 w-fit opacity-80 hover:opacity-100 transition-opacity"
                        src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg"
                        alt="MySQL Logo"
                        height="40"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-10 w-fit opacity-80 hover:opacity-100 transition-opacity"
                        src="https://www.svgrepo.com/show/354200/postgresql.svg"
                        alt="PostgreSQL Logo"
                        height="40"
                        width="auto"
                      />
                    </div>
                    
                    
                    <div className="flex">
                      <img
                        className="mx-auto h-11 w-fit opacity-80 hover:opacity-100 transition-opacity"
                        src="https://www.svgrepo.com/show/452210/git.svg"
                        alt="Git Logo"
                        height="44"
                        width="auto"
                      />
                    </div>


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
