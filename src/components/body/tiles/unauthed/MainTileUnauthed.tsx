import { motion } from "framer-motion"
import { default as calendar } from "/src/assets/undraw_chore_list.svg"

export const MainTileUnauthed = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
      }}
      className="flex h-[32em] shrink-0 flex-col gap-2 overflow-clip rounded-md border border-yellow-600 bg-red-900 bg-opacity-50 p-2 sm:flex-row"
      style={{
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="grid h-full place-content-center p-2 sm:w-1/2">
        <div className="rounded-md border border-yellow-600 bg-red-800 bg-opacity-50 p-4 text-lg font-bold text-yellow-50">
          Just log in with Google, check the AM or PM box when you feed your
          dog, and come back any time to see the feeding history. Even if
          someone else checked the box!
        </div>
      </div>
      <div className="grid place-content-center sm:w-1/2">
        <img src={calendar} alt="calendar" />
      </div>
    </motion.div>
  )
}
