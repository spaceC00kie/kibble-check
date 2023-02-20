import { motion } from "framer-motion"
import { default as calendar } from "/src/assets/undraw_chore_list.svg"

export const MainTileAuthed = () => {
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
          Good job logging in! You did great! Now all you have to do is start checking off meals as they're given. Easy as pie. Or dry kibble.
        </div>
      </div>
      <div className="grid place-content-center sm:w-1/2">
        <img src={calendar} alt="calendar" />
      </div>
    </motion.div>
  )
}
