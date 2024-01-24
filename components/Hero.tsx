/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jAcfIIDV1ib
 */
import Image from "next/image"
import Link from "next/link"
import { deal } from "@/public"

export default function Component() {
  return (
    <section className="relative w-full h-[600px] md:h-[600px] lg:h-[700px]">
      <Image
        alt="Luxury Car"
        priority={true}
        className="absolute inset-0 object-cover w-full h-full"
        src={deal}
        style={{
          aspectRatio: "1920/700",
          objectFit: "cover",
        }}
      />
      <div className="relative bg-black bg-opacity-50 h-full flex flex-col justify-center items-center px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center mb-3">
        Vendé tu auto.</h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center mb-3">
        Fácil, rápido y seguro.
        </h2>
        
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white text-center">En J&M lo hacemos posible.</p>
        <Link
          className="mt-6 inline-flex items-center justify-center px-6 py-3 border border-buttonBlue text-base font-medium rounded-md  text-white bg-buttonBlue hover:border-white duration-300 md:py-4 md:text-lg md:px-10"
          href="#"
        >
          Vendé tu auto
        </Link>
        <Link className="mt-6 flex items-center text-white text-sm md:text-base" href="#">
          <InfoIcon className="h-6 w-6 mr-2" />
          Conocé más sobre nosotros
        </Link>
      </div>
    </section>
  )
}

function InfoIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}