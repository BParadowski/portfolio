import { useMutation } from "@tanstack/react-query";
import { FormSchemaType } from "./formSchema";

export default function useSendMessage() {
  const { status, mutate } = useMutation({
    mutationKey: ["contact-form-mutation"],
    mutationFn: async (formData: FormSchemaType) => {
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => console.log(res.json()));
    },
  });

  return { sendingStatus: status, sendMessage: mutate };
}
