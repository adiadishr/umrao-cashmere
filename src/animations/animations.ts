import { type Variants } from "motion";

export const SLIDE_UP_ANIMATION_VARIANTS = {
   item: {
      hidden: { y: 20, opacity: 0 },
      show: { y: 0, opacity: 1, transition: { duration: 0.5, }, },
      exit: { y: 20, opacity: 0, transition: { duration: 0.5, }, },
   },
}

export const HAMBURGER_MENU_ANIMATION_VARIANTS = {
   top: {
      open: {
         rotate: "45deg",
         top: '50%',
      },
      close: {
         rotate: "0deg",
      }
   },
   bottom: {
      open: {
         rotate: "-45deg",
         top: '50%',
      },
      close: {
         rotate: "0deg",
      }
   },
};

export const NAV_ANIMATION_VARIANTS: Variants = {
   visible: {
      y: 0,
      transition: {
         type: "tween",
         ease: "easeOut",
         duration: 0.25,
      },
   },
   hidden: {
      y: "-100%",
      transition: {
         type: "tween",
         ease: "easeIn",
         duration: 0.35,
      },
   },
}