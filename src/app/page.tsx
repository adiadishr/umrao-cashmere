import { About, AboutV2 } from "@/components/landing/about";
import B2BCTA from "@/components/landing/b2b-cta";
import FeaturedProducts from "@/components/landing/featured";
import { HeroBasicParallax } from "@/components/landing/hero";
import { TextAnimate } from "@/components/ui/text-animate";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {

   return (<>
      <HeroBasicParallax />
      <AboutV2 />
      <About />
      <div className="max-w-5xl mx-auto py-48">
         <TextAnimate as="h5" className="mb-6 uppercase text-center text-primary">The World of Cashmere</TextAnimate>
         {/* <TextAnimate as="h2" delay={0.1} className="mb-9 text-3xl uppercase font-medium text-primary text-center">The World of Cashmere</TextAnimate> */}
         <div className="max-w-4xl mx-auto">
            <TextAnimate as="p" delay={0.3} className="mb-12 text-center">
               Sourced from the high plateaus of Inner Asia, cashmere is defined by rarity, patience, and tradition. For centuries, its exceptional softness and warmth have been shaped by climate, care, and craft passed down through generations.
            </TextAnimate>
            <Link href="#" className="flex items-center gap-4 pb-1 text-foreground duration-300 border-b border-foreground w-fit hover:gap-6 mx-auto">
               <span className="text-sm uppercase">Discover Here</span>
               {/* <ArrowRight size={18} strokeWidth={1.5} /> */}
            </Link>
         </div>
      </div>
      <FeaturedProducts />
      <B2BCTA />
   </>)
}