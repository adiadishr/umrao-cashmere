'use client'

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";

export default function B2BCTA() {

   const container = useRef<HTMLDivElement | null>(null)
   const content = useRef<HTMLDivElement>(null)

   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
   })

   const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

   const [travel, setTravel] = useState(0)

   useLayoutEffect(() => {
      if (!container.current || !content.current) return

      const containerHeight = container.current.offsetHeight
      const contentHeight = content.current.offsetHeight

      // 24 * 4 = 96px (Tailwind)
      const padding = 96 + 48

      setTravel(containerHeight - contentHeight - padding)
   }, [])

   const contentY = useTransform(scrollYProgress, [0, 1], [0, travel])

   return (<>
      {/* <motion.div
         style={{ scaleX: scrollYProgress }}
         className="fixed top-0 left-0 w-full h-1 origin-left bg-primary z-9999"
      /> */}
      <section ref={container} className="px-3 h-[calc(100vh-72px-12px-12px)] relative">
         <div className="relative w-full h-full p-24 overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[calc(100vh-72px-12px-12px+100px)] -top-25">
               <Image alt="" src="/landing.jpg" fill className="z-0 object-cover object-center" priority />
            </motion.div>
            <div className="overlay" />
            <motion.div ref={content} style={{ y: contentY }} className="absolute max-w-xl text-white z-2 top-24">
               <p className="mb-3 text-sm uppercase">Retail & General Inquiries</p>
               <h2 className="mb-6 text-3xl uppercase font-medium">Partner With Umrao Cashmere</h2>
               <p className="mb-9">
                  We work with fashion houses, mills, and manufacturers to supply premium cashmere fabrics tailored to your production needs. From sampling to scale, our team supports every stage of development.
               </p>
               <Link href="#" className="flex items-center gap-4 pb-1 text-white duration-300 border-b border-white w-fit hover:gap-6">
                  <span className="text-xs uppercase">Learn more</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
               </Link>
            </motion.div>
         </div>
      </section>
   </>)
}
