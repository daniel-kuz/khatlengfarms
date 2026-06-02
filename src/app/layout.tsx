import type { Metadata } from "next";
import { Playfair_Display, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khatleng Farms | Commercial Agriculture, Bethlehem Free State",
  description:
    "Khatleng Farms is a commercial agricultural enterprise in Bethlehem, Free State — producing grain, livestock and fresh vegetables from our Free State farmland.",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Khatleng Farms",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.khatlengfarms.co.za/#org",
      name: "Khatleng Farms",
      alternateName: "Nkoenyane Family Trust trading as Khatleng Farms",
      url: "https://www.khatlengfarms.co.za",
      email: "info@khatleng.com",
      telephone: "+27691010076",
      description:
        "A commercial agricultural enterprise in Bethlehem, Free State — producing grain, livestock and fresh vegetables from our Free State farmland.",
      foundingDate: "2000",
      legalName: "Nkoenyane Family Trust",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.khatlengfarms.co.za/#farm",
      name: "Khatleng Farms",
      parentOrganization: { "@id": "https://www.khatlengfarms.co.za/#org" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bethlehem",
        addressRegion: "Free State",
        postalCode: "9701",
        addressCountry: "ZA",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
