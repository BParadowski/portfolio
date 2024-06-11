"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import useModal from "./useModal";

export default function ConfirmationModal() {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { isOpen, closeModal } = useModal();

  useEffect(() => {
    const closeOnEscapePress = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    closeButtonRef.current?.focus();

    window.addEventListener("keydown", closeOnEscapePress);
    return () => {
      window.removeEventListener("keydown", closeOnEscapePress);
    };
  }, [closeModal]);

  if (typeof document !== "object") {
    return;
  }

  return createPortal(
    isOpen && (
      <div
        className="fixed z-50 grid h-screen w-full place-content-center bg-neutral-800 bg-opacity-50"
        role="alertdialog"
        aria-modal
      >
        <div className="grid content-center gap-y-2 rounded-lg bg-white p-4 text-center md:gap-y-4 md:p-6 lg:gap-y-6 lg:p-8">
          <p className="text-xl font-bold tracking-wide">Thank you for showing interest!</p>
          <p className="opacity-50">I will get back to you as soon as possible.</p>
          <button
            onClick={closeModal}
            ref={closeButtonRef}
            className="focus-visible::outline-2 focus-visible::outline-violet-300 border border-violet-300 px-4 py-2 text-lg font-bold"
          >
            Close
          </button>
        </div>
      </div>
    ),
    document.body,
  );
}
