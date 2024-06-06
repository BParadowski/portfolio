export const dynamic = "force-dynamic";
import { formSchema } from "@/app/components/Contact form/ContactForm";

export async function POST(req: Request) {
  const data = await req.json();

  let parsedData;
  try {
    parsedData = formSchema.parse(data);
  } catch {
    return Response.json("400");
  }
  const { name, email, message } = parsedData;

  return Response.json("204");
}
