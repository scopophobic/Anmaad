import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ANMAAD - Accounting, Tax & Business Compliance Services",
  description: "Professional accounting, tax filing, GST registration, company incorporation, and business compliance services. Trusted by businesses across India for accurate and timely financial solutions.",
  keywords: "accounting services, tax filing, GST registration, company incorporation, LLP registration, income tax, bookkeeping, MSME registration, TDS filing, business compliance, CA services, tax consultancy",
  authors: [{ name: "ANMAAD" }],
  openGraph: {
    title: "ANMAAD - Accounting, Tax & Business Compliance Services",
    description: "Your trusted partner for comprehensive accounting, tax filing, and business compliance services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
