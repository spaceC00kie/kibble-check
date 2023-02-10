import { motion } from "framer-motion"

export const MainTile = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
      }}
      className="h-[32em] shrink-0 overflow-hidden rounded-md border border-yellow-700 bg-red-900 bg-opacity-50"
      style={{
        backdropFilter: "blur(16px)",
      }}
    ></motion.div>
  )
}
