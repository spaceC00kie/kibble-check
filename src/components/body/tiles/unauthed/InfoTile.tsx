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
      className="grid gap-3 rounded-md text-yellow-50 sm:grid-cols-2 md:grid-cols-3"
    >
      <InfoCard
        icon={<TfiThought />}
        title="Forgetful Much?"
        description="Ever find yourself asking: 'Did I feed the dog or just think about it?'"
      />
      <InfoCard
        icon={<GiMagickTrick />}
        title="Smart Dog, or Master Manipulator?"
        description="Does your pooch play innocent to sneak extra meals?"
      />
      <InfoCard
        icon={<BiWalk />}
        title="Using a Dog Walker or Pet Sitter?"
        description="Make sure everyone knows when your pet was last fed!"
      />
    </motion.div>
  )
}
