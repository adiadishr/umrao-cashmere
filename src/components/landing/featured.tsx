import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"
import { TextAnimate } from "@/components/ui/text-animate"
import { PRODUCT_CATEGORIES } from "@/constants/product-categories"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function FeaturedProducts() {

   return (<>
      <section className="py-48 pt-24">
         <Carousel>
            <div className="flex items-end justify-between w-full mb-9 max-w-7xl mx-auto px-3">
               <div className="shrink-0">
                  <TextAnimate duration={0.3} delay={0} as="h2" animation="slideUp" by="word" className="mb-1 uppercase text-primary">
                     What we can do for you
                  </TextAnimate>
                  <TextAnimate duration={0.3} delay={0.1} as="p" animation="slideUp" by="word" className="">
                     Explore seasonal collections, iconic accessories and exclusive items from our selection.
                  </TextAnimate>
               </div>
               <div className="flex items-stretch gap-3 px-3 py-3 rounded-md bg-neutral-100 h-fit w-fit">
                  <ChevronLeft size={20} strokeWidth={1.5} className="text-neutral-300" />
                  <div className="w-px bg-neutral-300"></div>
                  <ChevronRight size={20} strokeWidth={1.5} className="text-neutral-500" />
               </div>
            </div>
            <div className="px-3">
               <CarouselContent className="-ml-3">
                  {PRODUCT_CATEGORIES.map(({ src, label, caption }, index) => (
                     <CarouselItem className="pl-3 basis-1/3" key={index}>
                        <div className="relative h-132 p-15 flex flex-col justify-end">
                           <Image fill src={src} alt="image" className="object-cover object-center z-0" />
                           <div className="absolute w-full h-full inset-0 bg-linear-to-b from-foreground/35 to-foreground/75 z-1" />
                           <div className="relative z-2 text-background">
                              <p className="text-xs uppercase mb-3">{caption}</p>
                              <p className="text-2xl uppercase font-medium">{label}</p>
                           </div>
                        </div>
                     </CarouselItem>
                  ))}
               </CarouselContent>
            </div>
         </Carousel>
      </section>
   </>)
}