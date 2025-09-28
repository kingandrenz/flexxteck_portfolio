import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anthony Chibueze Kanu | Full-Stack Developer Portfolio",
  description: "Portfolio website for Full-Stack MERN Developer Anthony Kanu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-900 text-slate-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
