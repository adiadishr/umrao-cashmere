import { Forum, Manrope, Noto_Serif, Raleway } from 'next/font/google'

export const baseFont = Raleway({
   variable: "--font-base",
   subsets: ["latin"],
   weight: ["200", "300", "400", "500", "600", "700", "800"],
})

export const serifFont = Noto_Serif({
   variable: "--font-serif",
   subsets: ["latin"],
   // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
   weight: ["400"],
})