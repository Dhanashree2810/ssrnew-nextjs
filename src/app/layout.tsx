import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import NavbarPage from "@/components/custom/Navbar";

interface RootLayoutProps {
  children: ReactNode;
  criteria: boolean;
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

export default function RootLayout({ children, criteria }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen overflow-y-auto bg-background font-sans antialiased",
          poppins.variable
        )}
      >
        <div className="flex flex-col min-h-screen overflow-y-auto">
          {criteria &&
            <NavbarPage />
          }
          <main className="flex flex-1 flex-col  bg-gray-50">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
