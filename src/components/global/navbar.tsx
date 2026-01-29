'use client'

import Image from "next/image";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from 'motion/react'
import { cn } from "@/lib/utils";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { NAVBAR_LINKS } from "@/constants/navbar-links";
import { HAMBURGER_MENU_ANIMATION_VARIANTS, NAV_ANIMATION_VARIANTS } from "@/animations/animations";

function NavLink({ children, isScrolled, href = "/#" }: { children: React.ReactNode, isScrolled: boolean, href?: string }) {
   return (<>
      <Link href={href} className="relative flex flex-col h-full cursor-pointer group">
         <span className={cn("text-xs text-white uppercase duration-200 ease-out-quart", isScrolled && "text-black")}>{children}</span>
         <span className={cn("absolute h-px w-full bg-white -bottom-1.5 left-0 origin-left scale-x-0 group-hover:scale-x-100 duration-500 ease-out-quart", isScrolled && "bg-primary")} />
      </Link>
   </>)
}

export default function Navbar() {

   const [isScrollingDown, setIsScrollingDown] = useState(false)
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [isScrolled, setIsScrolled] = useState(false)

   const { scrollY } = useScroll()

   const lastY = useRef(0)
   const downDistance = useRef(0)

   useMotionValueEvent(scrollY, 'change', (latest) => {

      // --- isScrolled (threshold-based) ---
      const scrolled = latest > window.innerHeight * 0.65
      setIsScrolled(prev => (prev !== scrolled ? scrolled : prev))

      // --- pause scroll logic when menu open ---
      if (isMenuOpen) {
         lastY.current = latest
         return
      }

      // ---  isScrollingDown ---
      const delta = latest - lastY.current

      // dead-zone (trackpad noise)
      if (Math.abs(delta) < 8) {
         lastY.current = latest
         return
      }

      // scrolling down
      if (delta > 0) {
         downDistance.current += delta
         // hide only after meaningful scroll
         if (downDistance.current > 80) {
            setIsScrollingDown(true)
         }
      }

      // scrolling up → reveal immediately
      else {
         downDistance.current = 0
         setIsScrollingDown(false)
      }

      lastY.current = latest

   })

   return (<>
      <motion.nav
         variants={NAV_ANIMATION_VARIANTS}
         animate={isScrollingDown ? "hidden" : "visible"}
         initial={false}
         className="fixed top-0 z-50 w-full"
      >
         <div className={cn("relative flex items-center justify-between max-h-21 h-21 px-15 duration-500 ease-out-quart border-b border-neutral-100/10", isScrolled && "bg-white h-18 border-transparent")}>
            {/* <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"> */}
            <div className="relative h-16 mr-12 aspect-2/1">
               <Image alt="logo" fill src="/logo.png" className={cn("object-cover saturate-0 brightness-10000 duration-500 ease-out-quart", isScrolled && "saturate-100 brightness-100")} />
            </div>
            {/* </div> */}
            <div className="flex items-center gap-6">
               {NAVBAR_LINKS.map(({ href, label }, index) => (
                  <NavLink key={index} isScrolled={isScrolled} href={href}>{label}</NavLink>
               ))}
               {/* Cart */}
               <motion.button
                  className={cn(
                     "relative size-10 text-white duration-500 rounded-full outline-none cursor-pointer hover:bg-white/15 ease-out-quart group",
                     isScrolled && "text-black hover:bg-primary hover:text-white"
                  )}
               >
                  <ShoppingBasket className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" strokeWidth={1} size={24} />
               </motion.button>
               {/* Menu Button */}
               <motion.button
                  initial={false}
                  animate={isMenuOpen ? "open" : "closed"}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className={cn("relative duration-500 rounded-full outline-none cursor-pointer size-10 hover:bg-white/15 ease-out-quart group", isScrolled && "hover:bg-primary")}
               >
                  <motion.div
                     style={{ left: '50%', top: '42.5%', x: '-50%', y: '-50%' }}
                     transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                     variants={HAMBURGER_MENU_ANIMATION_VARIANTS.top}
                     className={cn("absolute h-px bg-white w-5", isScrolled && "bg-black group-hover:bg-white")}
                  />
                  <motion.div
                     style={{ left: '50%', top: '57.5%', x: '-50%', y: '-50%' }}
                     transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                     variants={HAMBURGER_MENU_ANIMATION_VARIANTS.bottom}
                     className={cn("absolute h-px bg-white w-5", isScrolled && "bg-black group-hover:bg-white")}
                  />
               </motion.button>
            </div>
         </div>
      </motion.nav>
   </>)
}