import { useContext } from "react";
import { modalContext } from "./ModalProvider";

export default function useModal() {
  const context = useContext(modalContext);

  if (!context) {
    throw new Error("useModal hook can't be used outside of ModalProvider component.");
  }

  return context;
}
