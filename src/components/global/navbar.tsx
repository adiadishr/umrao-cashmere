'use client'

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from 'motion/react'
import { cn } from "@/lib/utils";
import { ShoppingBasket } from "lucide-react";

const HAMBURGER_MENU_ANIMATION_VARIANTS = {
   top: {
      open: {
         rotate: "45deg",
         top: '50%',
      },
      close: {
         rotate: "0deg",
      }
   },
   bottom: {
      open: {
         rotate: "-45deg",
         top: '50%',
      },
      close: {
         rotate: "0deg",
      }
   },
};

function NavLink({ children, isScrolled }: { children: React.ReactNode, isScrolled: boolean }) {
   return (<>
      <div className="relative flex flex-col h-full tracking-wider cursor-pointer group">
         <span className={cn("text-xs text-white uppercase duration-200 ease-out-quart", isScrolled && "text-black")}>{children}</span>
         <span className={cn("absolute h-px w-full bg-white -bottom-1.5 left-0 origin-left scale-x-0 group-hover:scale-x-100 duration-500 ease-out-quart", isScrolled && "bg-primary")} />
      </div>
   </>)
}

export default function Navbar() {

   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false)

   const { scrollY } = useScroll()

   useMotionValueEvent(scrollY, 'change', (latest) => {
      setIsScrolled(latest > (window.innerHeight * 0.65))
   })

   return (<>
      <nav className="fixed top-0 z-50 w-full">
         <div className={cn("relative flex items-center justify-between max-h-21 h-21 px-15 duration-500 ease-out-quart border-b border-neutral-100/10", isScrolled && "bg-white h-18 border-transparent")}>
            {/* <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"> */}
            <div className="relative h-16 mr-12 aspect-2/1">
               <Image alt="logo" fill src="/logo.png" className={cn("object-cover saturate-0 brightness-10000 duration-500 ease-out-quart", isScrolled && "saturate-100 brightness-100")} />
            </div>
            {/* </div> */}
            <div className="flex items-center gap-6">
               <NavLink isScrolled={isScrolled}>Products</NavLink>
               <NavLink isScrolled={isScrolled}>About</NavLink>
               <NavLink isScrolled={isScrolled}>Process</NavLink>
               <NavLink isScrolled={isScrolled}>Cashmere</NavLink>
               <NavLink isScrolled={isScrolled}>Press</NavLink>
               <NavLink isScrolled={isScrolled}>Contact</NavLink>
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
      </nav>
   </>)
}