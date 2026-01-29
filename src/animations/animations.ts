export const slideUpVariants = {
   item: {
      hidden: { y: 20, opacity: 0 },
      show: { y: 0, opacity: 1, transition: { duration: 0.5, }, },
      exit: { y: 20, opacity: 0, transition: { duration: 0.5, }, },
   },
}