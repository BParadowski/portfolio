import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email("Invalid e-mail format"),
  message: z.string().min(1, "Message can't be empty"),
});

export type FormSchemaType = z.infer<typeof formSchema>;
