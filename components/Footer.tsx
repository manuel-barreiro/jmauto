import Image from "next/image"
import { jmWhite } from "@/public"
import { FaPhone, FaLocationDot, FaFacebook, FaInstagram  } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (

    <footer className="bg-footerBg p-10 flex flex-col justify-center items-center gap-14">

      <div className="flex justify-center">

        <div className="flex flex-wrap gap-x-32 gap-y-10 justify-start">

          <Image src={jmWhite} width={150} alt="JM Logo"/>

          <div>
            <h4 className="text-white text-lg font-semibold">Mapa del sitio</h4>
            <ul className="mt-2 text-white">
              <li className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer">Nuestra agencia</li>
              <li className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer">¿Quiénes somos?</li>
              <li className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer">Cotizá tu auto</li>
              <li className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer">Contactanos</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold">Contacto</h4>
            <ul className="mt-2 text-white">
              <li className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer flex items-center gap-2">
              <FaPhone /> 
              <span>+54 9 11 6672 6967</span>
              </li>
              <li className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer flex items-center gap-2">
              <FaWhatsapp /> 
              <span>+54 9 11 6672 6967</span>
              </li>
              <li className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer flex items-center gap-2">
              <MdEmail /> 
              <span>jm_automoviles@gmail.com</span>
              </li>
              <li className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer flex items-center gap-2">
              <FaLocationDot /> 
              <span>Las Lilas 970, Manuel Alberti</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold">Contacto</h4>
            <ul className="mt-2 text-white">
              <li className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer flex items-center gap-2">
              <FaFacebook /> 
              <span>JM_automoviles</span>
              </li>
              <li className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer flex items-center gap-2">
              <FaInstagram/> 
              <span>JM_automoviles</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      <div className="border-t-[1px] border-grayBg pt-4">
        <p className="text-grayBg">© J&M Automóviles 2024. Todos los derechos reservados</p>
      </div>

    </footer>
  )
}

export default Footer