import "./globals.css";

import MainHeader from "@/components/main-header";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          <MainHeader />
          {children}
        </main>
      </body>
    </html>
  )
}
