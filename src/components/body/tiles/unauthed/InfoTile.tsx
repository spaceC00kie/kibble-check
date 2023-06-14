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
      className="grid gap-3 sm:grid-cols-2 md:grid-cols-3"
      role="group"
      aria-label="Reasons you might like to use KibbleCheck"
    >
      <InfoCard
        icon={<GiBrain size={36} aria-label="Brain icon" />}
        title="Suspiciously Smart Dog?"
        description="Beware of your dog outfoxing you for nibbles."
        aria-label="Smart dog info card"
      />
      <InfoCard
        icon={<BiWalk size={36} aria-label="Walk symbol" />}
        title="Using a Dog Walker or Pet Sitter?"
        description="Take the guesswork out of coordinating mealtimes."
        aria-label="Dog walker info card"
      />
      <InfoCard
        icon={
          <MdMoneyOffCsred
            size={36}
            aria-label="Dollar sign with a line through it"
          />
        }
        title="KibbleCheck is 100% free!"
        description="No ads, no data collection, no strings attached."
        aria-label="Free service info card"
      />
    </motion.div>
  )
}
