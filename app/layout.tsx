import type { Metadata } from "next";
import { Noto_Sans_JP, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/sonner";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Next.js", "React", "TailwindCSS"],
  authors: [
    {
      name: "shincode",
      url: siteConfig.url,
    },
  ],
  openGraph: {
    type: "website",
    locale: "ja",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@shincode",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          "bg-background antialiased min-h-screen",
          notoSansJP.className
        )}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
