import type { Metadata } from "next";
import { Inter, Manrope } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "../provider/theme-provider";

// Configure Manrope
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap', // Recommended for performance
});

// Configure Inter
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ML Project Dashboard",
  description: "Next.js + FastAPI Machine Learning Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable} antialiased font-sans`}
      >
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
    <div className="flex flex-col min-h-screen">
    <main className="flex-1 bg-background text-foreground">
      {children}
    </main>
  </div>
</ThemeProvider>
      </body>
    </html>
  );
}