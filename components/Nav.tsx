'use client';

import { useState } from 'react'
import { jmBlack } from "@/public"
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import { MdOutlineClose } from 'react-icons/md'
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa6'

const Nav = () => {

  /* state and handle function to display mobile menu */

  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu((prevState) => !prevState)
    console.log(showMenu)
  }

  /* ------------------------------------------------ */

  return (
    <nav className="font-montserrat flex justify-between items-center w-full h-16 lg:h-[10vh] sticky top-0 z-50 px-8 md:px-32 py-12 bg-white shadow-navbarShadow">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition= {{ duration: 1 }}
      >
        <Link href="/">
          <Image src={jmBlack} width={130} height={130} priority={true} title="JM Logo" alt="JM Logo" />
        </Link>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex">
        <ul className="flex justify-evenly items-center gap-10 font-medium">
          <Link 
            href="#quienesSomos"
            className="
                hover:scale-105 
                hover:underline underline-offset-8 decoration-buttonBlue 
                hover:text-buttonBlue
                ease-in-out duration-300"
          >
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0,  opacity: 1 }}
              transition= {{ duration: 0.1 }}
            >
                  ¿Quiénes somos?
            </motion.li>
          </Link>
          <Link 
            href="#visitanos"
            className="
                hover:scale-105 
                hover:underline underline-offset-8 decoration-buttonBlue 
                hover:text-buttonBlue
                ease-in-out duration-300"
          >
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0,  opacity: 1 }}
              transition= {{ duration: 0.1, delay: 0.1 }}
            >
                  Nuestra agencia
            </motion.li>
          </Link>
          <Link 
            href="#cotiza"
            className="
                hover:scale-105 
                hover:underline underline-offset-8 decoration-buttonBlue 
                hover:text-buttonBlue
                ease-in-out duration-300"
          >
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0,  opacity: 1 }}
              transition= {{ duration: 0.1, delay: 0.2 }}
            >
                  Cotizá tu auto
            </motion.li>
          </Link>
          <Link href="#contacto">
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0,  opacity: 1 }}
              transition= {{ duration: 0.1, delay: 0.3 }}
            >
              <button
                  className='px-4 py-2 rounded-md text-white bg-buttonBlue border border-buttonBlue hover:bg-white
                  hover:text-buttonBlue duration-300 w-full'
              >
                  Contactanos
              </button>
            </motion.li>
          </Link>
        </ul>
      </div>
      
      {/* Mobile Menu */}

      <motion.div
        onClick={handleShowMenu} 
        className='w-6 h-5 flex flex-col justify-between items-center lg:hidden text-4xl text-buttonBlue cursor-pointer overflow-hidden group'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition= {{ duration: 1 }}
        >
          <span className='w-full h-[2px] bg-buttonBlue inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-buttonBlue inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-buttonBlue inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
      </motion.div>
      {showMenu && (
                    <div 
                        className='absolute lg:hidden top-0 right-0 w-full h-screen bg-black/50 flex flex-col col items-end'
                    >
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0,  opacity: 1 }}
                            transition={{ duration: 0.1 }}
                            className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-white flex flex-col items-center px-4 py-10 relative'
                        >
                            <MdOutlineClose onClick={handleShowMenu} className='text-3xl text-buttonBlue cursor-pointer hover:text-black absolute top-4 right-4'/>

                            <div className='flex flex-col justify-center items-center text-base gap-7'>
                                <ul className='flex flex-col text-base gap-7'>
                                    <Link
                                        href="#quienesSomos"
                                        onClick={handleShowMenu}
                                        className='font-medium hover:text-buttonBlue hover:underline underline-offset-8 decoration-buttonBlue cursor-pointer duration-300 nav-link'
                                    >
                                        <motion.li 
                                            initial={{ x: 20, opacity:0 }}
                                            animate={{ x: 0,  opacity: 1 }}
                                            transition= {{
                                                duration: 0.2,
                                                delay: 0.1,
                                                ease: "easeIn", 
                                            }}
                                        >
                                            ¿Quiénes somos?
                                        </motion.li>
                                    </Link>
                                    <Link 
                                        href="#visitanos"
                                        onClick={handleShowMenu} 
                                        className='font-medium hover:text-buttonBlue hover:underline underline-offset-8 decoration-buttonBlue cursor-pointer duration-300 nav-link'
                                    >
                                        <motion.li 
                                            initial={{ x: 20, opacity:0 }}
                                            animate={{ x: 0,  opacity: 1 }}
                                            transition= {{
                                                duration: 0.2,
                                                delay: 0.2,
                                                ease: "easeIn", 
                                            }}
                                        >
                                            Nuestra agencia
                                        </motion.li>
                                    </Link>
                                    <Link
                                        href="#cotiza"
                                        onClick={handleShowMenu} 
                                        className='font-medium hover:text-buttonBlue hover:underline underline-offset-8 decoration-buttonBlue cursor-pointer duration-300 nav-link'
                                    >
                                        <motion.li 
                                            initial={{ x: 20, opacity:0 }}
                                            animate={{ x: 0,  opacity: 1 }}
                                            transition= {{
                                                duration: 0.2,
                                                delay: 0.3,
                                                ease: "easeIn", 
                                            }}
                                        >
                                            Cotizá tu auto
                                        </motion.li>
                                    </Link>
                                    <Link href="#contacto" onClick={handleShowMenu}>
                                      <motion.li
                                       initial={{ x: 20, opacity: 0 }}
                                       animate={{ x: 0,  opacity: 1 }}
                                       transition= {{ duration: 0.1, delay: 0.4 }}
                                      >
                                        <button
                                            className='px-4 py-2 rounded-md text-white bg-buttonBlue border border-buttonBlue hover:bg-white
                                            hover:text-buttonBlue duration-300 w-full'
                                        >
                                            Contactanos
                                        </button>
                                      </motion.li>
                                    </Link>
                                </ul>                               
                                <motion.div 
                                  initial={{ x: 20, opacity: 0 }}
                                  animate={{ x: 0,  opacity: 1 }}
                                  transition= {{ duration: 0.1, delay: 0.6 }}
                                  className="flex gap-6"
                                >
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <span className="w-8 h-8 text-md text-white bg-black rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                            <FaFacebookF />
                                        </span>
                                    </a>
                                    <a href="https://instagram.com/" target="_blank">
                                        <span className="w-8 h-8 text-md text-white bg-black rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                            <FaInstagram />
                                        </span>
                                    </a>
                                    <a href="https://api.whatsapp.com/send/?phone=%2B5491133048066&text&type=phone_number&app_absent=0" target="_blank">
                                        <span className="w-8 h-8 text-md text-white bg-black rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                            <FaWhatsapp />
                                        </span>
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
  


      
    </nav>
  )
}

export default Nav