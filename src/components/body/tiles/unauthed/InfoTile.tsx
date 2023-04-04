import { motion } from "framer-motion"
import { InfoCard } from "./InfoCard"
import { TfiThought } from "react-icons/tfi"
import { GiMagickTrick } from "react-icons/gi"
import { BiWalk } from "react-icons/bi"

interface Props {}

export const InfoTile: React.FC<Props> = () => {
  return (
    <motion.div
      transition={{ duration: 0.28 }}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.09,
            when: "beforeChildren",
            type: "tween",
          },
        },
      }}
      className=" grid gap-3 rounded-md text-yellow-50 sm:grid-cols-2 md:grid-cols-3"
    >
      <InfoCard
        icon={<TfiThought />}
        title="Are you forgetful?"
        description1="... Did I actually do that?"
        description2="... Did I imagine it?"
      />
      <InfoCard
        icon={<GiMagickTrick />}
        title="Is your dog a con-artist?"
        description1="They'll lie to get more food"
      />
      <InfoCard
        icon={<BiWalk />}
        title="Do you have a dog walker?"
        description1="Everyone is on the same page!"
      />
    </motion.div>
  )
}
