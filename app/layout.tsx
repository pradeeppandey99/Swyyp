import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
})

export const metadata = {
  title: 'Swyyp: Swipe-Based Surveys, Quizzes & Feedback | AI-Powered Simplicity',
  description: 'Create, engage, and analyze with Swyyp – the ultimate AI-powered, swipe-based survey and quiz platform for educators, trainers, and coaches.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lato.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}