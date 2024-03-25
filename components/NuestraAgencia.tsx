'use client'

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { autos, render1, render2 } from '@/public'
import { Card, CardContent } from './ui/card'
import Autoplay from "embla-carousel-autoplay"


function NuestraAgencia() {
  return (
    <section className="w-full flex flex-col gap-5 items-center px-2 pb-12 md:pb-24 lg:pb-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestra agencia</h2>
      <Carousel 
        className="w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="flex items-center justify-center p-1">
              <Image
                alt="Image"
                className="aspect-video object-cover rounded-md "
                src={autos}

              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex items-center justify-center p-1">
              <Image
                alt="Image"
                className="aspect-video object-cover rounded-md "
                src={render1}
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex items-center justify-center p-1">
              <Image
                alt="Image"
                className="aspect-video object-cover rounded-md "
                src={render2}
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default NuestraAgencia