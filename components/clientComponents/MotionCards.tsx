'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaCarOn, FaMoneyBills } from 'react-icons/fa6'

const stepAnimationVariants = {
  initial: { y: 15, opacity: 0 },
  animate:{ y: 0, opacity: 1 },      
}


function MotionCards() {
  return (
    <div className="mt-10 flex justify-center items-start flex-wrap gap-10 md:gap-10">
      <motion.div 
            variants={stepAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition= {{ duration: 0.3, delay: 0.5 }}
            className="flex flex-col justify-center items-start gap-4 bg-cardBg p-6 rounded-lg"
          >
            <FaCarOn className="h-12 w-12 text-gray-900" />
            <h3 className="text-2xl font-bold tracking-tighter">Venta Inmediata</h3>
            <p className="mb-6 max-w-[300px] md:max-w-[400px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
              Cotizamos tu automóvil, realizas la entrega y recibís el pago en pesos directamente en tu cuenta. Así de simple.
            </p>
            <Link href='#contacto' className="flex items-center gap-2 hover:underline underline-offset-8">
              <FaArrowRight/>
              Contactate con nosotros
            </Link>
          </motion.div>

          <motion.div 
            variants={stepAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition= {{ duration: 0.3, delay: 0.5 }}
            className="flex flex-col justify-center items-start gap-4 bg-cardBg p-6 rounded-lg"
          >
            <FaMoneyBills className="h-12 w-12 text-gray-900" />
            <h3 className="text-2xl font-bold tracking-tighter">Venta en consignación</h3>
            <p className="mb-6 max-w-[300px] md:max-w-[400px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
            Entregas tu automóvil y nosotros nos encargamos de venderlo. Vas a recibir el dinero luego de la venta.
            </p>
            <Link href='#contacto' className="flex items-center gap-2 hover:underline underline-offset-8">
              <FaArrowRight/>
              Contactate con nosotros
            </Link>
          </motion.div>
    </div>
  )
}

export default MotionCards