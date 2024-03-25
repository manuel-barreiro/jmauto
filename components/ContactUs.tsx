import Image from "next/image"
import { contact } from "@/public"
import { FaPhone  } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Component() {
  return (
    <section id="contacto" className="relative w-full py-12 md:py-24 lg:py-32 h-[80dvh]">
      <Image
        alt="Luxury Car"
        priority={true}
        className="absolute inset-0 object-cover w-full h-full"
        src={contact}
      />
      <div className="absolute inset-0 px-4 md:px-6 flex justify-end items-center">

          <div className="flex flex-col space-y-6 p-12 md:p-20 rounded-md shadow-lg bg-white w-[80dvh]">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contactanos</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl">
              Estamos listos para ayudarte.
            </p>
            <p className="max-w-[600px] text-black font-bold md:text-xl flex gap-2 items-center">
              <FaPhone />
              +54 9 11 6672 6968
            </p>
            <p className="max-w-[600px] text-black font-bold md:text-xl flex gap-2 items-center">
              <FaWhatsapp />
              +54 9 11 6672 6968
            </p>
            <p className="max-w-[600px] text-black font-bold md:text-xl flex gap-2 items-center">
              <MdEmail />
              ZZ_automotores@gmail.com
            </p>
          </div>

      </div>
    </section>
  )
}

