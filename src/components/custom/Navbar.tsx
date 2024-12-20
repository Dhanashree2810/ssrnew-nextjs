'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavbarPage() {
  const pathname = usePathname();
  const menuItems = [
    { href: "/appuser/homes", label: "Dashboard" },
    { href: "/appuser", label: "List" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed left-0 right-0 z-50 bg-white shadow transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}>
      <nav className="p-2">
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center space-x-2">
            <h1 className="text-lg lg:text-xl font-bold text-purple-600 leading-tight">
              Brand<span className="text-blue-400">Name</span>
            </h1>
            <i className="ri-gem-line text-blue-400 text-xl" />
          </div>

          <div className="hidden lg:flex space-x-6 font-semibold">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-gray-800 uppercase font-semibold hover:text-blue-500 ${pathname === item.href ? 'text-blue-500' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button className="hover:text-blue-500">
              <IoSearch size={18} className="text-gray-600" />
            </Button>
            <Button className="hover:text-blue-500">
              <RiShoppingCartLine size={18} className="text-gray-600" />
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-gray-800 lg:hidden hover:text-blue-500">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-6 bg-white">
              <nav className="space-y-4 mt-6">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`block text-gray-800 hover:text-blue-500 font-semibold ${pathname === item.href ? 'text-blue-500' : ''}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
