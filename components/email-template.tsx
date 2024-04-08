import * as React from 'react';

interface EmailTemplateProps {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  marca: string;
  modelo: string;
  ano: string;
  kilometraje: string;
  info: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nombre,
  email,
  telefono,
  mensaje,
  marca,
  modelo,
  ano,
  kilometraje,
  info,
}) => (
  <div>
    <p>Nombre: {nombre}</p>
    <p>Correo: {email}</p>
    <p>Teléfono: {telefono}</p>
    <p>Mensaje: {mensaje}</p>
    <p>Marca: {marca}</p>
    <p>Modelo: {modelo}</p>
    <p>Año: {ano}</p>
    <p>Kilometraje: {kilometraje}</p>
    <p>Información: {info}</p>
  </div>
);
