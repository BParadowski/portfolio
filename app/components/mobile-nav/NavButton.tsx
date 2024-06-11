"use client";

import React from "react";
import useModal from "../contact-form/confirmation-modal/useModal";
import Image from "next/image";

import HamburgerIcon from "@/public/navigation/icons8-hamburger-menu.svg";
import CloseIcon from "@/public/navigation/icons8-close.svg";

export default function Hamburger() {
  const { isOpen, openModal, closeModal } = useModal();

  if (!isOpen) {
    return (
      <button onClick={openModal}>
        <Image src={HamburgerIcon} alt="" className="h-10 w-10 rounded-md bg-stone-100 px-2 py-2" />
      </button>
    );
  } else {
    return (
      <button onClick={closeModal}>
        <Image src={CloseIcon} alt="" className="h-10 w-10 rounded-md bg-stone-100 px-2 py-2" />
      </button>
    );
  }
}
