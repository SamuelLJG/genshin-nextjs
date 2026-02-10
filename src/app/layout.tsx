import { Anuphan, Plus_Jakarta_Sans, Inter, Oswald } from 'next/font/google'
import "./globals.css";
import { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
export const metadata: Metadata = {
  metadataBase: new URL('https://genshinbuild.com'),
  icons: {
    icon: 'https://genshinbuild.com/favicon-96x96.png', // caminho dentro de /public
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-image-preview': 'large'
    }
  }
}


const anuphan = Anuphan({
  subsets: ['latin'],
  display: 'swap',
})
 
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
})
export default async function RootLayout({ children }: {children: React.ReactNode;}) {

  return (
        <>
        <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1999593447203691"
        crossOrigin="anonymous"
        />
        <GoogleAnalytics gaId="G-ZMW5Q2STCE" />
        {children}
        </>
  )
}
