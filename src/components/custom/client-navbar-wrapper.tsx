'use client'

import dynamic from 'next/dynamic'

const NavbarPage = dynamic(() => import("@/components/custom/Navbar"), {
  ssr: false,
});

export function ClientNavbarWrapper() {
  // { criteria }: { criteria: boolean }
  // if (!criteria) return null;
  return <NavbarPage />;
}

