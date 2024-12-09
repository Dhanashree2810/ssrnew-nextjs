'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  const [isMenuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="bg-white shadow fixed left-0 right-0 z-50">
      <div className="bg-[#326fd1] text-white h-10 flex justify-center items-center">
        <h1 className="m-0 p-0 text-center text-sm font-semibold">
          1st Time Buyer? Use "FIRST" Promo Code To Instantly Get 10% OFF!
        </h1>
      </div>

      <nav className='top-8 p-4'>
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl lg:text-3xl font-bold text-purple-600">
              Brand<span className="text-blue-400">Name</span>
            </h1>
            <i className="ri-gem-line text-blue-400 text-2xl" />
          </div>

          <div className="hidden lg:flex space-x-6 font-semibold">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-gray-800 uppercase font-semibold hover:text-blue-500 ${pathname === item.href ? 'text-blue-500' : ''
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button className="hover:text-blue-500">
              <IoSearch size={20} className="text-gray-600" />
            </Button>
            <Button className="hover:text-blue-500">
              <RiShoppingCartLine size={20} className="text-gray-600" />
            </Button>
          </div>

          {/* 
            <Button
              variant="ghost"
              className="text-gray-800 lg:hidden hover:text-blue-500"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div> */}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-gray-800 lg:hidden hover:text-blue-500">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4 bg-white">
              <nav className="space-y-4">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`block text-gray-800 hover:text-blue-500 ${pathname === item.href ? 'text-blue-500' : ''
                      }`}
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
