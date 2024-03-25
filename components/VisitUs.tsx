import { FaLocationDot } from "react-icons/fa6";


export default function Component() {
  return (
    <section id="visitanos" className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="flex justify-around flex-wrap gap-10">
          <div className="flex flex-col justify-center space-y-4 lg:order-last">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Ubicación</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Visitanos en Pilar</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestra concesionaria se encuentra estratégicamente ubicada, con fácil acceso desde Panamericana, brindándote comodidad y accesibilidad para descubrir tu próximo auto. 
              </p>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nos encontramos abiertos de lunes a domingo, de 9 de la mañana a 6 de la tarde, listos para recibirte y orientarte en la venta de tu automóvil.
              </p>

              <p className="max-w-[600px] text-gray-800 font-bold md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed flex items-center gap-2">
                <FaLocationDot />
                Las Lilas 970, Manuel Alberti, Buenos Aires
              </p>

            </div>
          </div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13162.087701919596!2d-58.7889375!3d-34.4388968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9edecc120bf9%3A0x776c8aee6e2174ef!2sEdificio%20Blue%20Building!5e0!3m2!1ses!2sau!4v1707133957283!5m2!1ses!2sau" width="500" height="300" loading="eager" className="block md:hidden"></iframe>

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13162.087701919596!2d-58.7889375!3d-34.4388968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9edecc120bf9%3A0x776c8aee6e2174ef!2sEdificio%20Blue%20Building!5e0!3m2!1ses!2sau!4v1707133957283!5m2!1ses!2sau" width="650" height="400" loading="eager" className="hidden lg:block"></iframe>

        </div>
      </div>
    </section>
  )
}

