interface ErrorMessageProps {
  text: string;
}

export default function ErrorMessage({ text }: ErrorMessageProps) {
  return (
    <p role="alert" className="text-rose-500 opacity-75">
      {text}
    </p>
  );
}
