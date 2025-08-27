import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";

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
    default: "Alivio Vital Home Care - Enfermería Domiciliaria Profesional",
    template: "%s | Alivio Vital Home Care"
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
  authors: [{ name: "Alivio Vital Home Care", url: "https://aliviovital.com" }],
  creator: "Alivio Vital Home Care",
  publisher: "Alivio Vital Home Care",
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
    title: 'Alivio Vital Home Care - Enfermería Domiciliaria Profesional',
    description: 'Servicios profesionales de enfermería y cuidados domiciliarios. Atención médica especializada en la comodidad de tu hogar con personal certificado 24/7.',
    siteName: 'Alivio Vital Home Care',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alivio Vital Home Care - Enfermería Domiciliaria Profesional',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alivio Vital Home Care - Enfermería Domiciliaria Profesional',
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
        <meta name="theme-color" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Alivio Vital" />
      </head>
      <body className="min-h-screen bg-beige-100 antialiased">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}