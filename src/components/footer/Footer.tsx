import { motion } from "framer-motion"
import React from "react"
import { AiOutlineGithub } from "react-icons/ai"
import { BiSupport } from "react-icons/bi"
import { FaDonate } from "react-icons/fa"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { Donate } from "../popups/Donate"
import { CustomerSupport } from "../popups/Support"
import { SocialLink } from "./SocialLink"

const MySwal = withReactContent(Swal)

interface Props {}

export const Footer: React.FC<Props> = ({}) => {
  return (
    <motion.div className="flex h-full flex-col justify-end">
      <div className="flex h-14 w-full items-center justify-between px-24">
        <SocialLink
          href="https://github.com/spaceC00kie/kibble-check"
          icon={<AiOutlineGithub />}
          title="Source Code"
        />
        <SocialLink
          title="Contact"
          icon={<BiSupport />}
          onClick={() => {
            MySwal.fire({
              html: <CustomerSupport />,
              icon: "warning",
              color: "#b45309",
              background: "#fefce8",
              confirmButtonText: "Close",
              confirmButtonColor: "#b45309",
            })
          }}
        />{" "}
        <SocialLink
          title="Donate"
          icon={<FaDonate />}
          onClick={() => {
            MySwal.fire({
              html: <Donate />,
              icon: "info",
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
