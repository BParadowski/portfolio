import { useMutation } from "@tanstack/react-query";

export default function useSendMessage() {
  const { status, mutate } = useMutation({
    mutationKey: ["contact-form-mutation"],
    mutationFn: async (formData) => {
      await fetch("/api/send", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },
  });

  return { status, mutate };
}
