"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-black/10 dark:border-white/10 bg-background sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-foreground text-background font-bold">W</span>
              <span className="font-semibold tracking-tight">WondeTech</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link className="hover:underline underline-offset-4" href="/">Home</Link>
            <Link className="hover:underline underline-offset-4" href="/features">Features</Link>
            <Link className="hover:underline underline-offset-4" href="/use-cases">Use Cases</Link>
            <Link className="hover:underline underline-offset-4" href="/about">About Us</Link>
          </div>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded p-2 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden py-2 border-t border-black/10 dark:border-white/10">
            <div className="flex flex-col gap-2 text-sm">
              <Link className="px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10" href="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link className="px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10" href="/features" onClick={() => setIsOpen(false)}>Features</Link>
              <Link className="px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10" href="/use-cases" onClick={() => setIsOpen(false)}>Use Cases</Link>
              <Link className="px-2 py-2 rounded hover:bg-black/5 dark:hover:bg-white/10" href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}




