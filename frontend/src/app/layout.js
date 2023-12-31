import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Hero Journey',
  description: 'Generated by Next 14'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <body style={{ margin: '0px' }}>{children}</body>
    </html>
  )
}
