'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { FaPhone, FaWhatsapp } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const animationVariant = {
  initial: { y: 15, opacity: 0 },
  animate:{ y: 0, opacity: 1 },      
}

function ContactCard() {
  return (
    <motion.div
      variants={animationVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition= {{ duration: 0.3, delay: 0.8 }}
      className="absolute inset-0 px-4 md:px-6 flex justify-end items-center"
    >
          <div className="flex flex-col space-y-6 p-12 md:p-20 rounded-md shadow-lg bg-white w-[80dvh]">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contactanos</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl">
              Estamos listos para ayudarte.
            </p>
            <a href="tel:+5491133048066" className="max-w-[600px] text-black font-bold text-xs md:text-lg flex gap-2 items-center hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer">
              <FaPhone />
              +54 9 11 3304 8066
            </a>
            <a href="https://wa.me/+5491133048066" target='_blank' className="max-w-[600px] text-black font-bold text-xs md:text-lg flex gap-2 items-center hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer">
              <FaWhatsapp />
              +54 9 11 3304 8066
            </a>
            <a href="mailto:asesoramiento@zzautomotores.com.ar" className="max-w-[600px] text-black font-bold text-xs md:text-lg flex gap-2 items-center hover:underline underline-offset-4 duration-300 ease-in-out cursor-pointer">
              <MdEmail />
              <span>asesoramiento@zzautomotores.com.ar</span>
            </a>
          </div>
      </motion.div >
  )
}

export default ContactCard