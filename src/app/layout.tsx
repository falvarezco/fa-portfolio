import './globals.css';
import { Jost } from 'next/font/google';

import Navigation from '@/components/Navigation';

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Felipe Alvarez',
  description: 'Felipe Alvarez Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-zinc-800 ${jost.className}`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
