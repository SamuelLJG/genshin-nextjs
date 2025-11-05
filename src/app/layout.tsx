import { Anuphan, Plus_Jakarta_Sans, Inter, Oswald } from 'next/font/google'
import "./globals.css";
import { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script';
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
        <Script strategy="beforeInteractive">
          {`
            (function() {
              var path = window.location.pathname;
              if(path.endsWith('/') && path !== '/') {
                window.location.replace(path.slice(0, -1));
              }
            })();
          `}
        </Script>
<Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11069534793"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11069534793');
          `}
        </Script>
        <GoogleAnalytics gaId="G-ZMW5Q2STCE" />
        {children}
        </>
  )
}
