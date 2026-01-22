"use client";

import { ReactNode } from "react";

export function BlueprintBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 studio-grid" />
      <div className="pointer-events-none absolute inset-0 studio-beams" />
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full studio-spotlight" />
      <div className="pointer-events-none absolute -bottom-56 right-[-10%] h-[36rem] w-[36rem] rounded-full studio-spotlight-alt" />
      <div className="pointer-events-none absolute inset-0 studio-noise" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
