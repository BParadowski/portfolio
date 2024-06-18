import Link from "next/link";
import React from "react";
import Image from "next/image";

import StackIcon from "@/public/navigation/icons8-tech-stack-50.png";
import ProjectIcon from "@/public/navigation/icons8-view-quilt-50.png";
import AboutIcon from "@/public/navigation/icons8-person-60.png";
import ResumeIcon from "@/public/navigation/icons8-cv-48.png";

import ModalProvider from "./contact-form/confirmation-modal/ModalProvider";
import Hamburger from "./mobile-nav/NavButton";
import NavDropdown from "./mobile-nav/NavDropdown";

function Header() {
  return (
    <header className="isolate z-20 bg-stone-100">
      <div className="container">
        <div className="flex items-center py-8">
          <Link href={"/"}>
            <h1 className="py-2 font-bold uppercase leading-none">
              Bartosz <br />
              Paradowski
            </h1>
          </Link>
          <nav className="ml-auto hidden md:block">
            <ul className="flex gap-4 tracking-wide">
              <a className="group flex items-center gap-2 rounded-md px-4 py-4 hover:bg-stone-200" href="/#skills">
                <Image src={StackIcon} alt="" className="h-4 w-4 opacity-40 group-hover:opacity-60" />
                <span className="opacity-70 group-hover:opacity-85">Skills</span>
              </a>
              <a className="group flex items-center gap-2 rounded-md px-4 py-4 hover:bg-stone-200" href="/#projects">
                <Image src={ProjectIcon} alt="" className="h-4 w-4 opacity-40 group-hover:opacity-60" />
                <span className="opacity-70 group-hover:opacity-85">Projects</span>
              </a>
              <a className="group flex items-center gap-2 rounded-md px-4 py-4 hover:bg-stone-200" href="/#about-me">
                <Image src={AboutIcon} alt="" className="h-4 w-4 opacity-40 group-hover:opacity-60" />
                <span className="opacity-70 group-hover:opacity-85">About me</span>
              </a>
              {/* <a className="group flex items-center gap-2 rounded-md px-4 py-4 hover:bg-stone-100" href="">
                <Image src={ResumeIcon} alt="" className="h-4 w-4 opacity-40 group-hover:opacity-60" />
                <span className="opacity-70 group-hover:opacity-85">Resume</span>
              </a> */}
            </ul>
          </nav>
          <ModalProvider>
            <div className="relative ml-auto md:hidden">
              <Hamburger />
              <NavDropdown />
            </div>
          </ModalProvider>
        </div>
      </div>
    </header>
  );
}

export default Header;
