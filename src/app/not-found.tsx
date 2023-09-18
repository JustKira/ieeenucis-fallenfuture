"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function NotFoundPage() {
  return (
    <main className="flex items-center justify-center h-screen [&>h1]:text-3xl">
      <TypeAnimation
        sequence={["Error...", 1000, `Page Not-Found`, 2500, ""]}
        wrapper="h1"
        speed={70}
        repeat={Infinity}
      />
    </main>
  );
}

export default NotFoundPage;
