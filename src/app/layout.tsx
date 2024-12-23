import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robiul Hossain | Portofolio",
  description: "Portofolio of Robiul Hossain ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="any" href="/image/www.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
