import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
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
    <html
      lang="en"
      className={`${poppinsFont.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div>{children}</div>

          {/* <ThemeSwitcher /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
