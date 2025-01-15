import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
// import { ThemeSwitcher } from "@/components/theme-switcher";
import Navbar from "@/components/navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "Bridging Creativity and Technology: Web Developer, UI/UX Designer, and Brand Identity Specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}

          {/* <ThemeSwitcher /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
