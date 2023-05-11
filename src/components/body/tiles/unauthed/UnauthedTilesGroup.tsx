import { motion } from "framer-motion"
import { Auth } from "../../../../containers/Auth"
import { Encouragement } from "./Encouragement"
import { InfoTile } from "./InfoTile"
import { MainTileUnauthed } from "./MainTileUnauthed"
import { IntroductionTile } from "./IntroductionTile"
import { Footer } from "../../../footer/Footer"

export const UnauthedTilesGroup: React.FC = () => {
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
          <IntroductionTile />
          <MainTileUnauthed />
          <InfoTile />
          <Encouragement />
          <Footer />
        </motion.div>
      )}
    </>
  )
}
