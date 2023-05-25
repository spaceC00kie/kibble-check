import { motion } from "framer-motion"
// dog icon accent color is orange-600
import { default as vault } from "/src/assets/headingTile.svg"

export const IntroductionTile = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -25, y: -5 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.04,
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.5,
        bounce: 0.2,
      }}
      className="flex shrink-0 flex-col items-center overflow-clip rounded-md border border-yellow-600 bg-red-800 bg-opacity-50 p-4 sm:flex-row"
      style={{
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="flex h-32 shrink justify-start sm:w-1/2">
        <img src={vault} alt="vault" className="drop-shadow-2xl" />
      </div>
      <div className="m-3 flex flex-col gap-3 rounded-md border border-yellow-500 border-opacity-50 bg-red-900 bg-opacity-70 p-2 text-lg font-bold text-yellow-50 sm:ml-14 sm:w-1/2 sm:text-2xl">
        {/* If text is too short, unwanted sizing behavior */}
        <p>Know Fido's been fed with KibbleCheck!</p>
      </div>
      <div className="absolute -z-50 h-[35em] w-[35em] -translate-x-[16em] translate-y-8 rounded-full bg-yellow-600 opacity-90 blur-2xl" />
    </motion.div>
  )
}
