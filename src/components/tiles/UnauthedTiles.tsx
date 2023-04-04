import { motion } from "framer-motion"
import { Auth } from "../../containers/Auth"
import { Encouragement } from "./form/Encouragement"
import { InfoSection } from "./form/InfoSection"
import { MainTile } from "./form/MainTile"
import { HeadingTile } from "./heading/HeadingTile"

export const UnauthedTiles: React.FC = () => {
  const { user, isLoading } = Auth.useContainer()

  return (
    <>
      {!user && !isLoading && (
        <motion.div
          className="flex flex-col gap-2"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeadingTile />
          <MainTile />
          <InfoSection />
          <Encouragement />
        </motion.div>
      )}
    </>
  )
}
