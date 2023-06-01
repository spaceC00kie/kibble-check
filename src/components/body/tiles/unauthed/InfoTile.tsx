import { motion } from "framer-motion"
import { BiWalk } from "react-icons/bi"
import { GiBrain } from "react-icons/gi"
import { MdMoneyOffCsred } from "react-icons/md"
import { InfoCard } from "./InfoCard"

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
        icon={<GiBrain size={36} />}
        title="Suspiciously Smart Dog?"
        description="Beware of your dog outfoxing you for nibbles."
      />
      <InfoCard
        icon={<BiWalk size={36} />}
        title="Using a Dog Walker or Pet Sitter?"
        description="Take the guesswork out of coordinating mealtimes."
      />
      <InfoCard
        icon={<MdMoneyOffCsred size={36} />}
        title="KibbleCheck is 100% free!"
        description="No ads, no data collection, no strings attached."
      />
    </motion.div>
  )
}
