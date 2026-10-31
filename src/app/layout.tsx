import type { Metadata } from "next";
import { LuxurySpotlight } from "@/components/LuxurySpotlight";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashish Kumar ✦ Portfolio",
  description:
    "Ashish Kumar — Frontend Developer & UI Architect crafting high-performance, responsive, and visually opulent digital products with 3+ years of experience across React.js, Next.js, and modern luxury design systems.",
  applicationName: "Ashish Kumar Portfolio",
  keywords: [
    "Ashish Kumar",
    "Frontend Developer",
    "UI Architect",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Redux Toolkit",
    "Luxury Portfolio",
    "Web Developer",
    "Himachal Pradesh",
  ],
  authors: [{ name: "Ashish Kumar" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-dark.svg", media: "(prefers-color-scheme: dark)", type: "image/svg+xml" },
      { url: "/icon-light.svg", media: "(prefers-color-scheme: light)", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Ashish Kumar ✦ Portfolio",
    description: "Frontend Developer & UI Architect crafting high-performance, responsive, and opulent web applications.",
    type: "website",
    siteName: "Ashish Kumar Portfolio",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <head>
        <link id="dynamic-favicon" rel="icon" href="/icon.svg" type="image/svg+xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var theme = saved === 'light' ? 'light' : 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                  var fav = document.getElementById('dynamic-favicon');
                  if (fav) {
                    fav.setAttribute('href', theme === 'light' ? '/icon-light.svg' : '/icon-dark.svg');
                  }
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
