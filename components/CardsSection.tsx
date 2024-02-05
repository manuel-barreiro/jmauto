import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6";
import { FaCarOn } from "react-icons/fa6";
import { FaMoneyBills } from "react-icons/fa6";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-grayBg">
      <div className="px-6 md:px-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Vendemos tu auto en tiempo récord.</h2>
          <p className="max-w-[500px] md:max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          En J&M, simplificamos la venta de tu auto para que sea una experiencia ágil, sin complicaciones y totalmente segura.
          </p>
        </div>
        <div className="mt-10 flex justify-center items-start flex-wrap gap-10 md:gap-10">
          <div className="flex flex-col justify-center items-start gap-4 bg-cardBg p-6 rounded-lg">
            <FaCarOn className="h-12 w-12 text-gray-900" />
            <h3 className="text-2xl font-bold tracking-tighter">Venta Inmediata</h3>
            <p className="mb-6 max-w-[300px] md:max-w-[400px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
              Cotizamos tu automóvil, realizas la entrega y recibís el pago en pesos directamente en tu cuenta. Así de simple.
            </p>
            <Link href={'#'} className="flex items-center gap-2 hover:underline underline-offset-8">
            <FaArrowRight/>Contactate con nosotros
            </Link>
          </div>
          <div className="flex flex-col justify-center items-start gap-4 bg-cardBg p-6 rounded-lg">
            <FaMoneyBills className="h-12 w-12 text-gray-900" />
            <h3 className="text-2xl font-bold tracking-tighter">Venta en consignación</h3>
            <p className="mb-6 max-w-[300px] md:max-w-[400px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
            Entregas tu automóvil y nosotros nos encargamos de venderlo. Vas a recibir el dinero luego de la venta.
            </p>
            <Link href={'#'} className="flex items-center gap-2 hover:underline underline-offset-8">
              <FaArrowRight/>Contactate con nosotros
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
