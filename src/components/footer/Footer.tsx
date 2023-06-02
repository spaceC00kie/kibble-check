import { motion } from "framer-motion"
import React from "react"
import { AiOutlineGithub } from "react-icons/ai"
import { BiSupport } from "react-icons/bi"
import { FaDonate, FaDiscord } from "react-icons/fa"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { Donate } from "../popups/Donate"
import { SocialLink } from "./SocialLink"

const MySwal = withReactContent(Swal)

interface Props {}

export const Footer: React.FC<Props> = ({}) => {
  return (
    <motion.div className="flex h-full flex-col justify-end">
      <div className="flex h-14 w-full items-center justify-between">
        <SocialLink
          href="https://github.com/spaceC00kie/kibble-check"
          icon={<AiOutlineGithub />}
          title="Source Code"
        />
        <SocialLink
          title="Discord"
          href="https://discord.gg/zGbx9x6YWw"
          icon={<FaDiscord />}
        />
        <SocialLink
          title="Donate"
          icon={<FaDonate />}
          onClick={() => {
            MySwal.fire({
              html: <Donate />,
              toast: true,
              color: "#b45309",
              background: "#fefce8",
              confirmButtonText: "Close",
              confirmButtonColor: "#b45309",
            })
          }}
        />
      </div>
    </motion.div>
  )
}
