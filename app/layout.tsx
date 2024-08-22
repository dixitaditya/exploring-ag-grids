import type { Metadata } from "next";
import {inter} from "./fonts/inter"
import "./globals.css";


export const metadata: Metadata = {
  title: "A79 - Explore Ag Grid",
  description: "Explore Ag Grid with next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
        {children}
        </div>
        </body>
    </html>
  );
}
