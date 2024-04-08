"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from "@/components/ui/textarea"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"


const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "Ingrese un nombre válido",
  }),
  email: z.string().email({
    message: "Ingrese un correo válido",
  }),
  telefono: z.string().min(2, {
    message: "Ingrese un teléfono válido",
  }),
  mensaje: z
    .string()
    .min(10, {
      message: "Mínimo 10 caracteres",
    })
    .max(160, {
      message: "Máximo 160 caracteres",
    }),
    marca: z.string().min(2, {
      message: "Ingrese marca válida",
    }),
    modelo: z.string().min(2, {
      message: "Ingrese modelo válido",
    }),
    ano: z.string().min(4, {
      message: "Ingrese año válido",
    }),
    kilometraje: z.string().min(2, {
      message: "Ingrese kilometraje válido",
    }),
    info: z
    .string()
    .min(10, {
      message: "Mínimo 10 caracteres",
    })
    .max(160, {
      message: "Máximo 160 caracteres",
    }),
})

export default function ContactForm() {

  const { toast } = useToast()

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
      marca: "",
      modelo: "",
      ano: "",
      kilometraje: "",
      info: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
    toast({
      title: "Se ha enviado tu consulta",
      description: "Te responderemos a la brevedad.",
      action: (
        <ToastAction altText="Goto schedule to undo">Ok</ToastAction>
      ),
      className: "bg-black text-white",
    })
    form.reset()
  }

  return (
    <section>
  
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-10 w-full overflow-hidden" >
          {/* Inputs */}
          <div className="flex flex-col md:flex-row justify-evenly gap-10 md:gap-0">

            {/* Client Info */}
            <div className="flex flex-col gap-5 w-full px-10">
              <p className="text-xl md:text-2xl font-extrabold">Información personal</p>
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <Input placeholder="" className="text-[16px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between gap-3">

                <div className="w-3/5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input className="w-full text-[16px]" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-2/5">
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input className="w-full text-[16px]" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>


              </div>

              <FormField
                control={form.control}
                name="mensaje"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder=""
                        className="resize-none text-[16px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Car Info */}
            <div className="flex flex-col gap-5 w-full px-10">
              <p className="text-xl md:text-2xl font-extrabold">Datos del vehículo</p>

              <div className="flex justify-between gap-3">
                <div className="w-3/6">
                  <FormField
                    control={form.control}
                    name="marca"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Marca</FormLabel>
                        <FormControl>
                          <Input className="w-full text-[16px]" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-3/6">
                  <FormField
                    control={form.control}
                    name="modelo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Modelo</FormLabel>
                        <FormControl>
                          <Input className="w-full text-[16px]" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>


              </div>

              <div className="flex justify-between gap-3">
                <div className="w-3/6">
                  <FormField
                    control={form.control}
                    name="ano"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Año</FormLabel>
                        <FormControl>
                          <Input className="w-full text-[16px]" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-3/6">
                  <FormField
                    control={form.control}
                    name="kilometraje"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kilometraje</FormLabel>
                        <FormControl>
                          <Input className="w-full text-[16px]" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>


              </div>

              <FormField
                control={form.control}
                name="info"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Información adicional</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder=""
                        className="resize-none text-[16px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

          </div>
          
          {/* Submit button */}
          <div className="flex justify-center">
            <Button type="submit" className="w-full max-w-xs md:max-w-lg xl:max-w-xl">Enviar</Button>
          </div>
        </form>
      </Form>
    </section>
  )
}
