"use client";

import { DATA } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background text-sm font-semibold">
            {DATA.initials}
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight">
              {DATA.name}
            </span>
            <span className="text-xs text-muted-foreground">
              Full Stack Developer
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground md:flex">
          {[
            { name: "About", href: "#about" },
            { name: "Experience", href: "#experience" },
            { name: "Projects", href: "#projects" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 sm:flex">
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              social.navbar && (
                <Link
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border/60 bg-background/70 p-2 text-foreground/70 transition-colors hover:text-foreground"
                >
                  <social.icon className="size-4" />
                  <span className="sr-only">{name}</span>
                </Link>
              )
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}