import { jmBlack } from "@/public"
import ContactForm from "./ContactForm"
import Image from "next/image"

function CotizaTuVehiculo() {
  return (
    <section id="cotiza" className="flex flex-col bg-grayBg w-full py-12 md:py-24 lg:py-32">
      <div className="flex flex-col justify-evenly items-center gap-5">
        <Image src={jmBlack} alt="logo" width={200} />

        <p className="text-3xl font-bold tracking-tighter sm:text-5xl">Cotizá tu vehículo</p>

        <p className="max-w-[80%] md:max-w-[50%] text-center text-gray-500 text-base/relaxed xl:text-lg/relaxed mb-10">
          Completá y enviá el formulario debajo con tu información personal y de tu automóvil, para que un representante se ponga en contacto a la brevedad.
        </p>

        <ContactForm />
      </div>

    </section>
  )
}

export default CotizaTuVehiculo