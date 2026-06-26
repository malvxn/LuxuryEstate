"use client";

import { useEffect, useState } from "react";
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
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 100);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-[0.25em] text-white transition-colors hover:text-[#D4AF37] md:text-2xl"
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

          <Link
            href="/contact"
            className="rounded-full border border-white px-6 py-3 text-sm text-white transition-all hover:bg-white hover:text-black"
          >
            Schedule Consultation
          </Link>
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

              <div className="mt-12 flex flex-col px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="border-b border-zinc-800 py-4 text-2xl font-light tracking-wide transition-colors hover:text-[#D4AF37]"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  className="mt-8 block w-full rounded-full bg-[#D4AF37] px-6 py-4 text-center font-medium text-black transition hover:opacity-90"
                >
                  Schedule Consultation
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}