"use client";

import React, { PropsWithChildren, createContext, useState } from "react";

export const modalContext = createContext<ModalContext | null>(null);

interface ModalContext {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

function ModalProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return <modalContext.Provider value={{ isOpen: open, openModal, closeModal }}>{children}</modalContext.Provider>;
}

export default ModalProvider;
