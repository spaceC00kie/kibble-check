import { motion } from "framer-motion"
import { MainTileAuthed } from "./form/MainTileAuthed"
import { Auth } from "../../containers/Auth"

export const AuthedTiles: React.FC = () => {
  const { user, isLoading } = Auth.useContainer()

  return (
    <>
      {user && !isLoading && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <MainTileAuthed />
        </motion.div>
      )}
    </>
  )
}
