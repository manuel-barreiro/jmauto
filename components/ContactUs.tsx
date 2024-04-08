import Image from "next/image"
import { contact } from "@/public"
import ContactCard from "./clientComponents/ContactCard"

export default function Component() {
  return (
    <section id="contacto" className="relative w-full py-12 md:py-24 lg:py-32 h-[80dvh]">
      <Image
        alt="Luxury Car"
        priority={true}
        className="absolute inset-0 object-cover w-full h-full"
        title="Z&Z Automotores"
        src={contact}
      />

      <ContactCard/>
      
    </section>
  )
}

