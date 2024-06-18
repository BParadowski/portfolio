import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => (
  <div>
    <p>{name} sent a message with portfolio contact form</p>
    <p>{email}</p>
    <br />
    <p>{message}</p>
  </div>
);
