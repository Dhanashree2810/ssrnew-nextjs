import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import NavbarPage from "@/components/custom/Navbar";

interface RootLayoutProps {
  children: ReactNode;
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SSR",
  description: "ssrnew.wazl.in",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col h-[100dvh]",
          poppins.variable
        )}
      >
        {/* <div className="grid min-h-screen w-full "> */}
          <div className="flex flex-col overflow-hidden ">
            <NavbarPage />
            <main className="flex flex-1 flex-col gap-4 lg:gap-6 lg:p-6 bg-gray-50">
              {children}
            </main>
          </div>
        {/* </div> */}
      </body>
    </html >
  )
};