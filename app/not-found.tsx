import { BiSupport } from "react-icons/bi"
import { FaGears } from "react-icons/fa6"
import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  
  return (
    <section>

<div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                            ¡Oops! Parece que te has desviado del camino.
                            </h1>
                            <p className="my-2 text-gray-800">Volvé y seguí explorando nuestro sitio web para encontrar lo que buscas.</p>
                            <button
                              className='px-4 py-2 rounded-md text-white bg-buttonBlue border border-buttonBlue hover:bg-white hover:text-buttonBlue duration-300 w-32'
                            >
                              Ir al inicio
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <Image src="/404.png" alt="404" width={400} height={400} />
            </div>
        </div>
    </section>
  )
}