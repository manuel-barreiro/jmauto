import { EmailTemplate } from '../../../components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend('re_123');

export async function POST(request: Request) {

  const consulta = await request.json();

  console.log(consulta)

  const nombre = consulta.nombre;
  const email = consulta.email;
  const telefono = consulta.telefono;
  const mensaje = consulta.mensaje;
  const marca  = consulta.marca;
  const modelo = consulta.modelo;
  const ano = consulta.ano;
  const kilometraje = consulta.kilometraje;
  const info = consulta.info;

  try {
    const { data, error } = await resend.emails.send({
      from: 'JM Automotores <consultas@jmauto.com.ar>',
      to: [`${'ing.mbarreiro@gmail.com'}`],
      subject: `Consulta ${nombre}`,
      react: EmailTemplate({
        nombre,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error, consulta });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}