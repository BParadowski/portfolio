"use client";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useSendMessage from "./useSendMessage";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormSchemaType, formSchema } from "./formSchema";
import useModal from "./confirmation-modal/useModal";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { sendingStatus, sendMessage } = useSendMessage();
  const { openModal } = useModal();

  useEffect(() => {
    console.log(sendingStatus);
    if (sendingStatus === "success") {
      openModal();
    }
  }, [sendingStatus]);

  const onSubmit: SubmitHandler<FormSchemaType> = (formData) => {
    sendMessage(formData);
    reset();
  };

  return (
    <div className="container" id="contact">
      <div className="rounded-xl px-4 py-8">
        <h2 className="text-center text-3xl font-extrabold">Contact</h2>
        <p className="mt-8 text-center text-xl opacity-50">
          Looking for a developer? Don&apos;t hesitate to reach out - I&apos;m eager to face new challenges!
        </p>
        <div className="mt-12 flex justify-center">
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
                className="min-h-24 rounded-md border bg-stone-100 px-4 py-2 tracking-wide focus-within:outline-2"
              />
            </div>
            {sendingStatus === "pending" ? (
              <button type="button" className="w-fit justify-self-center rounded-full bg-stone-100 px-4 py-2">
                Sending...
              </button>
            ) : (
              <button type="submit" className="w-fit justify-self-center rounded-full bg-stone-100 px-4 py-2">
                Send
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
