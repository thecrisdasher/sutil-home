import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import ServiceWorkerRegistration from '@/components/ui/service-worker-registration';
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from 'react';

const dmSerif = DM_Serif_Display({ 
  subsets: ["latin"],
  weight: "400", // elegante y gruesa por defecto
  variable: "--font-dm-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"], // pesos fuertes
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lazos De Cuidado Home Care - Enfermería Domiciliaria Profesional",
    template: "%s | Lazos De Cuidado Home Care"
  },
  description: "Servicios profesionales de enfermería y cuidados domiciliarios. Atención médica especializada en la comodidad de tu hogar con personal certificado 24/7.",
  keywords: [
    "enfermería domiciliaria",
    "cuidados en casa",
    "atención médica domiciliaria",
    "enfermeras a domicilio",
    "cuidado de adultos mayores",
    "rehabilitación en casa",
    "servicios de salud",
    "cuidados postoperatorios",
    "acompañamiento médico",
    "administración de medicamentos",
    "monitoreo de salud",
    "curaciones domiciliarias"
  ],
  authors: [{ name: "Lazos De Cuidado Home Care", url: "https://lazosdecuidado.com" }],
  creator: "Lazos De Cuidado Home Care",
  publisher: "Lazos De Cuidado Home Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aliviovital.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es',
      'en-US': '/en',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://aliviovital.com',
    title: 'Lazos De Cuidado Home Care - Enfermería Domiciliaria Profesional',
    description: 'Servicios profesionales de enfermería y cuidados domiciliarios. Atención médica especializada en la comodidad de tu hogar con personal certificado 24/7.',
    siteName: 'Lazos De Cuidado Home Care',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lazos De Cuidado Home Care - Enfermería Domiciliaria Profesional',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lazos De Cuidado Home Care - Enfermería Domiciliaria Profesional',
    description: 'Servicios profesionales de enfermería y cuidados domiciliarios. Atención médica especializada en la comodidad de tu hogar.',
    images: ['/og-image.jpg'],
    creator: '@aliviovital',
    site: '@aliviovital',
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
  },
  category: 'healthcare',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${dmSerif.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Lazos De Cuidado" />
      </head>
      <body className="h-full bg-beige-100 antialiased gpu-accelerated">
        <ServiceWorkerRegistration>
          <div className="flex flex-col h-full">
            <Suspense fallback={null}>
              <Navbar />
            </Suspense>
            <main className="flex-1">
              {children}
            </main>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </div>
          <WhatsAppButton />
        </ServiceWorkerRegistration>
      </body>
    </html>
  );
}