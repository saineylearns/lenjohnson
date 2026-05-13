import './globals.css'

export const metadata = {
  title: 'Len Johnson — Uncrowned Champion of Manchester',
  description: 'The story of a boxer denied the title he deserved. A campaign to build a statue of Manchester\'s boxing legend.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
