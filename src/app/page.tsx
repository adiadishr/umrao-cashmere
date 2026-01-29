import { About, AboutV2 } from "@/components/landing/about";
import FeaturedProducts from "@/components/landing/featured";
import { HeroBasicParallax } from "@/components/landing/hero";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {

   return (<>
      <HeroBasicParallax />
      <AboutV2 />
      {/* <About /> */}
      <section className="px-15 h-[calc(100vh-72px-12px-12px)] relative">
         <div className="relative w-full h-full p-24">
            <div className="absolute inset-0 z-1 bg-linear-to-b from-black/25 to-black/50" />
            <Image alt="" src="/store.jpg" fill className="z-0 object-cover object-center" priority />
            <div className="absolute max-w-xl text-white z-2 bottom-24">
               <p className="mb-3 text-sm uppercase">Retail & General Inquiries</p>
               <h2 className="mb-6 text-3xl uppercase">Partner With Umrao Cashmere</h2>
               <p className="mb-9">
                  We work with fashion houses, mills, and manufacturers to supply premium cashmere fabrics tailored to your production needs. From sampling to scale, our team supports every stage of development.
               </p>
               <Link href="#" className="flex items-center gap-4 pb-1 text-white duration-300 border-b border-white w-fit hover:gap-6">
                  <span className="text-xs uppercase">Learn more</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
               </Link>
            </div>
         </div>
      </section>
      <FeaturedProducts />
   </>)
}