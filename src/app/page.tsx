import { About, AboutV2 } from "@/components/landing/about";
import B2BCTA from "@/components/landing/b2b-cta";
import FeaturedProducts from "@/components/landing/featured";
import { HeroBasicParallax } from "@/components/landing/hero";
import { TextAnimate } from "@/components/ui/text-animate";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {

   return (<>
      <HeroBasicParallax />
      <AboutV2 />
      <About />
      <div className="py-24">
         <div className="mx-auto max-w-5xl px-3 mb-24">
            <TextAnimate
               as="h5"
               className="mb-6 text-center uppercase tracking-wide text-primary"
            >
               The World of Cashmere
            </TextAnimate>
            <div className="mx-auto max-w-4xl px-3">
               <TextAnimate
                  as="p"
                  delay={0.3}
                  className="mb-12 text-center leading-relaxed"
               >
                  Sourced from the high plateaus of Inner Asia,
                  cashmere is defined by rarity, patience, and
                  tradition. For centuries, its exceptional softness
                  and warmth have been shaped by climate, care, and
                  craft passed down through generations.
               </TextAnimate>
               <Link
                  href="#"
                  className="group mx-auto flex w-fit items-center gap-4 border-b border-foreground pb-1 text-foreground duration-300 hover:gap-6"
               >
                  <span className="text-sm font-medium uppercase">
                     Discover Here
                  </span>
               </Link>
            </div>
         </div>
         <div className="max-w-7xl px-3 mx-auto">
            <div className="grid md:grid-cols-[1fr_1fr] items-center">
               <div className="relative w-full h-96">
                  <Image src="/about-1.jpg" fill alt="image" className="object-cover object-center" />
               </div>
               <div className="md:pl-12">
                  <p className="mb-3 text-sm uppercase">Craftsmanship</p>
                  <h2 className="mb-6 text-3xl uppercase font-medium">Made With Intention</h2>
                  <p className="mb-9">
                     Every piece begins with skilled hands and time-honored techniques. From raw material to final finish, our process is carefully considered.
                  </p>
               </div>
            </div>
            <div className="grid md:grid-cols-[1fr_1fr] items-center">
               <div className="relative w-full h-96 md:order-2">
                  <Image src="/about-1.jpg" fill alt="image" className="object-cover object-center" />
               </div>
               <div className="md:order-1 md:pr-12">
                  <p className="mb-3 text-sm uppercase">Craftsmanship</p>
                  <h2 className="mb-6 text-3xl uppercase font-medium">Made With Intention</h2>
                  <p className="mb-9">
                     Every piece begins with skilled hands and time-honored techniques. From raw material to final finish, our process is carefully considered.
                  </p>
               </div>
            </div>
         </div>
      </div>
      <FeaturedProducts />
      <B2BCTA />
   </>)
}