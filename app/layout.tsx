import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T4WNPSBN"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}>
          </iframe>
        </noscript>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T4WNPSBN');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FM0E1BTVB5"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FM0E1BTVB5');
          `}
        </Script>
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
