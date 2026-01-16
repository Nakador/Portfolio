
import { Outfit, Playfair_Display } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Montassar Daimi | Senior Frontend Engineer",
  description: "Senior Frontend Engineer specialized in building and scaling complex web applications within the React ecosystem. Expert in Design Systems, Micro-frontends, and Performance Optimization.",
  keywords: ["Frontend Engineer", "React", "Next.js", "TypeScript", "Montassar Daimi", "Web Development", "Portfolio"],
  authors: [{ name: "Montassar Daimi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://montassar-daimi.vercel.app",
    title: "Montassar Daimi | Senior Frontend Engineer",
    description: "Senior Frontend Engineer specialized in building and scaling complex web applications.",
    siteName: "Montassar Daimi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Montassar Daimi | Senior Frontend Engineer",
    description: "Senior Frontend Engineer specialized in building and scaling complex web applications.",
    creator: "@montassar_daimi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${outfit.variable} ${playfair.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
