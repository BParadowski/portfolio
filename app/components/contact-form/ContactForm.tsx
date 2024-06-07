"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useSendMessage from "./useSendMessage";

import { FormSchemaType } from "./formSchema";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
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

  const onSubmit: SubmitHandler<FormSchemaType> = (formData) => {
    sendMessage(formData);
    reset();
  };

  return (
    <div className="container">
      <div className="rounded-xl px-4 py-2">
        <h2 className="text-center text-3xl font-extrabold">Contact</h2>
        <div className="mt-10 flex justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="grid w-full max-w-md gap-y-4">
            <div className="flex w-full max-w-md flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                {...register("name")}
                name="name"
                className="rounded-md border bg-stone-100 px-4 py-2 tracking-wide focus-within:outline-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                {...register("email")}
                name="email"
                className="rounded-md border bg-stone-100 px-4 py-2 tracking-wide focus-within:outline-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                {...register("message")}
                name="message"
                className="rounded-md border bg-stone-100 px-4 py-2 tracking-wide focus-within:outline-2"
              />
            </div>
            <button type="submit" className="w-fit justify-self-center rounded-full bg-stone-100 px-4 py-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
