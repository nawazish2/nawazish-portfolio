import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nawazishkhan.in"),
  title: {
    default: "Nawazish Khan | Full Stack Developer",
    template: "%s | Nawazish Khan",
  },
  description:
    "Portfolio of Nawazish Khan - Full Stack Developer, BTech CSE student at IKGPTU. Passionate about Web Development, DSA, AI, and Open Source.",
  keywords: [
    "Nawazish Khan",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack",
    "BTech CSE",
    "IKGPTU",
    "Portfolio",
  ],
  authors: [{ name: "Nawazish Khan", url: "https://nawazishkhan.in" }],
  creator: "Nawazish Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nawazishkhan.in",
    siteName: "Nawazish Khan Portfolio",
    title: "Nawazish Khan | Full Stack Developer",
    description:
      "Portfolio of Nawazish Khan - Full Stack Developer, BTech CSE student passionate about Web Development, DSA, AI, and Open Source.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nawazish Khan - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nawazish Khan | Full Stack Developer",
    description:
      "Portfolio of Nawazish Khan - Full Stack Developer passionate about Web Development, DSA, AI, and Open Source.",
    creator: "@nawazish_khan44",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col bg-background">
            <Navigation />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

