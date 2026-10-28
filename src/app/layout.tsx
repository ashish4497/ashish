import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashish Kumar — Frontend Developer",
  description:
    "Ashish Kumar is a Frontend Developer with 3+ years of experience designing and building user-friendly, responsive, and visually appealing web applications in React.js, Next.js, and modern technologies.",
  keywords: [
    "Ashish Kumar",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Web Developer Portfolio",
    "Himachal Pradesh",
  ],
  authors: [{ name: "Ashish Kumar" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:ital,wght@0,400..600;1,400..600&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
