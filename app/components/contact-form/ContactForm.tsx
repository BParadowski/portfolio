"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useSendMessage from "./useSendMessage";

import { FormSchemaType } from "./formSchema";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FormSchemaType>({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { sendingStatus, sendMessage } = useSendMessage();

  const onSubmit: SubmitHandler<FormSchemaType> = (formData) => sendMessage(formData);

  return (
    <div className="container">
      <h2 className="text-center text-3xl font-extrabold">Contact</h2>
      <div className="mt-10 grid gap-y-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name:
            <input {...register("name")} name="name" />
          </label>
          <label>
            E-mail:
            <input {...register("email")} name="email" />
          </label>
          <label>
            Yout message:
            <textarea {...register("message")} name="message" />
          </label>
          <button type="submit">Submit this trash</button>
          <button type="button" onClick={() => console.log(errors)}>
            {" "}
            log form state
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
