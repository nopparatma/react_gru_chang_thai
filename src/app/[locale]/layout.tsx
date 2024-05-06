import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const messages = useMessages();

  return (
    <html className='bg-black' lang={locale}>
      <body className={inter.className}>
        <Navbar />
        <div>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
            <SpeedInsights />
          </NextIntlClientProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
