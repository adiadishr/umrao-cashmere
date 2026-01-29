import { Forum, Geist, Geist_Mono, Jost, Lora, Manrope, Montserrat, Noto_Serif, Open_Sans, Playfair_Display, Plus_Jakarta_Sans, Poppins, Raleway, Ubuntu, Urbanist, Work_Sans } from 'next/font/google'

export const baseFont = Jost({
   variable: "--font-base",
   subsets: ["latin"],
   weight: ["300", "400", "500", "600", "700", "800"],
   // weight: ["400"],
})

export const serifFont = Noto_Serif({
   variable: "--font-serif",
   subsets: ["latin"],
   // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
   weight: ["400"],
})