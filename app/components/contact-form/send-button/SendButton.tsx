import Spinner from "../Spinner";
import EmailSvg from "./EmailIcon";

interface SendButtonProps {
  sendingStatus: "error" | "idle" | "pending" | "success";
}

export default function SendButton({ sendingStatus }: SendButtonProps) {
  if (sendingStatus === "pending") {
    return (
      <button
        type="button"
        className="flex min-h-10 w-fit min-w-36 items-center justify-center rounded-md border border-amber-300 bg-gradient-to-br from-amber-300 to-orange-400 text-white hover:scale-105"
      >
        <Spinner className="scale-125" />
      </button>
    );
  }

  return (
    <button
      type="submit"
      className="flex min-h-10 w-fit min-w-36 items-center justify-center gap-4 rounded-md border border-amber-300 bg-gradient-to-br from-amber-300 to-orange-400 text-xl font-bold text-white hover:scale-105"
    >
      <span>Send</span>
      <EmailSvg />
    </button>
  );
}
