import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="sticky">
      <div className="container">
        <div className="flex items-center py-6">
          <Link href={"/"}>
            <h1 className="py-2 uppercase leading-none">
              Bartosz <br />
              Paradowski
            </h1>
          </Link>
          <nav className="ml-auto">
            <ul>
              <a href="/#skills">Skills</a>
              <a href="/#projects">Projects</a>

              <a href="/#about-me">About me</a>
              <a href="">Resume</a>
            </ul>
          </nav>
          <button className="ml-auto rounded-md bg-stone-100 px-4 py-2 uppercase">menu</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
