import type { Metadata } from "next";
import {inter} from "../fonts/inter"
import "../globals.css";
import NavBar from "../../app/components/NavBar"


export const metadata: Metadata = {
  title: "Query Dashboard",
  description: "Query with Chat",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
          <NavBar/>
      <div className={`${inter.className}`}>{children}</div>

          </>
  );
}
