/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jAcfIIDV1ib
 */
import Image from "next/image"
import { deal } from "@/public"
import HeroText from "./clientComponents/HeroText"

export default function Component() {
  return (
    <section className="relative w-full h-[600px] md:h-[600px] lg:h-[700px]">
      <Image
        alt="Concesionaria de autos"
        title="Zz automotores"
        priority={true}
        className="absolute inset-0 object-cover w-full h-full"
        src={deal}
        style={{
          aspectRatio: "1920/700",
          objectFit: "cover",
        }}
      />
      <div className="relative bg-black bg-opacity-50 h-full flex flex-col justify-center items-center px-4 md:px-6 lg:px-8">
        <HeroText />
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