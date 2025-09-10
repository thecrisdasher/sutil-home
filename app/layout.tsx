import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import WhatsAppFloatButtonPortal from "@/components/ui/whatsapp-float-button-portal";

import ServiceWorkerRegistration from "@/components/ui/service-worker-registration";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
import WhatsAppFloatButton from "@/components/ui/whatsapp-float-button";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Lazos De Cuidado Home Care - Enfermería Domiciliaria Profesional",
    template: "%s | Lazos De Cuidado Home Care",
  },
  description:
    "Servicios profesionales de enfermería y cuidados domiciliarios. Atención médica especializada en la comodidad de tu hogar con personal certificado 24/7.",
  metadataBase: new URL("https://aliviovital.com"),
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
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className="h-full bg-beige-100 antialiased">
        <ServiceWorkerRegistration>
          <div className="flex flex-col min-h-screen">
            <Suspense fallback={null}>
              <Navbar />
            </Suspense>
            <main className="flex-1">{children}</main>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </div>
        </ServiceWorkerRegistration>


      </body>
      <WhatsAppFloatButton />
    </html>

  );
}
