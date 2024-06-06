export const dynamic = "force-dynamic";
import { formSchema } from "@/app/components/contact-form/formSchema";
import { EmailTemplate } from "@/app/emails/ContactEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.json();

  let parsedData;
  try {
    parsedData = formSchema.parse(formData);
  } catch (e) {
    console.log(e);
    return Response.json("400");
  }
  const { name, email, message } = parsedData;
  console.log("----- This runs");

  const { data, error } = await resend.emails.send({
    from: "Portfolio contact <contact@bparadowski.com>",
    to: ["bartoszparadowski01@gmail.com"],
    subject: "Contact request",
    react: EmailTemplate({ name, email, message }),
    text: `${name} from ${email} wants to contact. \n Message: ${message}`,
  });

  return Response.json(data);
}
