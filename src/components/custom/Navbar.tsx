'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import logoIcon from "@/assets/images/only-logo.png";
import logoText from "@/assets/images/only-text.png";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";



export default function NavbarPage() {
  const pathname = usePathname();
  const menuItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/list", label: "List" },
  ];

  return (
    <nav className="bg-white shadow p-4 fixed top-8 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-bold text-purple-600">
            Brand<span className="text-blue-400">Name</span>
          </h1>
          <i className="ri-gem-line text-blue-400 text-2xl" />
        </div>

        <div className="hidden lg:flex space-x-6 font-semibold">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-gray-800 hover:text-blue-500 ${
                pathname === item.href ? 'text-blue-500' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Button className="text-gray-800 hover:text-blue-500">
            <IoSearch className="text-xl" />
          </Button>
          <Button className="text-gray-800 hover:text-blue-500">
            <RiShoppingCartLine className="text-xl" />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-gray-800 lg:hidden hover:text-blue-500">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4 bg-white">
              <div className="flex items-center gap-2 mb-4">
                <Image src={logoIcon} alt="Logo Icon" className="h-8 w-8" />
                <Image src={logoText} alt="Logo Text" className="h-8" />
              </div>
              <nav className="space-y-4">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`block text-gray-800 hover:text-blue-500 ${
                      pathname === item.href ? 'text-blue-500' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
