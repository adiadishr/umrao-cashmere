'use client'

import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { TextAnimate } from "../ui/text-animate";
import { slideUpVariants } from "@/animations/animations";

export function HeroBasicParallax() {

   const container = useRef<HTMLDivElement | null>(null)

   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end center"],
   })

   const backgroundY = useTransform(scrollYProgress, [0, 1], [-100, 200])
   const contentY = useTransform(scrollYProgress, [0, 1], ["65%", "35%"])
   const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.75])

   return (<>
      {/* Scroll Progress Tracker */}
      {/* <motion.div
         style={{ scaleX: scrollYProgress }}
         className="fixed top-0 left-0 w-full h-1 origin-left bg-primary z-9999"
      /> */}
      {/* Container */}
      <div ref={container} className="relative flex items-center justify-center h-screen overflow-hidden">
         {/* Background */}
         <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 h-[calc(100vh+100px)]"
         >
            <video
               autoPlay
               muted
               loop
               playsInline
               className="absolute inset-0 z-0 object-cover w-full h-full"
               src="/video-1.MOV"
            />
         </motion.div>
         {/* Overlay */}
         <motion.div
            style={{ opacity: opacity }}
            className="absolute inset-0 w-full h-full bg-black z-1"
         />
         {/* Content */}
         <div className="container relative px-5 mx-auto z-2">
            <motion.div style={{ y: contentY }} className="w-full">
               <TextAnimate duration={0.5} as="h1" animate="slideUp" by="word" className="max-w-3xl mx-auto text-4xl/[150%] text-center text-white uppercase mb-15 font-normal">
                  Cashmere, Crafted for the World&apos;s Finest Brands
               </TextAnimate>
               <motion.div
                  variants={slideUpVariants.item}
                  initial="hidden"
                  whileInView="show"
                  exit="exit"
                  // viewport={{ margin: "100px" }}
                  transition={{ delay: 5, ease: [0.25, 1, 0.5, 1] }}
                  className="max-w-3xl py-3 mx-auto text-sm text-center text-white uppercase duration-300 border cursor-pointer px-7 w-fit hover:ring"
               >
                  Explore products
               </motion.div>
            </motion.div>
         </div>
      </div>
   </>)
}


export function HeroAdvancedParallax() {

   const container = useRef<HTMLDivElement | null>(null);

   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
   })

   const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

   return (<>
      <div
         ref={container}
         className='relative flex items-center justify-center h-screen overflow-hidden'
         style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
         <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
            <motion.div style={{ y }} className='relative w-full h-full will-change-transform'>
               <div className="absolute inset-0 z-1 bg-black/50" />
               <Image
                  src="/store.jpg"
                  fill
                  alt="image"
                  className="relative z-0 object-cover"
               />
            </motion.div>
         </div>
      </div>
   </>)
}