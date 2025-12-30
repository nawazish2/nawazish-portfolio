"use client";

import { useEffect } from "react";
import { initPerformanceMonitoring } from "@/lib/performance";

export function PerformanceScript() {
  useEffect(() => {
    // Initialize performance monitoring
    initPerformanceMonitoring();
  }, []);

  return null;
}

