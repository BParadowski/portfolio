import React from "react";

function Header() {
  return (
    <div className="container">
      <div className="flex items-center py-6">
        <p className="border px-4 py-2 uppercase leading-none">
          Bartosz <br />
          Paradowski
        </p>
        <button className="ml-auto rounded-md bg-stone-100 px-4 py-2 uppercase">menu</button>
      </div>
    </div>
  );
}

export default Header;
