import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function FooterLink({ children, href = "#" }: { children: React.ReactNode, href?: string }) {
   return (<>
      <Link href={href} className="relative text-sm cursor-pointer group w-fit">
         {children}
         <div className="absolute w-0 h-px duration-300 origin-left bg-background -bottom-1 group-hover:w-full"></div>
      </Link>
   </>)
}
function FooterV2Link({ children, href = "#" }: { children: React.ReactNode, href?: string }) {
   return (<>
      <Link href={href} className="relative text-sm cursor-pointer group w-fit">
         {children}
         <div className="absolute w-0 h-px duration-300 origin-left bg-primary -bottom-1 group-hover:w-full"></div>
      </Link>
   </>)
}

export default function Footer() {
   return (<>
      <footer className="px-12 py-12 bg-neutral-50">
         <div className="flex items-start justify-between w-full mb-12 text-white p-18 py-21 bg-primary/85">
            <div className="max-w-lg">
               <p className="mb-3 uppercase">Subscribe to our newsletter</p>
               <p className="mb-3 text-sm">Receive our newsletter and discover our world, collections, and latest news from us.</p>
               <div className="flex items-center justify-between w-full py-3 mb-6 text-sm border-b">
                  <span>Enter your email address</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
               </div>
               <p className="text-xs">I acknowledge that my email address will be processed by Umrao Cashmere in accordance with the provisions of the Privacy Policy and Terms of Use which is compliant to the Privacy Act.</p>
            </div>
            <div className="flex items-start justify-end gap-x-12">
               <div className="flex flex-col gap-3">
                  <h5 className="text-sm uppercase">Press</h5>
                  <FooterLink>News & Events</FooterLink>
               </div>
               <div className="flex flex-col gap-3">
                  <h5 className="text-sm uppercase">Get in touch</h5>
                  <FooterLink>Contact</FooterLink>
                  <FooterLink>FAQs</FooterLink>
               </div>
               <div className="flex flex-col gap-3">
                  <h5 className="text-sm uppercase">Socials</h5>
                  <FooterLink>Instagram</FooterLink>
                  <FooterLink>Facebook</FooterLink>
                  <FooterLink>LinkedIn</FooterLink>
                  <FooterLink>WhatsApp</FooterLink>
               </div>
               <div className="flex flex-col gap-3">
                  <h5 className="text-sm uppercase">Company</h5>
                  <FooterLink>About</FooterLink>
                  <FooterLink>Products</FooterLink>
                  <FooterLink>Experience Center</FooterLink>
                  <FooterLink>Careers</FooterLink>
               </div>
            </div>
         </div>
         <div className="flex items-center justify-between w-full">
            <p className="text-sm text-neutral-500">
               &copy; Umrao Cashmere, 2026. All rights reserved.
            </p>
            <p className="text-sm text-neutral-500">
               Technology Partner - <Link target="_blank" href="https://www.infinitydigitalagency.com.np" className="underline cursor-pointer text-primary">Infinity Digital Agency</Link>
            </p>
         </div>
      </footer>
   </>)
}

export function FooterV2() {
   return (<>
      <footer className="px-12 pt-24 pb-12 bg-foreground">
         <div className="flex items-start justify-between w-full mb-9 text-foreground p-18 py-24 bg-neutral-50">
            <div className="max-w-md">
               <div className="w-25 -mt-5 mb-6 aspect-2/1 relative">
                  <Image src="/logo.png" fill alt="logo" className="object-cover object-center" />
               </div>
               <p className="text-sm mb-3 tracking-normal!">For inquiries, bespoke requests, or assistance, our team is here to support you.</p>
               <div className="flex items-center justify-between w-full py-3 mb-6 text-xs border-b">
                  <span>Enter your email address</span>
                  <ArrowRight size={16} strokeWidth={1.5} />
               </div>
               <p className="text-sm tracking-normal!">By contacting us, you acknowledge that your information will be processed by Umrao Cashmere in accordance with our Privacy Policy and Terms of Use, in compliance with the Privacy Act.</p>
            </div>
            <div className="flex items-start justify-end gap-x-12">
               <div className="flex flex-col gap-3">
                  <h5 className="uppercase text-primary">Get in touch</h5>
                  <FooterV2Link>Contact</FooterV2Link>
                  <FooterV2Link>Help & Support</FooterV2Link>
               </div>
               <div className="flex flex-col gap-3">
                  <h5 className="uppercase text-primary">Insights</h5>
                  <FooterV2Link>The Art of Cashmere</FooterV2Link>
                  <FooterV2Link>The World of Cashmere </FooterV2Link>
               </div>
               <div className="flex flex-col gap-3">
                  <h5 className="uppercase text-primary">Socials</h5>
                  <FooterV2Link>Instagram</FooterV2Link>
                  <FooterV2Link>Facebook</FooterV2Link>
                  <FooterV2Link>LinkedIn</FooterV2Link>
                  <FooterV2Link>WhatsApp</FooterV2Link>
               </div>
               <div className="flex flex-col gap-3">
                  <h5 className="uppercase text-primary">Company</h5>
                  <FooterV2Link>Brand Heritage</FooterV2Link>
                  <FooterV2Link>Press</FooterV2Link>
                  <FooterV2Link>Collections</FooterV2Link>
                  <FooterV2Link>Experience Center</FooterV2Link>
               </div>
            </div>
         </div>
         <div className="flex items-center justify-center w-full">
            <p className="text-xs text-background">
               &copy; Umrao Cashmere, 2026. All rights reserved.
            </p>
         </div>
      </footer>
   </>)
}