import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BRAND } from "@/lib/constants";
import { buildLocalBusinessSchema, buildOrganizationSchema } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.websiteUrl),
  title: "Bangladesh Labour Supply | Global Recruitment Network",
  description:
    "A coordinated network of licensed Bangladesh recruitment agencies for international employers seeking workforce sourcing and deployment support across Europe, Canada, Australia, the Middle East, Southeast Asia, and other markets.",
  openGraph: {
    title: "Bangladesh Labour Supply | Global Recruitment Network",
    description:
      "Connect with licensed Bangladesh recruiting agencies through one coordinated partner network for international workforce needs.",
    url: BRAND.websiteUrl,
    siteName: BRAND.brandName,
    type: "website",
  },
  alternates: {
    canonical: BRAND.websiteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = buildOrganizationSchema();
  const localBusinessSchema = buildLocalBusinessSchema();

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} bg-[#F8F6F0] text-neutral-800 antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <Navbar />
        <main id="main-content" className="min-h-screen pt-16 sm:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
