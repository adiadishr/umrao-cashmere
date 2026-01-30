'use client'

import Image from "next/image";
import { useScroll, useTransform, cubicBezier, type Variants, motion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import { TextAnimate } from "../ui/text-animate";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SCALE_ANIMATION_VARIANTS: Variants = {
   hidden: { scale: 0.8 },
   show: {
      scale: 1,
      transition: {
         duration: 1.2,
         ease: cubicBezier(0.25, 1, 0.5, 1),
      },
   },
}

export function About() {

   const container = useRef<HTMLDivElement | null>(null)
   const content = useRef<HTMLDivElement>(null)

   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
   })

   const { scrollYProgress: scrollYProgressContent } = useScroll({
      target: container,
      offset: ["start end", "end center"],
   })

   const leftParallaxY = useTransform(scrollYProgress, [0, 1], [-100, 100])
   const rightParallaxY = useTransform(scrollYProgress, [0, 1], [-100, 100])

   const leftY = useTransform(scrollYProgress, [0, 1], [0, 0])
   const rightY = useTransform(scrollYProgress, [0, 1], [0, 0])

   const [travel, setTravel] = useState(0)

   useLayoutEffect(() => {
      if (!container.current || !content.current) return

      const containerHeight = container.current.offsetHeight
      const contentHeight = content.current.offsetHeight

      // 24 * 4 = 96px (Tailwind)
      const padding = 96 * 2

      setTravel(containerHeight - contentHeight - padding)
   }, [])

   const contentY = useTransform(scrollYProgressContent, [0, 1], [0, travel])

   return (<>
      {/* <motion.div
         style={{ scaleX: scrollYProgress }}
         className="fixed top-0 left-0 w-full h-1 origin-left bg-primary z-9999"
      /> */}
      <div ref={container} className="grid w-full h-[calc(100vh-72px)] grid-cols-24 gap-x-3 px-3 max-w-7xl mx-auto">
         <motion.div
            className="relative w-full h-full overflow-hidden col-span-13 py-24 px-15"
            style={{ y: leftY }}
         >
            <div className="overlay" />
            <motion.div ref={content} style={{ y: contentY }} className="absolute max-w-xl text-white z-2 top-24">
               <p className="mb-3 text-sm uppercase">Experience center</p>
               <h2 className="mb-6 text-3xl uppercase font-medium">Interested in our products?</h2>
               <p className="mb-9">
                  Discover our experience centers and partner stores worldwide. Explore textures, craftsmanship, and collections in spaces designed to reflect our heritage and design philosophy.
               </p>
               <Link href="#" className="flex items-center gap-4 pb-1 text-white duration-300 border-b border-white w-fit hover:gap-6">
                  <span className="text-xs uppercase">Find a location</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
               </Link>
            </motion.div>
            <motion.div
               style={{ y: leftParallaxY }}
               className="absolute inset-0 h-[calc(100vh+100px)] -top-25 z-0"
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
            className="relative w-full h-full overflow-hidden col-span-11 py-24 px-15"
            style={{ y: rightY }}
         >
            <motion.div ref={content} style={{ y: contentY }} className="absolute max-w-md text-white z-2 top-24">
               <p className="mb-3 text-sm uppercase">Craftsmanship</p>
               <h2 className="mb-6 text-3xl uppercase font-medium">Made With Intention</h2>
               <p className="mb-9">
                  Every piece begins with skilled hands and time-honored techniques. From raw material to final finish, our process is carefully considered.
               </p>
               <Link href="#" className="flex items-center gap-4 pb-1 text-white duration-300 border-b border-white w-fit hover:gap-6">
                  <span className="text-xs uppercase">Discover the process</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
               </Link>
            </motion.div>
            <div className="overlay" />
            <motion.div
               style={{ y: rightParallaxY }}
               className="absolute inset-0 h-[calc(100vh+100px)] -top-25 z-0"
            >
               <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 z-0 object-cover w-full h-full"
                  src="/video-2.MOV"
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

   return (<>
      {/* <motion.div
         style={{ scaleX: scrollYProgress }}
         className="fixed top-0 left-0 w-full h-1 origin-left bg-primary z-9999"
      /> */}
      <div ref={container} className="py-30 bg-neutral-50">
         <motion.div style={{ y: contentY }}>
            <TextAnimate animate="slideUp" as="h5" by="word" duration={0.3} delay={0} className="mx-auto text-center uppercase w-fit text-primary mb-9">
               Our heritage
            </TextAnimate>
            <TextAnimate animate="slideUp" as="p" by="word" duration={0.3} delay={0.1} className="max-w-xl mx-auto mb-18">
               Umrao Cashmere is a vertically integrated cashmere manufacturer specializing in high-grade fabrics for global fashion brands. We work behind the scenes — supplying refined cashmere textiles that become exceptional garments.
            </TextAnimate>
         </motion.div>
         <div className="grid max-w-4xl grid-cols-2 mx-auto gap-x-3 mb-15">
            <motion.div
               variants={SCALE_ANIMATION_VARIANTS}
               initial="hidden"
               whileInView="show"
               viewport={{ margin: "250px" }}
               className="relative w-full overflow-hidden h-150 bg-primary"
            >
               <div className="overlay" />
               <motion.div
                  style={{ y }}
                  className="absolute inset-0 w-full h-175 -top-25"
               >
                  <Image
                     src="/about-1.jpg"
                     alt="img"
                     fill
                     className="object-cover object-center"
                     priority
                  />
               </motion.div>
            </motion.div>
            <motion.div
               variants={SCALE_ANIMATION_VARIANTS}
               initial="hidden"
               whileInView="show"
               viewport={{ margin: "250px" }}
               className="relative w-full overflow-hidden h-150 bg-primary"
            >
               <div className="overlay" />
               <motion.div
                  style={{ y }}
                  className="absolute inset-0 w-full h-175 -top-25"
               >
                  <Image
                     src="/about-2.jpg"
                     alt="img"
                     fill
                     className="object-cover object-center"
                     priority
                  />
               </motion.div>
            </motion.div>
         </div>
         <motion.div style={{ y: linkY }}>
            <Link href="#" className="flex items-center gap-3 pb-1 mx-auto border-b text-primary w-fit border-primary duration-300 hover:text-foreground hover:border-foreground group">
               <span className="text-sm uppercase">Learn more</span>
               <ArrowRight className="group-hover:-rotate-45 duration-300" size={18} strokeWidth={1.5} />
            </Link>
         </motion.div>
      </div>
   </>)
}