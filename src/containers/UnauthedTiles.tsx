import { Auth } from "../containers/Auth"
import { HeadingTile } from "../components/tiles/heading/HeadingTile"
import { Encouragement } from "../components/tiles/form/Encouragement"
import { InfoSection } from "../components/tiles/form/InfoSection"
import { MainTile } from "../components/tiles/form/MainTile"
import { motion } from "framer-motion"

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
