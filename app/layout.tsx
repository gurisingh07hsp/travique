import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarAndFooterProvider from "@/components/NavbarAndFooterProvider";
import { UserProvider } from "@/context/UserContext";
import WhatsappButton from "@/components/WhatsappButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Milky Way Tours",
  description: "Reliable Airport Transfers & Private Tours Across New Zealand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <UserProvider>
        <NavbarAndFooterProvider>
        {children}
        <WhatsappButton
          phoneNumber="642108111920"
        />
        </NavbarAndFooterProvider>
        </UserProvider>
      </body>
    </html>
  );
}
