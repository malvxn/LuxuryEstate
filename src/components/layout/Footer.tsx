import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="font-heading text-2xl text-white">
              LUXESTATE
            </h3>

            <p className="mt-4 text-zinc-400">
              Connecting discerning buyers with
              extraordinary properties worldwide.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-white">
              Company
            </h4>

            <div className="space-y-3 text-zinc-400">
              <Link href="/about" className="block">
                About
              </Link>

              <Link href="/properties" className="block">
                Properties
              </Link>

              <Link href="/contact" className="block">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-white">
              Contact
            </h4>

            <div className="space-y-3 text-zinc-400">
              <p>+1 (555) 123-4567</p>
              <p>hello@luxestate.com</p>
              <p>New York, NY</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-white">
              Follow
            </h4>

            <div className="space-y-3 text-zinc-400">
              <p>Instagram</p>
              <p>LinkedIn</p>
              <p>Facebook</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          © 2026 LuxEstate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}