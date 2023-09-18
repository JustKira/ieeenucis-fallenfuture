import React from "react";

interface PageProps {
  children: React.ReactNode;
}

function GameLayout({ children }: PageProps) {
  return <section className="">{children}</section>;
}

export default GameLayout;
