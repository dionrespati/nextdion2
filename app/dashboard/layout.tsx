import React from "react";
import ClientRootLayout from "./components/client-root-layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientRootLayout>{children}</ClientRootLayout>;
}
