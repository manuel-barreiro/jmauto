import Link from "next/link"
import Image from "next/image"
import { handshake } from "@/public"

export default function Component() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32">
      <Image
        alt="Luxury Car"
        priority={true}
        className="absolute inset-0 object-cover w-full h-full"
        src={handshake}
      />
      <div className="absolute inset-0 bg-buttonBlue opacity-65 mix-blend-multiply" />
      <div className="relative container px-4 md:px-6 font-semibold">
          <div className="flex flex-col justify-evenly items-start gap-4">
              <div className="inline-block rounded-lg px-3 py-1 text-sm bg-gray-800 text-white">Sobre nosotros</div>
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">¿Quiénes somos?</h2>
              <p className="max-w-[600px] text-white md:text-md/relaxed lg:text-base/relaxed xl:text-md/relaxed">
                En <span className="font-black">J&M</span>, nos apasiona brindarte una experiencia excepcional en la adquisición de automóviles. Desde nuestros inicios, nos hemos dedicado a proporcionar a nuestros clientes no solo vehículos de calidad, sino también un servicio personalizado y confiable.
              
              </p>
              <p className="max-w-[600px] text-white md:text-md/relaxed lg:text-base/relaxed xl:text-md/relaxed">
                Valoramos la <span className="font-black">transparencia</span>, la <span className="font-black">integridad</span> y la <span className="font-black">satisfacción del cliente</span>, aspectos que nos han convertido en un referente en la industria automotriz.
              </p>

              <p className="max-w-[600px] text-white md:text-md/relaxed lg:text-base/relaxed xl:text-md/relaxed">
                ¡VenÍ y conocé a nuestro equipo! Estamos para ayudarte.
              </p>
            </div>
            <ul className="py-4 hidden md:block">
              <li className="text-white">
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-white" />
                Somos una concesionaria familiar, con amplia experiencia en el rubro.
              </li>
              <li className="text-white">
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-white" />
                Nos esforzamos por ofrecer un trato excepcional a cada cliente.
              </li>
              <li className="text-white">
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-white" />
                Tu satisfacción es nuestra prioridad.
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-gray-50 text-gray-900 hover:bg-gray-50/90 focus-visible:ring-gray-300"
                href="#"
              >
                Contactanos
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-gray-950 hover:bg-gray-800 focus-visible:ring-gray-300 text-gray-200"
                href="#"
              >
                Vendé tu auto
              </Link>
          </div>
      </div>
    </section>
  )
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
