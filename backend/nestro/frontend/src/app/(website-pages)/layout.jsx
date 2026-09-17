import Navbar from '@/components/website/layout/Navbar'
import '../globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/website/layout/Footer'
import StoreProvider from '@/redux/StoreProvider'


const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata = {
  title: 'Nestro — Curated Furniture',
  description: 'Scandinavian-inspired furniture for modern living.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#F8F5F1]`}>
        <StoreProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </StoreProvider>

      </body>
    </html>
  )
}