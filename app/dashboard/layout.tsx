import React from "react";
import Header from "./components/header";
import MainBar from "./components/mainbar";

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Header />
      <section className="flex mt-12">
        <MainBar>{children}</MainBar>
      </section>
    </div>
  );
}
