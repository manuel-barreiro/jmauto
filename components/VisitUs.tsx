import { FaLocationDot } from "react-icons/fa6";


export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="flex justify-around flex-wrap gap-10">
          <div className="flex flex-col justify-center space-y-4 lg:order-last">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Ubicación</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Visitanos en Pilar</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestra concesionaria se encuentra estratégicamente ubicada en el corazón de Pilar, brindándote comodidad y accesibilidad para descubrir tu próximo auto. 
              </p>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nos encontramos abiertos de lunes a domingo, de 9 de la mañana a 6 de la tarde, listos para recibirte y orientarte en la venta de tu automóvil.
              </p>

              <p className="max-w-[600px] text-gray-800 font-bold md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed flex items-center gap-2">
                <FaLocationDot />
                Florida 9680, Pilar, Buenos Aires
              </p>

            </div>
          </div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6581.56086534097!2d-58.82280153262423!3d-34.43233194612307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9e8502af9355%3A0x94f1f0001a0e30dc!2sLa%20Lomada%20de%20Pilar!5e0!3m2!1ses!2sau!4v1706241661697!5m2!1ses!2sau" width="600" height="400" loading="lazy" className="block md:hidden"></iframe>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6581.56086534097!2d-58.82280153262423!3d-34.43233194612307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9e8502af9355%3A0x94f1f0001a0e30dc!2sLa%20Lomada%20de%20Pilar!5e0!3m2!1ses!2sau!4v1706241661697!5m2!1ses!2sau" width="800" height="500" loading="lazy" className="hidden md:block"></iframe>

        </div>
      </div>
    </section>
  )
}

