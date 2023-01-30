import React from "react"
import { SocialLink } from "./SocialLink"
import { motion } from "framer-motion"

interface Props {}

export const Footer: React.FC<Props> = ({}) => {
  return (
    <motion.div className="flex h-full flex-col justify-end">
      <div className="flex h-14 items-center justify-between">
        {/* social links here */}
      </div>
    </motion.div>
  )
}
