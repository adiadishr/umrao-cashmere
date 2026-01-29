'use client'

import Lenis from 'lenis'
import { createContext, useContext, useEffect, useRef } from 'react'

const LenisContext = createContext<Lenis | null>(null)

export function LenisProvider({ children }: { children: React.ReactNode }) {
   const lenisRef = useRef<Lenis | null>(null)
   const rafRef = useRef<number | null>(null)

   useEffect(() => {
      const lenis = new Lenis()
      lenisRef.current = lenis

      const raf = (time: number) => {
         lenis.raf(time)
         rafRef.current = requestAnimationFrame(raf)
      }

      rafRef.current = requestAnimationFrame(raf)

      return () => {
         if (rafRef.current) cancelAnimationFrame(rafRef.current)
         lenis.destroy()
         lenisRef.current = null
      }
   }, [])

   return (
      <LenisContext.Provider value={lenisRef.current}>
         {children}
      </LenisContext.Provider>
   )
}

export function useLenis() {
   return useContext(LenisContext)
}
