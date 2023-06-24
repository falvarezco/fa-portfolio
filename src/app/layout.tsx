'use client';
import './globals.css';
import { useState } from 'react';
import { Jost } from 'next/font/google';
import Navigation from '@/components/Navigation';
import { MobileCheckContext } from '@/context/MobileCheckContext';
const jost = Jost({ subsets: ['latin'] })

const BODY_CLASSES = `h-screen bg-zinc-800 ${jost.className} overflow-hidden`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileUI, setMobileStatus] = useState(false);
  return (
    <html lang="en">
      <body className={BODY_CLASSES}>
        <MobileCheckContext.Provider value={mobileUI} >
          <Navigation onDeviceChange={setMobileStatus} />
          {children}
        </MobileCheckContext.Provider>
      </body>
    </html>
  )
}
