import React from "react"
import { SocialLink } from "./SocialLink"
import { motion } from "framer-motion"
import { AiOutlineGithub } from "react-icons/ai"
import { FaDiscord, FaDonate } from "react-icons/fa"

interface Props {}

export const Footer: React.FC<Props> = ({}) => {
  return (
    <motion.div className="flex h-full flex-col justify-end">
      <div className="flex h-14 w-full items-center justify-between px-24">
        <SocialLink href="" icon={<AiOutlineGithub />} title="github" />
        <SocialLink href="" icon={<FaDiscord />} title="discord" />
        <SocialLink href="" icon={<FaDonate />} title="donate" />
      </div>
    </motion.div>
  )
}
