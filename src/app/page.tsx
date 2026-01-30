import { About, AboutV2 } from "@/components/landing/about";
import B2BCTA from "@/components/landing/b2b-cta";
import FeaturedProducts from "@/components/landing/featured";
import { HeroBasicParallax } from "@/components/landing/hero";

export default function Page() {

   return (<>
      <HeroBasicParallax />
      <AboutV2 />
      <About />
      <FeaturedProducts />
      <B2BCTA />
   </>)
}