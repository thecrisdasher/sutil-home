import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navigation/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alivio Vital Home Care - Cuidado Domiciliario Profesional',
  description: 'Servicios de atención domiciliaria de salud con enfermeras, fisioterapeutas y auxiliares 24/7. Cuidamos con cariño, profesionalismo y respeto.',
  keywords: 'cuidado domiciliario, enfermeras a domicilio, fisioterapia, atención médica, home care, salud en casa',
  authors: [{ name: 'Alivio Vital Home Care' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Alivio Vital Home Care - Cuidado Domiciliario Profesional',
    description: 'Servicios de atención domiciliaria de salud con enfermeras, fisioterapeutas y auxiliares 24/7.',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
