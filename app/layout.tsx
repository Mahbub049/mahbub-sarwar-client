import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mahbub Sarwar · Lecturer, Researcher & Software Engineer",
    template: "%s · Mahbub Sarwar",
  },
  description:
    "Portfolio of Muhammad Mahbub Sarwar Shafi — lecturer, researcher and software engineer working across academic computing, full-stack systems and AI research.",
  keywords: [
    "Mahbub Sarwar",
    "Muhammad Mahbub Sarwar Shafi",
    "Lecturer",
    "Software Engineer",
    "Researcher",
    "Computer Science",
    "BUBT",
    "Next.js",
    "AI Research",
  ],
  authors: [{ name: "Muhammad Mahbub Sarwar Shafi" }],
  creator: "Muhammad Mahbub Sarwar Shafi",
  openGraph: {
    title: "Mahbub Sarwar · Lecturer, Researcher & Software Engineer",
    description:
      "Teaching computing, building useful software, and exploring intelligent systems.",
    type: "website",
    url: siteUrl,
    siteName: "Mahbub Sarwar Portfolio",
    images: [{ url: "/images/profile.jpg", width: 1200, height: 1200, alt: "Mahbub Sarwar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahbub Sarwar · Portfolio",
    description:
      "Lecturer, researcher and software engineer building academic and intelligent systems.",
    images: ["/images/profile.jpg"],
  },
  icons: {
    icon: "/mahbub.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05070a" },
    { media: "(prefers-color-scheme: light)", color: "#f6f8fb" },
  ],
};

const themeScript = `
(function(){
  try {
    var saved = localStorage.getItem('portfolio-theme');
    var dark = saved ? saved === 'dark' : true;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        {children}
        <Toaster
          position="top-right"
          richColors
          closeButton
          toastOptions={{
            className: "portfolio-toast",
          }}
        />
      </body>
    </html>
  );
}
