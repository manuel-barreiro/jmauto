'use client'
import { motion } from 'framer-motion'
import { InfoIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function HeroText() {
  return (
    <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0,  opacity: 1 }}
        transition= {{ duration: 0.1, delay: 0.5 }}
      > 
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center mb-3">
        Vendé tu auto.</h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center mb-3">
        Fácil, rápido y seguro.
        </h3>
        
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white text-center">En Z&Z Automotores lo hacemos posible.</p>
        <Link
          className="mt-6 inline-flex items-center justify-center px-6 py-3 border border-buttonBlue text-base font-medium rounded-md  text-white bg-buttonBlue hover:border-white duration-300 md:py-4 md:text-lg md:px-10"
          href="#vendeTuAuto"
        >
          Vendé tu auto
        </Link>
        <Link className="mt-6 flex items-center text-white text-sm md:text-base" href="#quienesSomos">
          <InfoIcon className="h-6 w-6 mr-2" />
          Conocé más sobre nosotros
        </Link>
      </motion.div>
  )
}

export default HeroText