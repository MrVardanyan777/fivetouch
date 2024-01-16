import './globals.css'

export const metadata = {
  title: 'FiveTouch',
  description: `5 Touch Electronics - Where Innovation Meets Affordability`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        {children}
      </body>
    </html>
  )
}
