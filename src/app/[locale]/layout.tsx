import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import { description, title } from "@/constants/constants";

const cloud = localfont({
  src: [
    {
      path: "../../../public/fonts/cloud/Cloud-Light.otf",
    },
    {
      path: "../../../public/fonts/cloud/Cloud-Bold.otf",
      weight: "500",
    },
  ],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");

  return {
    title: t(title),
    description: t(description),
    icons: {
      icon: "/images/logo.png",
      shortcut: "/images/logo.png",
      apple: "/images/logo.png",
    },
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html className="bg-black" lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Charmonman:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${cloud.className}`}>
        <div>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            {children}
            <Footer />
            <SpeedInsights />
            <Analytics />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
