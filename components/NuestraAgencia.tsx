import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { contact, deal, handshake } from '@/public'
import { Card, CardContent } from './ui/card'


function NuestraAgencia() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col gap-5 items-center">
      <h2>Nuestra agencia</h2>
      <Carousel 
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-2xl"
      >
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardContent>
                <Image
                  alt="Luxury Car"
                  priority={true}
                  className="object-cover w-full h-full"
                  src={contact}
                />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent>
                <Image
                  alt="Luxury Car"
                  priority={true}
                  className="object-cover w-full h-full"
                  src={deal}
                />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent>
                <Image
                  alt="Luxury Car"
                  priority={true}
                  className="object-cover w-full h-full"
                  src={handshake}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </section>
  )
}

export default NuestraAgencia