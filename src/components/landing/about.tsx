'use client'

import Image from "next/image";
import { useScroll, useTransform, cubicBezier, type Variants, motion } from "motion/react";
import { useRef } from "react";
import { TextAnimate } from "../ui/text-animate";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export function About() {

   const container = useRef<HTMLDivElement | null>(null)

   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start center", "end start"],
   })

   const leftParallaxY = useTransform(scrollYProgress, [0, 1], [-100, 100])
   const rightParallaxY = useTransform(scrollYProgress, [0, 1], [-200, 100])
   const leftY = useTransform(scrollYProgress, [0, 1], [0, 0])
   const rightY = useTransform(scrollYProgress, [0, 1], [0, 0])

   return (<>
      {/* <motion.div
         style={{ scaleX: scrollYProgress }}
         className="fixed top-0 left-0 w-full h-1 origin-left bg-primary z-9999"
      /> */}
      <div ref={container} className="grid w-full h-[calc(100vh-72px)] grid-cols-2 my-3 gap-x-3">
         <motion.div
            className="relative w-full h-full overflow-hidden"
            style={{ y: leftY }}
         >
            <div className="absolute inset-0 bg-black/30 z-1" />
            <motion.div
               style={{ y: leftParallaxY }}
               className="absolute inset-0 h-[calc(100vh-72px+100px)] z-0"
            >
               <Image
                  src="/store.jpg"
                  fill
                  alt="image"
                  className="object-cover object-center"
                  priority
               />
            </motion.div>
         </motion.div>
         <motion.div
            className="relative w-full h-full overflow-hidden"
            style={{ y: rightY }}
         >
            <div className="absolute inset-0 bg-black/30 z-1" />
            <motion.div
               style={{ y: rightParallaxY }}
               className="absolute inset-0 h-[calc(100vh-72px+100px)] z-0"
            >
               <Image
                  src="/store.jpg"
                  fill
                  alt="image"
                  className="object-cover object-center"
                  priority
               />
            </motion.div>
         </motion.div>
      </div>
   </>)
}

export function AboutV2() {

   const container = useRef<HTMLDivElement | null>(null)

   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end center"],
   })

   const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

   const contentY = useTransform(scrollYProgress, [0, 1], [0, -12])
   const linkY = useTransform(scrollYProgress, [0, 1], [0, 24])

   const scaleVariants: Variants = {
      hidden: { scale: 0.9 },
      show: {
         scale: 1,
         transition: {
            duration: 0.6,
            ease: cubicBezier(0.25, 1, 0.5, 1),
         },
      },
   }

   return (<>
      {/* <motion.div
         style={{ scaleX: scrollYProgress }}
         className="fixed top-0 left-0 w-full h-1 origin-left bg-primary z-9999"
      /> */}
      <div ref={container} className="py-24 bg-neutral-50">
         <motion.div style={{ y: contentY }}>
            <TextAnimate animate="slideUp" as="h5" by="word" duration={0.3} delay={0} className="mx-auto text-center uppercase w-fit text-primary mb-9">
               About
            </TextAnimate>
            <TextAnimate animate="slideUp" as="p" by="word" duration={0.3} delay={0.1} className="max-w-xl mx-auto mb-18">
               Umrao Cashmere is a vertically integrated cashmere manufacturer specializing in high-grade fabrics for global fashion brands. We work behind the scenes — supplying refined cashmere textiles that become exceptional garments.
            </TextAnimate>
         </motion.div>
         <div className="grid max-w-4xl grid-cols-2 mx-auto gap-x-3 mb-15">
            <motion.div
               variants={scaleVariants}
               initial="hidden"
               whileInView="show"
               viewport={{ margin: "100px" }}
               className="relative w-full overflow-hidden h-150 bg-primary"
            >
               <motion.div
                  style={{ y }}
                  className="absolute inset-0 w-full h-175 -top-25"
               >
                  <Image
                     src="/store.jpg"
                     alt="img"
                     fill
                     className="object-cover object-center"
                     priority
                  />
               </motion.div>
            </motion.div>
            <motion.div
               variants={scaleVariants}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, margin: "100px" }}
               className="relative w-full overflow-hidden h-150 bg-primary"
            >
               <motion.div
                  style={{ y }}
                  className="absolute inset-0 w-full h-175 -top-25"
               >
                  <Image
                     src="/store.jpg"
                     alt="img"
                     fill
                     className="object-cover object-center"
                     priority
                  />
               </motion.div>
            </motion.div>
         </div>
         <motion.div style={{ y: linkY }}>
            <Link href="#" className="flex items-center gap-3 pb-1 mx-auto border-b text-primary w-fit border-primary">
               <span className="text-sm uppercase">Learn more</span>
               <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
         </motion.div>
      </div>
   </>)
}