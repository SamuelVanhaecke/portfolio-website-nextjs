import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const ilyas = localFont({
  src: '../../public/fonts/ilyas.woff2',
  variable: '--font-ilyas',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${ilyas.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
