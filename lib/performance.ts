/**
 * Performance monitoring utilities
 * Tracks Core Web Vitals and custom metrics
 */

export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {};

  constructor() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      this.observeMetrics();
    }
  }

  private observeMetrics() {
    // Observe FCP (First Contentful Paint)
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = Math.round(entry.startTime);
            this.logMetric('FCP', this.metrics.fcp);
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.warn('FCP observer not supported');
    }

    // Observe LCP (Largest Contentful Paint)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        this.metrics.lcp = Math.round(lastEntry.renderTime || lastEntry.loadTime);
        this.logMetric('LCP', this.metrics.lcp);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP observer not supported');
    }

    // Observe FID (First Input Delay)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          this.metrics.fid = Math.round(entry.processingStart - entry.startTime);
          this.logMetric('FID', this.metrics.fid);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID observer not supported');
    }

    // Observe CLS (Cumulative Layout Shift)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.metrics.cls = Math.round(clsValue * 1000) / 1000;
            this.logMetric('CLS', this.metrics.cls);
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS observer not supported');
    }

    // Measure TTFB (Time to First Byte)
    if (performance.timing) {
      const ttfb = performance.timing.responseStart - performance.timing.requestStart;
      this.metrics.ttfb = Math.round(ttfb);
      this.logMetric('TTFB', this.metrics.ttfb);
    }
  }

  private logMetric(name: string, value: number) {
    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${name}: ${value}ms`);
    }

    // Send to analytics in production (implement your analytics here)
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Google Analytics, Plausible, etc.
      // gtag('event', 'web_vitals', { [name.toLowerCase()]: value });
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  // Measure custom performance
  measureCustom(name: string, fn: () => void) {
    if (typeof performance !== 'undefined' && performance.mark) {
      const startMark = `${name}-start`;
      const endMark = `${name}-end`;
      const measureName = `${name}-measure`;

      performance.mark(startMark);
      fn();
      performance.mark(endMark);
      performance.measure(measureName, startMark, endMark);

      const measure = performance.getEntriesByName(measureName)[0];
      const duration = Math.round(measure.duration);
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${name}: ${duration}ms`);
      }

      // Clean up
      performance.clearMarks(startMark);
      performance.clearMarks(endMark);
      performance.clearMeasures(measureName);

      return duration;
    }
    return 0;
  }
}

// Singleton instance
let performanceMonitor: PerformanceMonitor | null = null;

export function initPerformanceMonitoring() {
  if (typeof window !== 'undefined' && !performanceMonitor) {
    performanceMonitor = new PerformanceMonitor();
  }
  return performanceMonitor;
}

export function getPerformanceMetrics(): PerformanceMetrics {
  return performanceMonitor?.getMetrics() || {};
}

export function measurePerformance(name: string, fn: () => void) {
  return performanceMonitor?.measureCustom(name, fn) || 0;
}

