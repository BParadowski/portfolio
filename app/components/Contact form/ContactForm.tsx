"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email("Invalid e-mail format"),
  message: z.string().min(1, "Message can't be empty"),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<z.infer<typeof formSchema>>({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = () => handleSubmit((formData) => {});

  return (
    <div className="container">
      <h2 className="text-center text-3xl font-extrabold">Contact</h2>
      <div className="mt-10 grid gap-y-4">
        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input {...register("name")} name="name" />
          </label>
          <label>
            E-mail:
            <input {...register("email")} name="email" />
          </label>
          <label>
            Name:
            <textarea {...register("message")} name="message" />
          </label>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
