import type { Metadata } from "next";
import { LuxurySpotlight } from "@/components/LuxurySpotlight";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashish Kumar — Frontend Developer & UI Architect",
  description:
    "Ashish Kumar is a Frontend Developer with 3+ years of experience designing and building high-performance, responsive, and opulent web applications with React.js, Next.js, and modern luxury design systems.",
  keywords: [
    "Ashish Kumar",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Luxury Portfolio",
    "UI Architect",
    "Web Developer",
    "Himachal Pradesh",
  ],
  authors: [{ name: "Ashish Kumar" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var theme = saved === 'light' ? 'light' : 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background relative selection:bg-gold selection:text-black">
        <LuxurySpotlight />
        {children}
      </body>
    </html>
  );
}
