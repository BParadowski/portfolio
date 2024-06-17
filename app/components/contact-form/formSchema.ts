import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Let me know your name!"),
  email: z.string().email("Invalid e-mail format"),
  message: z.string().min(1, "At least say hello..."),
});

export type FormSchemaType = z.infer<typeof formSchema>;
