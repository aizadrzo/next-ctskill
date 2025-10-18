import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header, Footer } from "@/components/marketing";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CT Skills - Developing Careers and Companies",
  description:
    "Through training and recruitment services, we help individuals reach their potential — and help businesses grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
