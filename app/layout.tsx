import type React from "react"
import "@/app/globals.css"
import { Judson } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const judson = Judson({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata = {
  title: "Luxury Hotel - Your Perfect Getaway",
  description: "Experience unparalleled luxury and comfort at our premium hotel.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={judson.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
