import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'B2B E-commerce',
  description: 'Powered by B&P',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico?v=2" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}
