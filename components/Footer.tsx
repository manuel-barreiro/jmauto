import Image from "next/image"
import { jmWhite } from "@/public"
import { FaPhone, FaLocationDot, FaFacebook, FaInstagram  } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

function Footer() {
  return (

    <footer className="bg-footerBg p-10 flex flex-col justify-center items-center gap-14">

      <div className="flex justify-center">

        <div className="flex flex-wrap gap-x-32 gap-y-10 justify-start">

          <Image src={jmWhite} width={150} alt="JM Logo"/>

          <div>
            <h4 className="text-white text-lg font-semibold">Mapa del sitio</h4>
            <ul className="mt-2 text-white">
              <li className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer">
                <Link href='/#quienesSomos'>
                  ¿Quiénes somos?
                </Link>  
              </li>
              <li className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer">
                <Link href='/#visitanos'>
                  Nuestra agencia
                </Link>  
              </li>
              <li className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer">
                <Link href='/#cotiza'>
                  Cotizá tu auto
                </Link>  
              </li>
              <li className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer">
                <Link href='/#contacto'>
                  Contactanos
                </Link>  
              </li>       
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold">Contacto</h4>
            <ul className="mt-2 text-white">
              <li className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer flex items-center gap-2">
              <FaPhone /> 
              <a href='tel:+5491166726968'>+54 9 11 6672 6967 </a>
              </li>
              <li className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer flex items-center gap-2">
              <FaWhatsapp /> 
              <a href='https://wa.me/+5491133048066' target='_blank'>+54 9 11 6672 6967 </a>
              </li>
              <li className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer flex items-center gap-2">
              <MdEmail /> 
              <a href="mailto:zz_automotores@gmail.com">zz_automotores@gmail.com </a>
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
              <li>
                <a href="https://www.facebook.com/" target="_blank" className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer flex items-center gap-2">
                <FaFacebook /> 
                <span>ZZ_automotores_</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/zz_automotores_?igsh=bm9oOXowbWQ0NTBz" target="_blank" className="hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer flex items-center gap-2">
                  <FaInstagram/> 
                  <span>ZZ_automotores_</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>

      <div className="border-t-[1px] border-grayBg pt-4">
        <p className="text-grayBg">© Z&Z Automotores 2024. Todos los derechos reservados</p>
      </div>

    </footer>
  )
}

export default Footer