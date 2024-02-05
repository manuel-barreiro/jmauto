"use client"

import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion'
import Link from 'next/link';


const WhatsappButton = () => {
  return (
    <motion.div
    initial={{opacity: 0 }}
    animate={{opacity: 1 }}
    transition= {{ duration: 1, delay: 1.5 }} 
    className='fixed z-[10000] bottom-7 right-8 md:bottom-7 md:right-7 bg-[#25D366] rounded-full p-3 hover:scale-125 ease-in-out duration-300 cursor-pointer shadow-2xl'>
      <Link href="https://wa.me/+5491133048066" target='_blank'>
        <FaWhatsapp size={40} className='text-white' />
      </Link>
    </motion.div>
  )
}

export default WhatsappButton