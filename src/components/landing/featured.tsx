import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"
import { TextAnimate } from "@/components/ui/text-animate"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function FeaturedProducts() {

   return (<>
      <section className="py-24">
         <Carousel>
            <div className="flex items-end justify-between w-full mb-9 px-15">
               <div className="shrink-0">
                  <TextAnimate duration={0.3} delay={0} as="h2" animation="slideUp" by="word" className="mb-1 uppercase text-primary">
                     What we can do for you
                  </TextAnimate>
                  <TextAnimate duration={0.3} delay={0.1} as="p" animation="slideUp" by="word" className="">
                     Explore seasonal collections, iconic accessories and exclusive items from our selection.
                  </TextAnimate>
               </div>
               <div className="flex items-stretch gap-3 px-3 py-3 rounded-md bg-neutral-100 h-fit w-fit">
                  <ChevronLeft size={20} strokeWidth={1.5} className="text-neutral-500" />
                  <div className="w-px bg-neutral-300"></div>
                  <ChevronRight size={20} strokeWidth={1.5} className="text-neutral-500" />
               </div>
            </div>
            <CarouselContent className="-ml-3">
               {Array.from({ length: 12 }).map((_, i) => (
                  <CarouselItem className="pl-3 basis-1/3" key={i}>
                     <div className="relative h-132">
                        <Image fill src="/store.jpg" alt="image" className="object-cover object-center" />
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>
         </Carousel>
      </section>
   </>)
}