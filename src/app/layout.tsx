import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsApp from "@/components/WhatsApp";
import { Context } from "./Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Holiday International",
  description:
    "Holiday International is a travel agency that provides the best travel experience. We provide the best travel packages for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WhatsApp />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Context isAdmin={false}>
            <Header />
            {children}
          </Context>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
