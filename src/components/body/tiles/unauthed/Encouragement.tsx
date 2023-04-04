import { motion } from "framer-motion"
import { SignInButton } from "../../../header/SignInButton"

export const Encouragement = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
      }}
      className="flex h-[12em] shrink-0 overflow-hidden rounded-md border border-yellow-700 bg-red-900 bg-opacity-50"
      style={{
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="m-5 grid place-content-center gap-3 rounded-md border border-yellow-500 border-opacity-50 bg-red-900 bg-opacity-70 p-10 font-bold text-yellow-50">
        Sign in with Google to get started keeping up with your pet's meals!
      </div>
      <div className="grid w-full place-content-center">
        <SignInButton />
      </div>
    </motion.div>
  )
}
