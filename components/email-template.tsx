import * as React from 'react';

interface EmailTemplateProps {
  nombre: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nombre,
}) => (
  <div>
    <h1>Welcome, {nombre}!</h1>
  </div>
);
