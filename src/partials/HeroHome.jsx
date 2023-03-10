import InstallerImage from "../images/installer-eletric.png"

function HeroHome() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1
                className="h1 lg:text-4xl mb-4 font-red-hat-display font-extrabold"
                data-aos="fade-down"
              >
                Buscando serviços profissionais?
              </h1>
              <p
                className="text-xl text-gray-600 dark:text-gray-400"
                data-aos="fade-down"
                data-aos-delay="150"
              >
                Está buscando uma forma de deixar a sua família mais segura?
                Todas as noites tem a sensação de ter escutado alguém mexer no
                seu portão? Temos a solução perfeita, que soma automação e
                segurança com preços que se encaixam no seu orçamento.
              </p>
            </div>

            {/* Mobile mockup */}
            <div
              className="md:col-span-5 lg:col-span-5 text-center md:text-right"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <div className="inline-flex relative justify-center items-center">
                <img
                  className="relative max-w-full mx-auto md:mr-0 md:max-w-none h-auto pointer-events-none"
                  src={InstallerImage}
                  width="344"
                  height="674"
                  alt="iPhone mockup"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHome
