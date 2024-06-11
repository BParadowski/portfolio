import React from "react";

function Footer() {
  return (
    <div className="sticky bg-stone-100">
      <div className="container">
        <div className="flex items-center py-6">
          <p className="px-4 py-2 leading-none opacity-55">
            Bartosz Paradowski 2024&copy;. Icons by{" "}
            <a href="https://icons8.com" className="underline opacity-90">
              icons8
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
