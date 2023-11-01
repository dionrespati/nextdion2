import { Header, ReactQueryWrapper } from "@components";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fake Apps",
  description: "Web pura-pura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryWrapper>
          <Header />
          <main className="mt-32 lg:mt-14">{children}</main>
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
