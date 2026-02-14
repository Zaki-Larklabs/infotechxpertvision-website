import "./globals.css";
import type { Metadata } from "next";
import { Outfit, Noto_Sans_Arabic } from "next/font/google"; // Using proper modern sans-serif
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';
import { FloatingContact } from "@/components/layout/FloatingContact";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Providers } from "@/components/Providers";

const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });
const notoSansArabic = Noto_Sans_Arabic({ subsets: ["arabic"], variable: '--font-noto-arabic' });

export const metadata: Metadata = {
  title: "InfotechXpertVision | Smart College Attendance Management System",
  description: "Automate attendance, streamline operations, and enhance security with InfotechXpertVision's Intelligent Attendance System. Trusted by modern institutions.",
  metadataBase: new URL('https://infotechxpertvision.com'),
  verification: {
    google: 'vQa-_ehSbZlM_X2U6ge5VCNpSW9jewF0t-3vrOigZV8',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" dir="ltr">
      <head>
        <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            `}
        </Script>
        
        {/* Google Tag Manager - Global Base Code */}
        <Script id="gtm-script" strategy="afterInteractive">
        {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
        `}
        </Script>

        {/* Verification meta tags */}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
            <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} />
        )}
        {process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION && (
            <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION} />
        )}
      </head>
      <body className={`${outfit.variable} ${notoSansArabic.variable} font-sans antialiased min-h-screen bg-dark-bg text-white overflow-x-hidden`}>
        <Providers>
        <noscript>
            <iframe 
                src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                height="0" 
                width="0" 
                style={{ display: 'none', visibility: 'hidden' }}
            />
        </noscript>
        
        <div className="flex flex-col min-h-screen relative">
            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -z-10" />
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-pink-900/20 rounded-full blur-[120px] -z-10" />

            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
            <FloatingContact />
            <StickyCTA />
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}
