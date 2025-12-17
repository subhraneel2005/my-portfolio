import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "subhraneel",
  description: "your friendly neighbourhood developer guy",
  openGraph: {
    title: "subhraneel",
    description: "your friendly neighbourhood developer guy",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "subhraneel",
    description: "your friendly neighbourhood developer guy",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
