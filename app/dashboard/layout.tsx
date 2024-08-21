import type { Metadata } from "next";
import {inter} from "../fonts/Inter"
import "../globals.css";


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
      <div className={`${inter.className}`}>{children}</div>
  );
}
