import type React from "react"
import "@/app/globals.css"
import { Cormorant_Garamond, Lato } from "next/font/google"
import { cn } from "@/lib/utils"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
})

export const metadata = {
  title: "Chácara Serra Negra - Propriedade de Luxo",
  description:
    "Uma exclusiva chácara com 5.000m² de área total e 1.000m² de área construída em localização privilegiada",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn("min-h-screen font-sans antialiased", cormorant.variable, lato.variable)}>{children}</body>
    </html>
  )
}
