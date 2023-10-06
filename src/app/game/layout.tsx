import React from "react";

interface PageProps {
  children: React.ReactNode;
}

function GameLayout({ children }: PageProps) {
  return (
    <main className="w-full bg-[url('/assets/landing-img.png')] min-h-screen bg-fixed bg-center bg-cover">
      <div className="h-screen flex flex-col">
        <div className="h-1/4"></div>
        <div className="container w-full h-3/4 bg-[#0E0E0E]">{children}</div>
      </div>
    </main>
  );
}

export default GameLayout;
