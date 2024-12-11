import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name - BSc CSIT Portfolio',
  description: 'Web Developer and Cybersecurity Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white`}>{children}</body>
    </html>
  )
}

