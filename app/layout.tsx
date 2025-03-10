

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ['300','400','500','600','700'],
  
});

export const metadata: Metadata = {
  title: "CuraLink",
  description: "A patient management system",
  icons:{
    icon: "/assets/icons/logo-icon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)} suppressHydrationWarning={true}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
