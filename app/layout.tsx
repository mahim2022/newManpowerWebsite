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
  title: "Summit Hire | Licensed International Recruitment",
  description:
    "Licensed Bangladesh manpower recruitment agency supporting international employers with compliant and structured overseas hiring.",
  openGraph: {
    title: "Summit Hire | Licensed International Recruitment",
    description:
      "Structured international manpower recruitment for employers requiring compliance, documentation control, and reliable deployment.",
    url: BRAND.websiteUrl,
    siteName: BRAND.brandName,
    type: "website",
  },
  alternates: {
    canonical: "/",
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
      <body className={`${inter.variable} ${playfairDisplay.variable} bg-[#FAFAFA] text-neutral-800 antialiased`}>
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
