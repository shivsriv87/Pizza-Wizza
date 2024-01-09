import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'] , weight:['400','500','700']})

export const metadata = {
  title: 'PROJECT-5',
  description: 'SHIVANG SRIVASTAVA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className='max-w-4xl mx-auto  p-4'>
        {children}
        </main>
        
        </body>
    </html>
  )
}
