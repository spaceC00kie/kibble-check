import { motion } from "framer-motion"
import { Calendar } from "./Calendar"
import { Auth } from "../../../containers/Auth"

export const AuthedTilesGroup: React.FC = () => {
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
          <Calendar />
        </motion.div>
      )}
    </>
  )
}
