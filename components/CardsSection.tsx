/**
 * v0 by Vercel.
 * @see https://v0.dev/t/umgMPWRGttJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Compramos tu auto en tiempo récord.</h2>
          <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          En J&M, simplificamos la venta de tu auto para que sea una experiencia ágil, sin complicaciones y totalmente segura.
          </p>
        </div>
        <div className="grid gap-6 mt-10 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center items-start space-y-4">
            <CurrencyIcon className="h-12 w-12 text-gray-900" />
            <h3 className="text-2xl font-bold tracking-tighter">Venta Inmediata</h3>
            <p className="max-w-[300px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
              Cotizamos tu automóvil, realizas la entrega y recibís el pago en pesos directamente en tu cuenta
            </p>
            <Link href={'#'}>
              Contactate con nosotros
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <UsersIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
            <h3 className="text-2xl font-bold tracking-tighter">Venta en consignación</h3>
            <p className="max-w-[300px] text-center text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
            Entregas tu automóvil y nosotros nos encargamos de venderlo. Vas a recibir el dinero luego de que se venda.
            </p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Contactate con nosotros
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function CurrencyIcon(props: any) {
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
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  )
}


function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
