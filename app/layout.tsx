import type { Metadata } from "next";
import {inter} from "./fonts/Inter"
import "./globals.css";
import NavBar from "../app/components/NavBar"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <div>
        {children}
        </div>
        </body>
    </html>
  );
}
