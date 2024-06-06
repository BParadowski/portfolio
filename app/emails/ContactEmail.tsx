import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => (
  <div>
    <h1>{name} sent a message with portfolio contact form</h1>
    <a>{email}</a>
    <br />
    <p>{message}</p>
  </div>
);
