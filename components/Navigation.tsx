"use client";

import { DATA } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-screen-2xl flex h-14 items-center px-4 md:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">{DATA.name}</span>
          </Link>
          <nav className="flex items-center gap-4 md:gap-6 text-sm">
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              social.navbar && (
                <Link
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  <social.icon className="size-4" />
                  <span className="sr-only">{name}</span>
                </Link>
              )
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}