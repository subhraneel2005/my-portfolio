import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "subhraneel",
  description: "your friendly neighbourhood spoiderman",
  openGraph: {
    title: "subhraneel",
    description: "your friendly neighbourhood spoiderman",
    images: ["/home-opengraph.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "subhraneel",
    description: "your friendly neighbourhood spoiderman",
    images: ["/home-opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased px-4`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar>{children}</Navbar>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
