import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
export const metadata = {
  title: 'FiveTouch',
  description: `5 Touch Electronics - Where Innovation Meets Affordability`,
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className=''>
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
