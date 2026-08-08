import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import SmoothScroll from "@/components/providers/SmoothScroll";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://ednexa.in"),

  title: {
    default: "Ednexa",
    template: "%s | Ednexa",
  },

  description:
    "Ednexa helps businesses grow through premium websites, branding, SEO, AI automation and modern digital experiences.",

  keywords: [
    "Ednexa",
    "Web Design",
    "Website Development",
    "SEO",
    "Brand Identity",
    "AI Automation",
    "Digital Growth",
    "Digital Agency India",
    "Business Website",
    "Mangalore Web Design",
  ],

  authors: [
    {
      name: "Ednexa",
      url: "https://ednexa.in",
    },
  ],

  creator: "Ednexa",

  publisher: "Ednexa",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Ednexa | Digital Growth Partner",

    description:
      "Premium websites, branding, SEO and AI automation that help businesses grow.",

    url: "https://ednexa.in",

    siteName: "Ednexa",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ednexa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Ednexa | Digital Growth Partner",

    description:
      "Premium websites, branding, SEO and AI automation that help businesses grow.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F8F7F4] text-[#111111] antialiased">
        <SmoothScroll>{children}</SmoothScroll>

        <Toaster
          position="top-right"
          richColors
          expand
          closeButton
          duration={4000}
        />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag("js", new Date());

            gtag("config", "${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}");
          `}
        </Script>

        {/* Microsoft Clarity */}

<Script id="microsoft-clarity" strategy="afterInteractive">
  {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){
        (c[a].q=c[a].q||[]).push(arguments)
      };
      t=l.createElement(r);
      t.async=1;
      t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xyt6nqfnik");
  `}
</Script>
      </body>
    </html>
  );
}