"use client";
import React from "react";
import useModal from "../contact-form/confirmation-modal/useModal";
import Image from "next/image";

import StackIcon from "@/public/navigation/icons8-tech-stack-50.png";
import ProjectIcon from "@/public/navigation/icons8-view-quilt-50.png";
import AboutIcon from "@/public/navigation/icons8-person-60.png";
import ResumeIcon from "@/public/navigation/icons8-cv-48.png";

export default function NavDropdown() {
  const { isOpen, openModal, closeModal } = useModal();

  if (isOpen) {
    return (
      <nav className="absolute right-0 top-full z-50 rounded-md bg-stone-100 shadow-2xl">
        <ul className="flex w-max flex-col gap-2 px-6 py-4 tracking-wide">
          <a
            className="group flex items-center gap-2 rounded-md px-4 py-4 hover:bg-white"
            href="/#skills"
            onClick={closeModal}
          >
            <Image src={StackIcon} alt="" className="h-4 w-4 opacity-40 group-hover:opacity-60" />
            <span className="opacity-70 group-hover:opacity-85">Skills</span>
          </a>
          <a
            className="group flex items-center gap-2 rounded-md px-4 py-4 hover:bg-white"
            href="/#projects"
            onClick={closeModal}
          >
            <Image src={ProjectIcon} alt="" className="h-4 w-4 opacity-40 group-hover:opacity-60" />
            <span className="opacity-70 group-hover:opacity-85">Projects</span>
          </a>
          <a
            className="group flex items-center gap-2 rounded-md px-4 py-4 hover:bg-white"
            href="/#about-me"
            onClick={closeModal}
          >
            <Image src={AboutIcon} alt="" className="h-4 w-4 opacity-40 group-hover:opacity-60" />
            <span className="opacity-70 group-hover:opacity-85">About me</span>
          </a>
          {/* <a className="group flex items-center gap-2 rounded-md px-4 py-4 hover:bg-white" href="" onClick={closeModal}>
            <Image src={ResumeIcon} alt="" className="h-4 w-4 opacity-40 group-hover:opacity-60" />
            <span className="opacity-70 group-hover:opacity-85">Resume</span>
          </a> */}
        </ul>
      </nav>
    );
  }
}
