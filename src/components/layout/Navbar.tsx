"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-10">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-[0.25em] text-white md:text-2xl"
        >
          LUXE ESTATES
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-white transition-colors hover:text-[#D4AF37]"
            >
              {link.label}
            </Link>
          ))}

          <button className="rounded-full border border-white px-6 py-3 text-sm text-white transition-all hover:bg-white hover:text-black">
            Schedule Consultation
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className="p-1"
              >
                <Menu className="h-8 w-8 text-white" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full border-none bg-black text-white sm:max-w-sm"
            >
              <SheetHeader>
                <SheetTitle className="font-heading text-left text-xl tracking-[0.2em] text-white">
                  LUXE ESTATES
                </SheetTitle>
              </SheetHeader>

              <div className="mt-12 flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-2xl font-light tracking-wide transition-colors hover:text-[#D4AF37]"
                  >
                    {link.label}
                  </Link>
                ))}

                <button className="mt-6 rounded-full bg-[#D4AF37] px-6 py-4 font-medium text-black">
                  Schedule Consultation
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}