import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const journalFont = Cormorant_Garamond({
  variable: "--font-journal",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const modernFont = Space_Grotesk({
  variable: "--font-modern",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const codeFont = IBM_Plex_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Artificial Scientist Group",
  description: "Machine learning in science group website with team, papers, and open-source projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${journalFont.variable} ${modernFont.variable} ${codeFont.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
