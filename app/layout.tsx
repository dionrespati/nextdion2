import { Header, ReactQueryWrapper } from "@components";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fake Apps",
  description: "Web pura-pura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { title, description } = metadata;
  return (
    <html lang="en">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <body className={inter.className}>
        <ReactQueryWrapper>
          <Header />
          <div className="mt-32 lg:mt-20">{children}</div>
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
