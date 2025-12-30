"use client";

import { useEffect, useRef, ReactNode } from "react";

interface MagneticHoverProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export function MagneticHover({ children, strength = 0.3, className = "" }: MagneticHoverProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = "translate(0, 0)";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`magnetic-hover ${className}`} style={{ transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)" }}>
      {children}
    </div>
  );
}

