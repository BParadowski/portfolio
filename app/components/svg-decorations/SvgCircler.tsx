import React from "react";

export default function Circler() {
  return (
    <>
      <svg className="animate-spin-slow absolute w-[110%]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle className="circle-two-dashes stroke-reddish fill-none stroke-2" cx="50" cy="50" r="45"></circle>
      </svg>
      <svg className="animate-spin-slower absolute w-[140%]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle className="circle-one-dash stroke-reddish fill-none stroke-2" cx="50" cy="50" r="45"></circle>
      </svg>
    </>
  );
}
